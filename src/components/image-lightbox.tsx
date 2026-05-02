"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  alt: string;
  trigger: React.ReactNode;
  initialIndex?: number;
};

export function ImageLightbox({ images, alt, trigger, initialIndex = 0 }: Props) {
  const [index, setIndex] = React.useState(initialIndex);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  const next = React.useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = React.useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Keyboard navigation
  React.useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, next, prev]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="max-w-[95vw] sm:max-w-6xl p-0 overflow-hidden border-0 bg-background/95 backdrop-blur-md"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{alt} — image viewer</DialogTitle>
        <DialogDescription className="sr-only">
          Use arrow keys or buttons to navigate. Press Escape to close.
        </DialogDescription>

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-50 rounded-full bg-background/80 hover:bg-background border border-border/40"
          onClick={() => setOpen(false)}
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 left-3 z-50 px-3 py-1 rounded-full bg-background/80 border border-border/40 text-xs font-medium">
            {index + 1} / {images.length}
          </div>
        )}

        {/* Main image */}
        <div className="relative w-full aspect-video bg-black/50">
          <Image
            src={images[index]}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-contain"
            sizes="95vw"
            priority
          />
        </div>

        {/* Prev / Next buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/80 hover:bg-background border border-border/40 h-10 w-10"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/80 hover:bg-background border border-border/40 h-10 w-10"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Thumbnail strip */}
            <div className="flex justify-center gap-2 p-3 bg-background/80 border-t border-border/40 overflow-x-auto">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "relative h-12 w-20 sm:h-14 sm:w-24 flex-shrink-0 rounded overflow-hidden border-2 transition-all",
                    i === index
                      ? "border-primary opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100"
                  )}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}