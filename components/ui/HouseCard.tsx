import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

interface HouseCardProps {
  image: StaticImageData;
  price: string;
  houseStats: string;
  address: string;
}

const HouseCard = ({ image, price, houseStats, address }: HouseCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-lg">
      {/* House image */}
      <div className="relative w-full h-56">
        <Image
          alt="house"
          src={image}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <CardHeader className="p-4 space-y-2">
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          ${price}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          {houseStats}
        </CardDescription>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          {address}
        </CardDescription>
      </CardHeader>

      {/* Button */}
      <div className="flex justify-end pb-3 px-3">
        <Button size="sm" className="text-sm">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default HouseCard;
