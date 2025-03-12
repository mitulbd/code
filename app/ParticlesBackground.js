"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      init={(engine) => loadSlim(engine)}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        particles: {
          color: { value: ["#de5145", "#ffce44", "#19a15f", "#56a8f4"] },
          links: { enable: false },
          collisions: { enable: true },
          move: { enable: true, outMode: "bounce", speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 7 },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { random: true, value: 10 },
        },
        detectRetina: true,
      }}
    />
  );
}