"use client";

import Header from "@/components/ui/Header";
import PropertiesDisplay from "@/components/ui/PropertiesDisplay";
import MapClient from "@/components/ui/MapClient";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex h-full">
        <div className="flex-1">
          <MapClient />
        </div>
        <div className="flex-1 h-screen overflow-auto">
          <PropertiesDisplay />
        </div>
      </div>
    </div>
  );
}
