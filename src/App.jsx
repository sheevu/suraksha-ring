import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VoiceSOSConsole from "./components/VoiceSOSConsole";
import VoiceActivationFlow from "./components/VoiceActivationFlow";
import Features from "./components/Features";
import TechSpecs from "./components/TechSpecs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PreOrderModal from "./components/PreOrderModal";
import VideoModal from "./components/VideoModal";

export default function App() {
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main className="bg-void min-h-screen selection:bg-accent selection:text-white">
      <Navbar onOpenPreOrder={() => setPreOrderOpen(true)} />
      
      <Hero
        onOpenPreOrder={() => setPreOrderOpen(true)}
        onOpenVideoModal={() => setVideoOpen(true)}
      />

      <VoiceSOSConsole />

      <div id="flow">
        <VoiceActivationFlow />
      </div>

      <Features />

      <TechSpecs />

      <CTA onOpenPreOrder={() => setPreOrderOpen(true)} />

      <Footer />

      <PreOrderModal
        isOpen={preOrderOpen}
        onClose={() => setPreOrderOpen(false)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </main>
  );
}
