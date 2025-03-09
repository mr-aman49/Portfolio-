import React, { useCallback } from 'react';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const AIBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-radial from-blue-900/10 via-transparent to-transparent"></div>
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-5"></div>
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 -z-10"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#3b82f6", "#8b5cf6", "#06b6d4"],
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.05
              }
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape: {
              type: ["circle", "triangle"],
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Animated Grid Lines */}
      <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-blue-500/10"
            style={{
              left: '0',
              right: '0',
              top: `${(i + 1) * 5}%`,
              transform: 'translateX(-100%)',
              animation: `slideRight 8s ${i * 0.2}s infinite linear`
            }}
          ></div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-purple-500/10"
            style={{
              top: '0',
              bottom: '0',
              left: `${(i + 1) * 5}%`,
              transform: 'translateY(-100%)',
              animation: `slideDown 8s ${i * 0.2}s infinite linear`
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </>
  );
};

export default AIBackground;