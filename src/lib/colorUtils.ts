// Helper functions to calculate matching card and text colors dynamically for Custom Theme Mode

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleanHex = hex.replace("#", "");
  if (cleanHex.length !== 6 && cleanHex.length !== 3) return null;
  
  let fullHex = cleanHex;
  if (cleanHex.length === 3) {
    fullHex = cleanHex.split("").map((c) => c + c).join("");
  }
  
  const num = parseInt(fullHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  return (
    "#" +
    [r, g, b]
      .map((x) => clamp(x).toString(16).padStart(2, "0"))
      .join("")
  );
}

// Calculate luminance to decide text contrast (WCAG standards)
export function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Compute matching card shade from main background color
export function computeCardColor(mainHex: string): string {
  const rgb = hexToRgb(mainHex);
  if (!rgb) return "#1F060D";
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  const factor = luminance < 0.2 ? 1.35 : 0.85; // Lighten if dark, darken if light
  
  return rgbToHex(rgb.r * factor, rgb.g * factor, rgb.b * factor);
}

// Compute matching text main color
export function computeTextColor(mainHex: string, forceMode?: "light" | "dark", customTextHex?: string): { main: string; muted: string } {
  if (customTextHex) {
    const rgb = hexToRgb(customTextHex);
    const lum = rgb ? getLuminance(rgb.r, rgb.g, rgb.b) : 1;
    // If text is light, mute by darkening. If text is dark, mute by lightening.
    const factor = lum > 0.5 ? 0.7 : 1.5;
    const muted = rgb ? rgbToHex(rgb.r * factor, rgb.g * factor, rgb.b * factor) : "#888888";
    return { main: customTextHex, muted };
  }

  const rgb = hexToRgb(mainHex);
  if (!rgb) return { main: "#FDF2F8", muted: "#FBCFE8" };
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  const isDarkBg = forceMode ? forceMode === "light" : luminance < 0.4;
  
  if (isDarkBg) {
    // Dark background -> Light text
    return { main: "#F8FAFC", muted: "#CBD5E1" };
  } else {
    // Light background -> Dark text
    return { main: "#0F172A", muted: "#475569" };
  }
}

// Compute primary and accent colors for gradient based on luminance
export function computeAccentColors(mainHex: string, forceMode?: "light" | "dark", customAccentHex?: string) {
  if (customAccentHex) {
    const rgb = hexToRgb(customAccentHex);
    if (rgb) {
      // Generate gradient palette from single accent color
      return {
        primary: customAccentHex,
        primaryDark: rgbToHex(rgb.r * 0.7, rgb.g * 0.7, rgb.b * 0.7),
        accent: rgbToHex(Math.min(255, rgb.r * 1.2), Math.min(255, rgb.g * 1.2), Math.min(255, rgb.b * 1.2)),
        accentSoft: rgbToHex(Math.min(255, rgb.r * 1.4), Math.min(255, rgb.g * 1.4), Math.min(255, rgb.b * 1.4)),
        bronzeDark: rgbToHex(rgb.r * 0.4, rgb.g * 0.4, rgb.b * 0.4),
      };
    }
  }

  const rgb = hexToRgb(mainHex);
  if (!rgb) {
    return {
      primary: "#F89D0A",
      primaryDark: "#DD6202",
      accent: "#FCD560",
      accentSoft: "#FCE99D",
      bronzeDark: "#621501",
    };
  }
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  // Default to light mode text/accents if dark background
  const isDarkBg = forceMode ? forceMode === "light" : luminance < 0.4;
  
  if (isDarkBg) {
    // Dark background -> Bright Gold/Orange text/accents
    return {
      primary: "#F89D0A",
      primaryDark: "#DD6202",
      accent: "#FCD560",
      accentSoft: "#FCE99D",
      bronzeDark: "#621501",
    };
  } else {
    // Light background -> Deep Bronze/Black text/accents for contrast
    return {
      primary: "#111827",        // Dark Gray (almost black)
      primaryDark: "#030712",    // Very Dark Gray
      accent: "#374151",         // Gray
      accentSoft: "#6B7280",     // Light Gray
      bronzeDark: "#000000",     // Black
    }; 
  }
}

// Apply custom colors to document root
export function applyCustomThemeColor(hex: string, forceMode?: "light" | "dark", customTextHex?: string, customAccentHex?: string) {
  if (typeof document === "undefined") return;
  
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  
  const cardHex = computeCardColor(hex);
  const { main: textMain, muted: textMuted } = computeTextColor(hex, forceMode, customTextHex);
  const accents = computeAccentColors(hex, forceMode, customAccentHex);
  
  const root = document.documentElement;
  root.style.setProperty("--bg-main", hex);
  root.style.setProperty("--bg-card", cardHex);
  root.style.setProperty("--text-main", textMain);
  root.style.setProperty("--text-muted", textMuted);
  
  root.style.setProperty("--primary-color", accents.primary);
  root.style.setProperty("--primary-color-dark", accents.primaryDark);
  root.style.setProperty("--accent-color", accents.accent);
  root.style.setProperty("--accent-color-soft", accents.accentSoft);
  root.style.setProperty("--bronze-dark-color", accents.bronzeDark);
}

// Remove custom color overrides when switching back to light or dark
export function removeCustomThemeColor() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.removeProperty("--bg-main");
  root.style.removeProperty("--bg-card");
  root.style.removeProperty("--text-main");
  root.style.removeProperty("--text-muted");
  root.style.removeProperty("--primary-color");
  root.style.removeProperty("--primary-color-dark");
  root.style.removeProperty("--accent-color");
  root.style.removeProperty("--accent-color-soft");
  root.style.removeProperty("--bronze-dark-color");
}
