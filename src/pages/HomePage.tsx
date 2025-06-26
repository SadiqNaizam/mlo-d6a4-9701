import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FavoritesCarousel from '@/components/FavoritesCarousel';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Icons
import { Utensils, Zap, Smile } from 'lucide-react';

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-24 md:py-32"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541701494587-b959cc3528ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=rb-3.2.1')" }}
        >
          <div className="absolute inset-0 bg-blue-600 opacity-70"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'sans-serif'" }}>
              Welcome to Doraemon Dining Adventure!
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              A whimsical culinary journey with your favorite characters, where every bite is a new discovery.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 text-red-600 hover:bg-yellow-500 font-bold text-lg py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105">
              <Link to="/menu">View Our Magical Menu</Link>
            </Button>
          </div>
        </section>

        {/* Favorites Carousel Section */}
        <FavoritesCarousel />

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'sans-serif'" }}>
              An Unforgettable Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 rounded-full p-4 w-fit">
                     <Utensils className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="mt-4 text-xl text-slate-800">Themed Delights</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <p>Every dish is inspired by the world of Doraemon, crafted to spark joy and nostalgia.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                 <CardHeader>
                   <div className="mx-auto bg-yellow-100 rounded-full p-4 w-fit">
                     <Zap className="h-8 w-8 text-yellow-500" />
                   </div>
                   <CardTitle className="mt-4 text-xl text-slate-800">Magical Atmosphere</CardTitle>
                 </CardHeader>
                 <CardContent className="text-slate-600">
                   <p>Our restaurant is a playground of fun, with interactive decor and character themes.</p>
                 </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                 <CardHeader>
                   <div className="mx-auto bg-red-100 rounded-full p-4 w-fit">
                     <Smile className="h-8 w-8 text-red-500" />
                   </div>
                   <CardTitle className="mt-4 text-xl text-slate-800">Family Friendly Fun</CardTitle>
                 </CardHeader>
                 <CardContent className="text-slate-600">
                   <p>A perfect spot for families and fans of all ages to create lasting memories together.</p>
                 </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;