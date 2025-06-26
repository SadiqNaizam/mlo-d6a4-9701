import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Props for the ThemedMenuItemCard component.
 */
interface ThemedMenuItemCardProps {
  /** The URL for the item's image. */
  imageUrl: string;
  /** The name of the food item. */
  title: string;
  /** The price of the food item. */
  price: number;
  /** A callback function executed when the "Add to Cart" button is clicked. */
  onAddToCart?: () => void;
}

/**
 * A themed card for displaying a single food item.
 * It features a lift effect on hover and a custom-animated button,
 * with graphical motifs inspired by the Doraemon theme.
 */
const ThemedMenuItemCard: React.FC<ThemedMenuItemCardProps> = ({
  imageUrl,
  title,
  price,
  onAddToCart = () => console.log(`'Add to Cart' clicked for ${title}, but no handler was provided.`)
}) => {
  console.log('ThemedMenuItemCard loaded for:', title);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer h-full"
    >
      <Card className="w-full h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl rounded-2xl border-2 border-blue-400 bg-white flex flex-col">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://placehold.co/400x225/E0F7FA/333333?text=Yummy+Food'}
              alt={title}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
          <p className="text-lg font-semibold text-red-500 mt-1">${price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          {/* This button has a custom theme inspired by Doraemon's bell */}
          <Button 
            onClick={onAddToCart} 
            className="w-full bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            aria-label={`Add ${title} to cart`}
          >
            <Plus className="mr-2 h-5 w-5" />
            Add to Adventure
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ThemedMenuItemCard;