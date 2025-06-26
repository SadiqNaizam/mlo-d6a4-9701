import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bell } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const bestsellingItems = [
  {
    id: 1,
    name: "Dorayaki Delight",
    description: "The classic fluffy pancakes filled with sweet red bean paste.",
    price: 4.50,
    imageUrl: "https://via.placeholder.com/400x300.png/FFD700/000000?text=Dorayaki"
  },
  {
    id: 2,
    name: "Memory Bread Toast",
    description: "A magical toast that helps you remember everything! (Just kidding, it's just tasty).",
    price: 5.00,
    imageUrl: "https://via.placeholder.com/400x300.png/87CEEB/000000?text=Memory+Bread"
  },
  {
    id: 3,
    name: "Giant's Stew",
    description: "A hearty and fulfilling stew, just like Gian would make it.",
    price: 12.00,
    imageUrl: "https://via.placeholder.com/400x300.png/F08080/FFFFFF?text=Giant's+Stew"
  },
  {
    id: 4,
    name: "Shizuka's Special Tea",
    description: "A calming and refreshing tea, perfect for a relaxing afternoon.",
    price: 3.50,
    imageUrl: "https://via.placeholder.com/400x300.png/98FB98/000000?text=Special+Tea"
  },
  {
    id: 5,
    name: "Suneo's Rich Ramen",
    description: "An extravagantly rich and flavorful ramen bowl that's worth boasting about.",
    price: 15.00,
    imageUrl: "https://via.placeholder.com/400x300.png/DDA0DD/FFFFFF?text=Rich+Ramen"
  }
];

const FavoritesCarousel: React.FC = () => {
  console.log('FavoritesCarousel loaded');

  return (
    <section className="w-full bg-blue-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'sans-serif'" }}>
          Our Fan Favorites!
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {bestsellingItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-gray-200 h-full flex flex-col">
                    <CardHeader className="p-0">
                      <AspectRatio ratio={4 / 3}>
                        <img src={item.imageUrl} alt={item.name} className="object-cover w-full h-full" />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <h3 className="text-xl font-semibold text-blue-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 h-12">{item.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4 bg-gray-100/50">
                      <p className="font-bold text-lg text-red-500">${item.price.toFixed(2)}</p>
                      <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600">
                        <Link to="/menu">View Item</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-yellow-400 hover:bg-yellow-500 text-red-600 rounded-full border-2 border-red-600 shadow-md">
            <Bell className="h-7 w-7" />
            <span className="sr-only">Previous slide</span>
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-yellow-400 hover:bg-yellow-500 text-red-600 rounded-full border-2 border-red-600 shadow-md">
            <Bell className="h-7 w-7" />
            <span className="sr-only">Next slide</span>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default FavoritesCarousel;