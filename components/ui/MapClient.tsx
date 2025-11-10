"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN ||
  "pk.eyJ1IjoibmFyYW50c29ndCIsImEiOiJjbWhzb2htNDkxNG9oMmtyNHBmbjd2ODBoIn0.gy48hIsnpEpRFlGOizYqtg";

export default function MapClient() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // 🌙 Night map + 3D buildings
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [106.917, 47.918],
      zoom: 15.5,
      pitch: 60,
      bearing: -17.6,
      antialias: true,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.current.addControl(new mapboxgl.FullscreenControl(), "top-right");

    map.current.on("load", () => {
      // 🏙 Add 3D buildings
      const layers = map.current!.getStyle().layers;
      const labelLayerId = layers?.find(
        (layer) => layer.type === "symbol" && layer.layout?.["text-field"]
      )?.id;

      map.current!.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 14,
          paint: {
            "fill-extrusion-color": "#666",
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        labelLayerId
      );

      // 🌌 Sky effect
      map.current!.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun-intensity": 10,
        },
      });

      // 💡 Маркеруудын байршил
      const locations = [
        { lng: 106.917, lat: 47.918, title: "Хотын төв" },
        { lng: 106.905, lat: 47.921, title: "Сүхбаатар" },
        { lng: 106.885, lat: 47.906, title: "Баянзүрх" },
        { lng: 106.870, lat: 47.915, title: "Хан-Уул" },
        { lng: 106.930, lat: 47.930, title: "Баянгол" },
        { lng: 106.945, lat: 47.925, title: "Дүнжингарав" },
        { lng: 106.895, lat: 47.935, title: "Зайсан" },
        { lng: 106.910, lat: 47.902, title: "120 мянгат" },
        { lng: 106.950, lat: 47.910, title: "Нисэх" },
        { lng: 106.875, lat: 47.940, title: "7 буудал" },
      ];

      // 🎯 Гэрэлтдэг бөөрөнхий маркер үүсгэх
      locations.forEach((loc) => {
        const el = document.createElement("div");
        el.style.width = "18px";
        el.style.height = "18px";
        el.style.borderRadius = "50%";
        el.style.background = "radial-gradient(circle, #00ffff 0%, #0044ff 80%)";
        el.style.boxShadow = "0 0 12px 4px rgba(0, 255, 255, 0.7)";
        el.style.cursor = "pointer";
        el.style.transition = "transform 0.2s ease";
        el.onmouseenter = () => (el.style.transform = "scale(1.4)");
        el.onmouseleave = () => (el.style.transform = "scale(1)");

        new mapboxgl.Marker(el)
          .setLngLat([loc.lng, loc.lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(loc.title))
          .addTo(map.current!);
      });
    });
  }, []);

  return <div ref={mapContainer} className="w-full h-full" />;
}
