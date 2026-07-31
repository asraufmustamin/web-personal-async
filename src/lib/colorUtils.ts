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
export function computeTextColor(mainHex: string): { main: string; muted: string } {
  const rgb = hexToRgb(mainHex);
  if (!rgb) return { main: "#FDF2F8", muted: "#FBCFE8" };
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  if (luminance < 0.4) {
    // Dark background -> Light text
    return { main: "#F8FAFC", muted: "#CBD5E1" };
  } else {
    // Light background -> Dark text
    return { main: "#0F172A", muted: "#475569" };
  }
}

// Compute primary accent color
export function computePrimaryColor(mainHex: string): string {
  const rgb = hexToRgb(mainHex);
  if (!rgb) return "#F89D0A";
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  if (luminance < 0.5) {
    // Dark background -> Bright Gold
    return "#F89D0A";
  } else {
    // Light background -> Deep Bronze/Orange
    return "#B45309"; 
  }
}

// Apply custom colors to document root
export function applyCustomThemeColor(hex: string) {
  if (typeof document === "undefined") return;
  
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  
  const cardHex = computeCardColor(hex);
  const { main: textMain, muted: textMuted } = computeTextColor(hex);
  const primaryHex = computePrimaryColor(hex);
  
  const root = document.documentElement;
  root.style.setProperty("--bg-main", hex);
  root.style.setProperty("--bg-card", cardHex);
  root.style.setProperty("--text-main", textMain);
  root.style.setProperty("--text-muted", textMuted);
  root.style.setProperty("--primary-color", primaryHex);
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
}
