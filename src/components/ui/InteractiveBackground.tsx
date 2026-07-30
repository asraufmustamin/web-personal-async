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

interface ProcessNode {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  type: "node" | "decision";
  pulse: number;
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

    const isVibrant = theme === "vibrant";
    const isDark = theme === "dark";

    // Setup BPMN Process Nodes for Dark Mode (BA & PM Focus)
    const bpmnNodes: ProcessNode[] = [
      { x: width * 0.15, y: height * 0.2, width: 90, height: 45, label: "BA Elicitation", type: "node", pulse: 0 },
      { x: width * 0.45, y: height * 0.25, width: 60, height: 60, label: "Feasibility?", type: "decision", pulse: 1.5 },
      { x: width * 0.75, y: height * 0.3, width: 100, height: 45, label: "SDLC Sprint", type: "node", pulse: 3 },
      { x: width * 0.3, y: height * 0.65, width: 95, height: 45, label: "UAT Testing", type: "node", pulse: 4.5 },
      { x: width * 0.65, y: height * 0.7, width: 110, height: 45, label: "System Live", type: "node", pulse: 6 },
    ];

    // Colorful Palettes per Theme
    const colors = isVibrant
      ? ["#8B5CF6", "#06B6D4", "#F43F5E", "#10B981", "#F59E0B", "#EC4899"]
      : isDark
      ? ["#F89D0A", "#94A3B8", "#64748B", "#FCD560"]
      : ["#F89D0A", "#CBD5E1", "#94A3B8"];

    const particleCount = isVibrant ? 70 : isDark ? 40 : 25;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * (isVibrant ? 3.5 : 2) + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isVibrant ? 1.0 : 0.5),
        vy: (Math.random() - 0.5) * (isVibrant ? 1.0 : 0.5),
        radius: radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.55 + 0.35,
      });
    }

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // ===============================================
      // 1. VIBRANT STUDIO MODE (Fluid Aurora Background)
      // ===============================================
      if (isVibrant) {
        // Render Floating Colorful Gradient Blobs
        const blob1X = width * 0.2 + Math.sin(frameCount * 0.01) * 60;
        const blob1Y = height * 0.3 + Math.cos(frameCount * 0.01) * 40;
        const grad1 = ctx.createRadialGradient(blob1X, blob1Y, 10, blob1X, blob1Y, 320);
        grad1.addColorStop(0, "rgba(139, 92, 246, 0.12)");
        grad1.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        const blob2X = width * 0.8 + Math.cos(frameCount * 0.012) * 50;
        const blob2Y = height * 0.7 + Math.sin(frameCount * 0.012) * 50;
        const grad2 = ctx.createRadialGradient(blob2X, blob2Y, 10, blob2X, blob2Y, 350);
        grad2.addColorStop(0, "rgba(6, 182, 212, 0.12)");
        grad2.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);
      }

      // ===============================================
      // 2. DARK MODE (BPMN Process Flow & Data Packets)
      // ===============================================
      if (isDark) {
        ctx.lineWidth = 1;

        bpmnNodes.forEach((node, idx) => {
          node.pulse += 0.02;
          const alpha = (Math.sin(node.pulse) + 1) * 0.1 + 0.05;

          ctx.strokeStyle = `rgba(248, 157, 10, ${alpha})`;
          ctx.fillStyle = `rgba(15, 23, 42, ${alpha * 2})`;

          if (node.type === "node") {
            ctx.beginPath();
            ctx.roundRect(node.x, node.y, node.width, node.height, 8);
            ctx.fill();
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(node.x + node.width / 2, node.y);
            ctx.lineTo(node.x + node.width, node.y + node.height / 2);
            ctx.lineTo(node.x + node.width / 2, node.y + node.height);
            ctx.lineTo(node.x, node.y + node.height / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }

          if (idx < bpmnNodes.length - 1) {
            const nextNode = bpmnNodes[idx + 1];
            ctx.beginPath();
            ctx.moveTo(node.x + node.width, node.y + node.height / 2);
            ctx.lineTo(nextNode.x, nextNode.y + nextNode.height / 2);
            ctx.strokeStyle = "rgba(248, 157, 10, 0.08)";
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);

            const progress = ((frameCount * 0.5 + idx * 40) % 100) / 100;
            const px = node.x + node.width + (nextNode.x - (node.x + node.width)) * progress;
            const py = node.y + node.height / 2 + (nextNode.y + nextNode.height / 2 - (node.y + node.height / 2)) * progress;

            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "#F89D0A";
            ctx.globalAlpha = 0.6;
            ctx.fill();
          }
        });
      }

      // ===============================================
      // 3. PARTICLES & COLORFUL CONSTELLATION LINES
      // ===============================================
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = isVibrant ? 160 : 120;

        if (dist < maxDist && mouseRef.current.active) {
          const force = (maxDist - dist) / maxDist;
          p.x += (dx / dist) * force * (isVibrant ? 2.2 : 1.2);
          p.y += (dy / dist) * force * (isVibrant ? 2.2 : 1.2);
          p.radius = p.baseRadius + force * (isVibrant ? 3 : 1.5);
        } else {
          if (p.radius > p.baseRadius) p.radius -= 0.1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isVibrant ? p.alpha : isDark ? p.alpha * 0.7 : p.alpha * 0.4;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);
          const maxLinkDist = isVibrant ? 130 : 90;

          if (ldist < maxLinkDist) {
            const lineAlpha = (1 - ldist / maxLinkDist) * (isVibrant ? 0.35 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isVibrant ? p.color : isDark ? "#F89D0A" : "#CBD5E1";
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = isVibrant ? 1.2 : 0.7;
            ctx.stroke();
          }
        }
      });

      // Vibrant Mouse Aurora Ripple
      if (isVibrant && mouseRef.current.active) {
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 50, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(139, 92, 246, 0.4)";
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
      style={{ opacity: theme === "vibrant" ? 0.95 : theme === "dark" ? 0.7 : 0.4 }}
    />
  );
}
