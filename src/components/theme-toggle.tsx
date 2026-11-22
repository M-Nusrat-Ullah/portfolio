"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // true only after hydration, so the label never mismatches the server render
  const mounted = React.useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      className="relative h-9 w-9"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-transform dark:scale-0" aria-hidden="true" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-transform dark:scale-100" aria-hidden="true" />
    </Button>
  );
}
