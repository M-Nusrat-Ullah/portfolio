"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      size="icon"
      variant="default"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}