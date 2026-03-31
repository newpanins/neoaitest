import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf: number;
    const FADE_DUR = 0.5; // seconds

    const loop = () => {
      if (!video.duration || video.paused) return;

      const t = video.currentTime;
      const dur = video.duration;

      if (t < FADE_DUR) {
        video.style.opacity = String(t / FADE_DUR);
      } else if (t > dur - FADE_DUR) {
        video.style.opacity = String((dur - t) / FADE_DUR);
      } else {
        video.style.opacity = "1";
      }

      raf = requestAnimationFrame(loop);
    };

    const onPlay = () => {
      raf = requestAnimationFrame(loop);
    };

    const onEnded = () => {
      cancelAnimationFrame(raf);
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("ended", onEnded);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div className="bg-background relative">
      {/* Hero wrapper with video */}
      <div className="relative min-h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Rest of the site */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
