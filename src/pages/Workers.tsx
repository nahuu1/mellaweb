import React from 'react';
import Navbar from "../components/Navbar";
import { Card } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";

const workers = [
  {
    id: 1,
    name: "Abebe Kebede",
    occupation: "Injera Maker",
    rating: 4.8,
    reviews: 156,
    distance: 2.3,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    hourlyRate: 250
  },
  {
    id: 2,
    name: "Sara Tekle",
    occupation: "House Cleaning",
    rating: 4.9,
    reviews: 203,
    distance: 1.5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    hourlyRate: 200
  },
  {
    id: 3,
    name: "Dawit Haile",
    occupation: "Plumber",
    rating: 4.7,
    reviews: 89,
    distance: 3.1,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    hourlyRate: 300
  },
  {
    id: 4,
    name: "Helen Gebre",
    occupation: "Chef",
    rating: 4.9,
    reviews: 167,
    distance: 2.8,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    hourlyRate: 400
  },
  {
    id: 5,
    name: "Yonas Bekele",
    occupation: "Electrician",
    rating: 4.6,
    reviews: 112,
    distance: 4.2,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    hourlyRate: 350
  },
  {
    id: 6,
    name: "Meron Tadesse",
    occupation: "Babysitter",
    rating: 4.9,
    reviews: 178,
    distance: 1.8,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    hourlyRate: 180
  },
  {
    id: 7,
    name: "Solomon Desta",
    occupation: "Gardener",
    rating: 4.7,
    reviews: 94,
    distance: 3.5,
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    hourlyRate: 220
  },
  {
    id: 8,
    name: "Tigist Alemu",
    occupation: "Tailor",
    rating: 4.8,
    reviews: 145,
    distance: 2.6,
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    hourlyRate: 280
  },
  {
    id: 9,
    name: "Bereket Mengistu",
    occupation: "Painter",
    rating: 4.6,
    reviews: 86,
    distance: 5.1,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    hourlyRate: 260
  }
];

const Workers = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Workers</h1>
          <p className="text-accent">
            Connect with skilled workers in your area for various services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker) => (
            <Card 
              key={worker.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{worker.name}</h3>
                <p className="text-accent mb-2">{worker.occupation}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary font-medium">{worker.hourlyRate} Birr/hr</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-accent">
                      {worker.rating} ({worker.reviews})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-accent">
                  <MapPin className="w-4 h-4" />
                  <span>{worker.distance} km away</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Workers;