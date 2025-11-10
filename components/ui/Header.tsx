"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-background border-b">
      {/* Зүүн тал */}
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-semibold">DUKAREAL</h1>

        <Input placeholder="Үл хөдлөх хайх..." className="w-[200px]" />

        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Худалдах" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Худалдах">Худалдах</SelectItem>
            <SelectItem value="Түрээслэх">Түрээслэх</SelectItem>
            <SelectItem value="Авах">Авах</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Унтлагын өрөө" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 өрөө</SelectItem>
            <SelectItem value="2">2 өрөө</SelectItem>
            <SelectItem value="3">3 өрөө</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Байрын төрөл" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Хаус">Хаус</SelectItem>
            <SelectItem value="Оронсууц">Оронсууц</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Баруун тал — Theme toggle */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
