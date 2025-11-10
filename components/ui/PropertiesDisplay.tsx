import React from 'react'
import house1 from "@/public/house1.jpg"
import house2 from "@/public/house2.jpg"
import house3 from "@/public/house3.jpg"
import house4 from "@/public/house4.jpg"
import HouseCard from './HouseCard'

const houseList = [
  {
    image: house1,
    price: "2,600,000",
    houseStats: "4 bd 3 ba 4000 m2",
    address: "Аянгaл дүүрэг 1-р хороо 55б 703 тоот",
  },
  {
    image: house2,
    price: "2,600,000",
    houseStats: "4 bd 3 ba 4000 m2",
    address: "Аянгaл дүүрэг 1-р хороо 55б 703 тоот",
  },
  {
    image: house3,
    price: "2,600,000",
    houseStats: "4 bd 3 ba 4000 m2",
    address: "Аянгaл дүүрэг 1-р хороо 55б 703 тоот",
  },
  {
    image: house4,
    price: "2,600,000",
    houseStats: "4 bd 3 ba 4000 m2",
    address: "Аянгaл дүүрэг 1-р хороо 55б 703 тоот",
  },
];

const PropertiesDisplay = () => {
  return (
    <div className="grid grid-cols-2 min-w-[500px] gap-6 overflow-auto">
      {houseList.map((house, index) => (
        <HouseCard
          key={index}
          image={house.image}
          price={house.price}
          houseStats={house.houseStats}
          address={house.address}
        />
      ))}
    </div>
  );
};

export default PropertiesDisplay;
