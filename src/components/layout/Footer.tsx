import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, MapPin, Phone, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-slate-600">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">
                Doraemon Dining
              </span>
            </Link>
            <p className="text-sm">
              Your whimsical culinary adventure awaits! Step into a world of flavor and fun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-sm hover:text-blue-600 transition-colors">Menu</Link></li>
              <li><Link to="/about-us" className="text-sm hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/#faq" className="text-sm hover:text-blue-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-blue-500" />
                <span className="text-sm">123 Anywhere Door Ave, Tokyo, Japan</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-blue-500" />
                <span className="text-sm">+81 3-1234-5678</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Follow Us</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-slate-500 hover:text-blue-600" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-slate-500 hover:text-pink-600" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-slate-500 hover:text-sky-500" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Doraemon Dining Adventure. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;