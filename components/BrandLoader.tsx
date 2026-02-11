"use client";
import { useEffect } from "react";

export default function BrandLoader() {
  useEffect(() => {
    fetch("/brand.json")
      .then(r => r.json())
      .then(brand => {
        const root = document.documentElement;

        // Set primary and secondary colors
        root.style.setProperty("--color-primary", brand.primary);
        root.style.setProperty("--color-secondary", brand.secondary);

        // Set gradient colors
        root.style.setProperty("--gradient-start", brand.secondary);
        root.style.setProperty("--gradient-end", brand.primary);

        // Calculate and set glow colors with dynamic opacity
        const glowIntensity = brand.glowIntensity || "0.5";
        const primaryRgb = hexToRgb(brand.primary);
        const secondaryRgb = hexToRgb(brand.secondary);

        if (primaryRgb) {
          root.style.setProperty(
            "--glow-primary",
            `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, ${glowIntensity})`
          );
        }

        if (secondaryRgb) {
          root.style.setProperty(
            "--glow-secondary",
            `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, ${glowIntensity})`
          );
        }

        // Set blur strength
        if (brand.blurStrength) {
          root.style.setProperty("--blur-strength", brand.blurStrength);
        }
      })
      .catch(() => {});
  }, []);

  return null;
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}
