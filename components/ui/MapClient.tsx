"use client";

import * as React from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapClientProps {
  mapboxToken: string;
}

export default function MapClient({ mapboxToken }: MapClientProps) {
  return (
    <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: -122.2,
        latitude: 38.1,
        zoom: 10,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: "100%", height: "100%" }}
    >
      <NavigationControl position="top-right" />
      {/* Marker нэмэх бол энд */}
    </Map>
  );
}
