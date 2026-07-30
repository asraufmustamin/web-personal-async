"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

const emptySubscribe = () => () => {};

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Color palettes per theme
    const isCyber = theme === "cyber";
    const isDark = theme === "dark";
    
    // Palette selection
    const colors = isCyber
      ? ["#F89D0A", "#00F0FF", "#3B82F6", "#FCD560", "#6366F1"]
      : isDark
      ? ["#F89D0A", "#334155", "#475569", "#64748B", "#FCD560"]
      : ["#F89D0A", "#CBD5E1", "#94A3B8", "#E2E8F0"];

    const particleCount = isCyber ? 75 : isDark ? 45 : 30;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isCyber ? 1.2 : 0.6),
        vy: (Math.random() - 0.5) * (isCyber ? 1.2 : 0.6),
        radius: radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Cyber Grid in Cyber Mode
      if (isCyber) {
        ctx.strokeStyle = "rgba(0, 240, 255, 0.03)";
        ctx.lineWidth = 1;
        const gridSize = 60;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // Update & draw particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction & pulsing
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = isCyber ? 180 : 130;

        if (dist < maxDist && mouseRef.current.active) {
          const force = (maxDist - dist) / maxDist;
          p.x += (dx / dist) * force * (isCyber ? 2.5 : 1.2);
          p.y += (dy / dist) * force * (isCyber ? 2.5 : 1.2);
          p.radius = p.baseRadius + force * (isCyber ? 3 : 1.5);
        } else {
          if (p.radius > p.baseRadius) p.radius -= 0.1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isCyber ? p.alpha : p.alpha * 0.5;
        ctx.fill();

        // Draw connecting constellation lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);
          const maxLinkDist = isCyber ? 140 : 100;

          if (ldist < maxLinkDist) {
            const lineAlpha = (1 - ldist / maxLinkDist) * (isCyber ? 0.35 : 0.15);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isCyber ? "#00F0FF" : isDark ? "#F89D0A" : "#CBD5E1";
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = isCyber ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      });

      // Mouse ripple effect in Cyber mode
      if (isCyber && mouseRef.current.active) {
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 40, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(248, 157, 10, 0.25)";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, theme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: theme === "cyber" ? 0.85 : theme === "dark" ? 0.5 : 0.3 }}
    />
  );
}
