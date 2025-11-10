"use client";

import Header from "@/components/ui/Header";
import PropertiesDisplay from "@/components/ui/PropertiesDisplay";
import dynamic from "next/dynamic";

// SSR-ийг унтраасан MapClient
const MapClientNoSSR = dynamic(() => import("@/components/ui/MapClient"), {
  ssr: false,
});

export default function Home() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  console.log("Mapbox Token");
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex h-full">
        {/* Газрын зураг */}
        <div className="flex-1" style={{ height: "100%" }}>
          {mapboxToken && <MapClientNoSSR mapboxToken={mapboxToken} />}
        </div>

        {/* Байр сууцны жагсаалт */}
        <div className="flex-1 h-screen overflow-auto">
          <PropertiesDisplay />
        </div>
      </div>
    </div>
  );
}

