import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bell, Menu, X, Home, UtensilsCrossed, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import AnimatedCartIcon from '@/components/custom/AnimatedCartIcon';

const Header: React.FC = () => {
  console.log('Header loaded');
  const [isSheetOpen, setSheetOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { href: '/menu', label: 'Menu', icon: <UtensilsCrossed className="h-4 w-4" /> },
    { href: '/about-us', label: 'About Us', icon: <Info className="h-4 w-4" /> },
  ];

  const commonNavLinkClasses = "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200";
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${commonNavLinkClasses} ${
      isActive
        ? 'bg-blue-100 text-blue-600'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `${commonNavLinkClasses} text-base ${
    isActive
      ? 'bg-blue-100 text-blue-600'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
  }`;


  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-500 p-2 rounded-full">
            <Bell className="h-6 w-6 text-white" />
          </div>
          <span className="hidden sm:inline text-xl font-bold text-slate-800 tracking-tight">
            Doraemon Dining
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={navLinkClasses}>
              <span className="group-hover:text-blue-500">{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right side actions - Cart and Mobile Menu */}
        <div className="flex items-center gap-3">
          <AnimatedCartIcon itemCount={3} />

          {/* Mobile Menu Trigger */}
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader className="border-b pb-4">
                <Link to="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-slate-800 tracking-tight">
                    Doraemon Dining
                  </span>
                </Link>
                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} to={link.href} className={mobileNavLinkClasses} onClick={() => setSheetOpen(false)}>
                    {link.icon}
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;