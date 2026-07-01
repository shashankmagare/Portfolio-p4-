import React, { useEffect, useRef } from 'react';

export default function CyberGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic node parameters based on screen size
    const maxParticles = Math.min(65, Math.floor((width * height) / 25000));
    const connectionDist = 130;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        // Diverse cyber accents (cyan, green, purple)
        const rand = Math.random();
        if (rand < 0.5) {
          this.color = 'rgba(6, 182, 212, '; // Cyan
        } else if (rand < 0.85) {
          this.color = 'rgba(16, 185, 129, '; // Green
        } else {
          this.color = 'rgba(139, 92, 246, '; // Purple
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce back from boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(alpha = 0.5) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + alpha + ')';
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Handle window resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Main animation loop
    const animate = () => {
      // Very faint trail to simulate deep-space digital environment
      ctx.fillStyle = 'rgba(5, 7, 15, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Render grid grid background
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      // Draw grid columns
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Draw grid rows
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw nodes
      particles.forEach((p) => {
        p.update();
        p.draw(0.4);
      });

      // Draw active network linkages
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Subtle animated packet/glow pulse along links
            if (Math.random() < 0.0003) {
              ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
              ctx.beginPath();
              // Capture intermediate glowing packet
              const t = Math.random();
              const px = particles[i].x + (particles[j].x - particles[i].x) * t;
              const py = particles[i].y + (particles[j].y - particles[i].y) * t;
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-cyber-bg"
    />
  );
}
