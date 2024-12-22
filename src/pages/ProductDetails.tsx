import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Star, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    name: "Test Item",
    price: "1,232",
    rating: 0,
    reviews: 0,
    distance: 2.3,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],
    description: "This is a detailed description of the product...",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-primary">{product.price} Birr</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "fill-[#ffd700] text-[#ffd700]" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-accent ml-2">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm text-accent">
              <MapPin className="w-4 h-4" />
              <span>{product.distance} km away</span>
            </div>

            <Button className="w-full lg:w-auto">Add to Cart</Button>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {product.description}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="short-info">
                <AccordionTrigger>Short Info</AccordionTrigger>
                <AccordionContent>
                  Additional product information and specifications...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq">
                <AccordionTrigger>FAQ</AccordionTrigger>
                <AccordionContent>
                  Frequently asked questions about the product...
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Free shipping</h3>
                <p className="text-sm text-accent">On orders over 2000 Birr</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Very easy to return</h3>
                <p className="text-sm text-accent">Just phone number</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Nationwide delivery</h3>
                <p className="text-sm text-accent">Fast and reliable shipping</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Refunds policy</h3>
                <p className="text-sm text-accent">Easy returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;