import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemedMenuItemCard from '@/components/ThemedMenuItemCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Themed placeholder data for the menu
const menuItems = [
  // Main Courses
  {
    id: 'main-1',
    title: "Gian's 'I'm the Best!' Katsu Curry",
    price: 15.50,
    imageUrl: 'https://images.unsplash.com/photo-1598514983318-2f64f11370a2?q=80&w=2070&auto=format&fit=crop',
    category: 'main-courses',
  },
  {
    id: 'main-2',
    title: "Nobita's 'Zero-Effort' Ramen",
    price: 13.00,
    imageUrl: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=1974&auto=format&fit=crop',
    category: 'main-courses',
  },
  {
    id: 'main-3',
    title: "Shizuka's Sweet Potato Bake",
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1598579934149-169424783138?q=80&w=2070&auto=format&fit=crop',
    category: 'main-courses',
  },
  // Gadget Drinks
  {
    id: 'drink-1',
    title: "Anywhere Door Soda",
    price: 5.00,
    imageUrl: 'https://images.unsplash.com/photo-1536936435344-bd73b2a7525e?q=80&w=1974&auto=format&fit=crop',
    category: 'gadget-drinks',
  },
  {
    id: 'drink-2',
    title: "Time Kerchief Tea",
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1597481499565-ef44a734a3ca?q=80&w=1964&auto=format&fit=crop',
    category: 'gadget-drinks',
  },
  {
    id: 'drink-3',
    title: "Small Light Smoothie",
    price: 6.00,
    imageUrl: 'https://images.unsplash.com/photo-1610970881699-44a5c8a0f493?q=80&w=1974&auto=format&fit=crop',
    category: 'gadget-drinks',
  },
  // Sweets
  {
    id: 'sweet-1',
    title: "Classic Dorayaki Delight",
    price: 7.00,
    imageUrl: 'https://images.unsplash.com/photo-1608865256994-681699863812?q=80&w=2070&auto=format&fit=crop',
    category: 'sweets',
  },
  {
    id: 'sweet-2',
    title: "Memory Bread French Toast",
    price: 8.50,
    imageUrl: 'https://images.unsplash.com/photo-1584734895763-a388415a126d?q=80&w=1974&auto=format&fit=crop',
    category: 'sweets',
  },
  {
    id: 'sweet-3',
    title: "4D Pocket Parfait",
    price: 9.00,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-76-242283561937?q=80&w=1974&auto=format&fit=crop',
    category: 'sweets',
  },
];

const categories = [
  { value: 'main-courses', label: 'Main Courses' },
  { value: 'gadget-drinks', label: 'Gadget Drinks' },
  { value: 'sweets', label: 'Sweets' },
];

const MenuPage = () => {
  console.log('MenuPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-sky-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight">Our Delicious Adventures</h1>
            <p className="mt-4 text-lg text-slate-600">Choose your favorite treat and join the fun!</p>
          </div>

          <Tabs defaultValue="main-courses" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex h-auto mb-8">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value} 
                  className="text-sm md:text-base px-4 py-2.5 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-md"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(cat => (
              <TabsContent key={cat.value} value={cat.value}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {menuItems
                    .filter(item => item.category === cat.value)
                    .map(item => (
                      <ThemedMenuItemCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onAddToCart={() => console.log(`Added ${item.title} to cart`)}
                      />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;