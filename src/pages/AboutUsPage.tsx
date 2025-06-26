import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Heart, Sparkles } from 'lucide-react';

const AboutUsPage = () => {
  console.log('AboutUsPage loaded');

  const characters = [
    { name: 'Doraemon', role: 'The Gadget Master', img: 'https://i.pinimg.com/originals/8c/de/a2/8cdea28a9b752119e0754877395c345b.png', fallback: 'DR' },
    { name: 'Nobita', role: 'The Daydreamer', img: 'https://i.pinimg.com/originals/c9/a8/f0/c9a8f0e00b8c625802e35359a67a05ed.png', fallback: 'NB' },
    { name: 'Shizuka', role: 'The Kind Heart', img: 'https://i.pinimg.com/originals/16/e2/27/16e227fc64a75368a8f154a4f8bd36d9.png', fallback: 'SZ' },
    { name: 'Suneo', role: 'The Charmer', img: 'https://i.pinimg.com/originals/a9/91/93/a99193b2a2491a133f74f7627421c60a.png', fallback: 'SN' },
  ];

  const galleryImages = [
    { src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "A delicious spread of food on a table" },
    { src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Restaurant staff serving a dish" },
    { src: "https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "A cozy and themed restaurant interior" },
  ];

  return (
    <div className="bg-slate-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 tracking-tight">Our Wondrous Story</h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Welcome to a place where culinary magic and childhood dreams come together. Doraemon Dining Adventure was born from a love for fantastic stories and unforgettable food.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* The Concept Section */}
          <section className="mb-20">
            <Card className="overflow-hidden shadow-lg border-none">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">From a 4D Pocket to Your Plate</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    It all started with a simple idea: what if we could bring the joy and wonder of Doraemon's world to life? We imagined a restaurant where every corner is filled with charm, every dish tells a story, and every guest leaves with a smile.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our mission is to create a delightful escape, blending authentic Japanese flavors with the whimsical spirit of our favorite blue robot cat.
                  </p>
                </div>
                <AspectRatio ratio={4 / 3} className="bg-slate-100">
                  <img
                    src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Themed restaurant interior with bright lights"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </Card>
          </section>

          <Separator className="my-16" />

          {/* Meet Our Inspirations Section */}
          <section className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12">Meet Our Inspirations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {characters.map((char) => (
                <div key={char.name} className="flex flex-col items-center gap-3">
                  <Avatar className="h-24 w-24 border-4 border-blue-300 shadow-md">
                    <AvatarImage src={char.img} alt={char.name} />
                    <AvatarFallback>{char.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-slate-700 text-lg">{char.name}</h3>
                  <p className="text-sm text-slate-500">{char.role}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-16" />

          {/* Gallery Section */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">A Glimpse Into Our World</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <AspectRatio ratio={4 / 3}>
                        <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
                    </AspectRatio>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;