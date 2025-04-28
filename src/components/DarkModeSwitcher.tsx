"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function DarkModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  return (    
      <Switch
        id="dark-mode"
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />    
  );
}
