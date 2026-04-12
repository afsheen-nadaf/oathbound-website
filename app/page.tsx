"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Lock, Play, X } from "lucide-react";

export default function OathboundWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredHero, setHoveredHero] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Navbar Scroll State
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated Heroes array with individual image URLs
  const heroes = [
    {
      name: "Seraphim",
      title: "The Crimson Commander",
      class: "The Knight",
      description:
        "Strikingly handsome with long, blood-red hair. He wears a heavy navy blue cape over burnished steel plate armor. Wields a shimmering Zweihänder.",
      ability: "Iron Resolve",
      stat: "High Defense",
      imageUrl: "/image_8e2525.jpg",
      colors: ["#DC143C", "#000080"],
      bgGradient:
        "linear-gradient(135deg, rgba(220, 20, 60, 0.2) 0%, rgba(0, 0, 128, 0.4) 100%)",
      borderColor: "#B0C4DE",
    },
    {
      name: "The Elementalist",
      title: "Weaver of Magic",
      class: "The Mage",
      description:
        "Regal and calm with vibrant emerald-green hair. Flows in white and violet robes, wielding a mahogany staff topped with an ethereal blue orb.",
      ability: "Arcane Burst",
      stat: "High Magic",
      imageUrl: "/image_8e25c2.png",
      colors: ["#00C957", "#BF40BF"],
      bgGradient:
        "linear-gradient(135deg, rgba(0, 201, 87, 0.2) 0%, rgba(191, 64, 191, 0.4) 100%)",
      borderColor: "#00F5FF",
    },
    {
      name: "The Sharpshooter",
      title: "Swift Marksman",
      class: "The Archer",
      description:
        "Lean and agile with pointed ears and shimmering golden hair. Clad in forest green leathers, firing bright streaks from a white weirwood longbow.",
      ability: "Piercing Shot",
      stat: "High Speed",
      imageUrl: "/image_9ca6bf.jpg",
      colors: ["#FFD700", "#228B22"],
      bgGradient:
        "linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(34, 139, 34, 0.4) 100%)",
      borderColor: "#FFD700",
    },
    {
      name: "The Brawler",
      title: "Feral Beastman",
      class: "The Beastman",
      description:
        "A massive, hulking black-furred wolf. Wearing only tattered leather and broken iron shackles, he fights ferociously with glowing cyan claws.",
      ability: "Feral Slash",
      stat: "High Damage",
      imageUrl: "/image_9ca679.jpg",
      colors: ["#0A0A0A", "#E0FFFF"],
      bgGradient:
        "linear-gradient(135deg, rgba(10, 10, 10, 0.6) 0%, rgba(224, 255, 255, 0.2) 100%)",
      borderColor: "#E0FFFF",
    },
    {
      name: "The Ronin",
      title: "Mysterious Samurai",
      class: "The Samurai",
      description:
        "An enigmatic figure in dark lacquered O-yoroi armor with a demon faceplate and tattered red scarf. Executes blink-and-you-miss-it katana slashes.",
      ability: "Blink Slash",
      stat: "High Precision",
      imageUrl: "/image_9cad9f.jpg",
      colors: ["#1C1C1C", "#8B0000"],
      bgGradient:
        "linear-gradient(135deg, rgba(28, 28, 28, 0.6) 0%, rgba(139, 0, 0, 0.4) 100%)",
      borderColor: "#8B0000",
    },
  ];

  const controls = [
    { keys: "Arrow Keys / A, D", action: "Move Left / Right" },
    { keys: "Space / W", action: "Jump" },
    { keys: "Z / J", action: "Primary Attack" },
    { keys: "X / K", action: "Special Ability" },
    { keys: "TAB", action: "Swap Hero" },
    { keys: "ENTER", action: "Pause Game" },
  ];

  const colors = {
    obsidian: "#000000",
    bruisedPurple: "#581c87", // Warmed up to a fuchsia/plum dark tone
    maliciousRed: "#FF0000", // Kept primarily for the villain's lore specifically
    stoneGrey: "#4F4F4F",
    heroicGold: "#FFD700",
    neonViolet: "#d946ef", // Warm fuchsia/magenta glow
    deepViolet: "#4a044e", // Deep warm plum overlay
  };

  return (
    <div
      className="text-white overflow-x-hidden relative font-pixel"
      style={{ backgroundColor: colors.obsidian }}
    >
      {/* Game Overlay Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
          {/* UPDATE 1: The outer box width */}
          <div
            className="w-[960px] max-w-full border-4 rounded-xl overflow-hidden shadow-2xl relative bg-black"
            style={{ borderColor: colors.heroicGold }}
          >
            {/* Title Bar */}
            <div
              className="bg-zinc-900 p-3 border-b flex justify-between items-center w-full"
              style={{ borderColor: colors.heroicGold }}
            >
              <div
                className="font-pixel text-[10px]"
                style={{ color: colors.heroicGold }}
              >
                OATHBOUND.EXE
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="hover:text-red-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* UPDATE 2: The iframe width and height */}
            <iframe
              src="/game/index.html"
              className="w-[960px] h-[552px] max-w-full border-0 block bg-black"
              title="Oathbound: The Ten Trials"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md border-b" : "bg-transparent py-2"
        }`}
        style={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          borderColor: isScrolled ? colors.heroicGold + "40" : "transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="text-sm md:text-lg font-pixel font-bold tracking-tighter cursor-pointer hover:animate-pulse"
            style={{ color: colors.heroicGold }}
          >
            OATHBOUND
          </div>
          <div className="hidden md:flex gap-8 text-[10px] tracking-widest uppercase">
            <a
              href="#about"
              className="transition-colors hover:text-fuchsia-400"
            >
              The Story
            </a>
            <a
              href="#heroes"
              className="transition-colors hover:text-fuchsia-400"
            >
              The Heroes
            </a>
            <a
              href="#villain"
              className="transition-colors hover:text-fuchsia-400"
            >
              The Threat
            </a>
            <a
              href="#how-to-play"
              className="transition-colors hover:text-fuchsia-400"
            >
              How to Play
            </a>
          </div>
          <button
            onClick={() => setIsPlaying(true)}
            className="md:hidden px-4 py-2 font-pixel text-[8px] rounded transition-transform hover:scale-105"
            style={{
              backgroundColor: colors.heroicGold,
              color: colors.obsidian,
            }}
          >
            PLAY
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Custom Throne Room Image Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pixelated"
          style={{
            backgroundImage: "url('/bg.jpg')",
          }}
        />

        {/* Deep Warm Violet Overlay to neutralize redness and shift to a magical warm purple hue */}
        <div className="absolute inset-0 bg-[#4a044e]/70 z-0 mix-blend-multiply"></div>
        {/* Secondary dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Dynamic Star and Retro overlays lowered in opacity */}
        <div className="absolute inset-0 pixel-stars opacity-30 animate-pan-stars z-0"></div>
        <div className="absolute inset-0 pixel-retro-bg opacity-10 animate-pan-retro z-0"></div>

        {/* The Ominous Glow - Neon Warm Violet glow */}
        <div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] animate-pulse-slow opacity-40 z-0"
          style={{ backgroundColor: colors.neonViolet }}
        />

        <div className="relative z-10 text-center px-6 animate-fade-in flex flex-col items-center drop-shadow-xl">
          <p className="text-[10px] md:text-xs text-gray-300 tracking-[0.3em] uppercase mb-8 leading-loose animate-float-slow">
            Strength Through Reunion
          </p>

          <h1
            className="text-5xl md:text-8xl lg:text-9xl font-pixel font-bold mb-8 leading-tight drop-shadow-2xl text-center hover:scale-105 transition-transform duration-500"
            style={{
              color: colors.heroicGold,
              textShadow: `0 0 30px ${colors.heroicGold}80, 0 0 60px ${colors.neonViolet}80`,
            }}
          >
            OATHBOUND
            <br />
            <span className="text-xl md:text-4xl lg:text-5xl text-white mt-4 block animate-pulse">
              THE TEN TRIALS
            </span>
          </h1>

          <p className="text-[10px] md:text-sm text-gray-300 mb-12 max-w-3xl mx-auto leading-loose">
            A fractured party of heroes. A stolen squire. An omnipresent threat
            looming from the 10th floor.
            <br className="mb-4 block" />
            <span
              className="font-bold tracking-wide animate-pulse inline-block"
              style={{ color: colors.heroicGold }}
            >
              Will you survive the Obsidian Fortress?
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => setIsPlaying(true)}
              className="group relative px-10 py-5 font-pixel text-[10px] md:text-xs tracking-widest rounded transition-all duration-300 uppercase flex items-center justify-center gap-3 hover:scale-105"
              style={{
                backgroundColor: colors.heroicGold,
                color: colors.obsidian,
                boxShadow: `0 0 20px ${colors.heroicGold}80`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${colors.heroicGold}, 0 0 60px ${colors.neonViolet}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${colors.heroicGold}80`;
              }}
            >
              <Play className="w-4 h-4 fill-black group-hover:animate-pulse" />
              PLAY THE GAME
            </button>
            <a
              href="#about"
              className="group relative px-10 py-5 font-pixel text-[10px] md:text-xs tracking-widest rounded transition-all duration-300 uppercase border-2 flex items-center justify-center hover:bg-white/5 hover:scale-105"
              style={{ borderColor: colors.stoneGrey, color: colors.stoneGrey }}
            >
              READ LORE
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: colors.heroicGold }}
          />
        </div>
      </section>

      {/* Story Section */}
      <section
        id="about"
        className="relative py-24 px-6 border-t border-white/10 overflow-hidden"
        style={{ backgroundColor: colors.obsidian }}
      >
        <div className="absolute inset-0 pixel-retro-bg opacity-[0.03] animate-pan-retro z-0"></div>

        {/* Violet Ambient Hues */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
            style={{ backgroundColor: colors.deepViolet }}
          />
          <div
            className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: colors.neonViolet }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-4xl font-pixel mb-6 animate-float-slow"
              style={{ color: colors.heroicGold }}
            >
              THE STORY
            </h2>
            <div
              className="w-24 h-1 mx-auto mt-8"
              style={{
                background: `linear-gradient(to right, transparent, ${colors.heroicGold}, transparent)`,
              }}
            />
          </div>

          <div>
            <div
              className="bg-black/80 backdrop-blur-sm border rounded-lg p-10 space-y-8 shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
              style={{ borderColor: colors.stoneGrey }}
            >
              <div
                className="absolute top-0 left-0 w-2 h-full"
                style={{ backgroundColor: colors.neonViolet }}
              ></div>

              <p className="text-gray-200 leading-loose text-xs md:text-sm tracking-wide">
                <span style={{ color: colors.heroicGold }}>
                  Five heroes bound by oath
                </span>{" "}
                stand at the precipice of destiny. For years, they have trained,
                prepared, and honed their skills. But no trial could have
                prepared them for this moment.
              </p>

              <p className="text-gray-200 leading-loose text-xs md:text-sm tracking-wide">
                <span
                  className="animate-pulse font-bold"
                  style={{ color: "#f0abfc" }} // Light fuchsia/violet for emphasis
                >
                  Lord Malakor, the Vampire Lord of the Eternal Night,
                </span>{" "}
                has seized the Squire—their loyal companion, their heart. From
                his obsidian fortress beyond the mortal veil, he has issued a
                dark challenge: survive the Ten Trials, and the Squire shall be
                freed. Fail, and their names shall be forgotten, lost to the
                shadows of eternity.
              </p>

              <p className="text-gray-200 leading-loose text-xs md:text-sm tracking-wide">
                The clock is ticking. The trials await. Each one is more deadly
                than the last, designed to break the spirit and shatter the
                body.{" "}
                <span style={{ color: colors.heroicGold }}>
                  Will you answer the call?{" "}
                </span>
                Will you face the darkness and emerge victorious?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Section */}
      <section
        id="heroes"
        className="relative py-24 px-6 border-t border-white/10 overflow-hidden"
        style={{ backgroundColor: colors.obsidian }}
      >
        {/* Violet Ambient Hues */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[1000px] h-[800px] rounded-full blur-[150px] opacity-20"
            style={{ backgroundColor: colors.bruisedPurple }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-4xl font-pixel mb-8 animate-float-slow"
              style={{ color: colors.heroicGold }}
            >
              THE FRACTURED PARTY
            </h2>
            <p className="text-gray-400 text-[10px] md:text-xs leading-loose max-w-2xl mx-auto">
              Five distinct classes. Master their weapons to conquer the trials.
            </p>
            <div
              className="w-24 h-1 mx-auto mt-8"
              style={{
                background: `linear-gradient(to right, transparent, ${colors.heroicGold}, transparent)`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {heroes.map((hero, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredHero(idx)}
                onMouseLeave={() => setHoveredHero(null)}
              >
                <div
                  className="relative rounded-lg p-6 transition-all duration-300 h-full flex flex-col items-center text-center border backdrop-blur-sm hover:scale-105"
                  style={{
                    background: hero.bgGradient,
                    borderColor:
                      hoveredHero === idx ? hero.borderColor : colors.stoneGrey,
                    boxShadow:
                      hoveredHero === idx
                        ? `0 0 30px ${hero.borderColor}60`
                        : "none",
                  }}
                >
                  {/* Dynamic Individual Image Render for Character Icons */}
                  <div
                    className="mb-6 p-2 rounded bg-black/60 shadow-lg animate-float transition-transform group-hover:scale-110 group-hover:animate-none"
                    style={{ border: `1px solid ${hero.borderColor}` }}
                  >
                    <div
                      className="w-16 h-16 rounded pixelated"
                      style={{
                        backgroundImage: `url('${hero.imageUrl}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>

                  <h3
                    className="text-[8px] md:text-[9px] font-pixel mb-4 tracking-widest leading-relaxed"
                    style={{ color: hero.borderColor }}
                  >
                    {hero.class}
                  </h3>
                  <p className="text-[11px] md:text-xs font-bold text-white mb-3 leading-relaxed">
                    {hero.name}
                  </p>
                  <p className="text-[9px] text-gray-400 italic mb-6 leading-relaxed group-hover:text-white transition-colors">
                    "{hero.title}"
                  </p>

                  <p className="text-[9px] md:text-[10px] text-gray-300 tracking-wide leading-loose flex-grow">
                    {hero.description}
                  </p>

                  <div className="w-full border-t border-white/10 pt-4 mt-6 space-y-3">
                    <div className="text-[8px] text-gray-400 uppercase tracking-wider leading-relaxed">
                      Ability:
                      <br />
                      <span className="font-semibold text-white mt-1 block group-hover:animate-pulse">
                        {hero.ability}
                      </span>
                    </div>
                    <div
                      className="text-[9px] font-bold"
                      style={{ color: hero.borderColor }}
                    >
                      {hero.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villain Lore Section */}
      <section
        id="villain"
        className="relative py-24 px-6 border-t border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 pixel-retro-bg opacity-10 animate-pan-retro z-0"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to top, ${colors.deepViolet}, ${colors.obsidian} 80%)`,
          }}
        />

        {/* Ambient Hues */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-[30%] -left-[20%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: colors.maliciousRed }}
          />
          <div
            className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: colors.neonViolet }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Antagonist Details */}
          <div>
            <div
              className="space-y-8 bg-black/80 backdrop-blur p-10 rounded border hover:border-fuchsia-500/60 transition-colors duration-500"
              style={{ borderColor: colors.deepViolet }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                {/* Render the Custom All-Seeing Eye Image */}
                <div
                  className="w-20 h-20 rounded-lg bg-black pixelated shrink-0 animate-float"
                  style={{
                    backgroundImage: "url('/image_8e16c0.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: `2px solid ${colors.maliciousRed}`,
                  }}
                />
                <h2
                  className="text-xl md:text-2xl font-pixel leading-loose mt-2"
                  style={{ color: colors.maliciousRed }}
                >
                  LORD MALAKOR
                </h2>
              </div>

              <p className="text-gray-300 tracking-wide leading-loose text-xs md:text-sm">
                The Vampire Lord of the Eternal Night. From his throne in the
                Obsidian Fortress, his
                <span className="text-white animate-pulse inline-block">
                  {" "}
                  All-Seeing Eye
                </span>{" "}
                watches every move the heroes make.
              </p>

              <ul className="space-y-6 text-gray-400 text-[10px] md:text-xs leading-loose">
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span
                    className="animate-pulse"
                    style={{ color: colors.neonViolet }}
                  >
                    •
                  </span>
                  <span>
                    <strong className="text-white">Phase 1:</strong> A refined
                    monster in a charcoal waistcoat. Fights with one hand behind
                    his back, wrapping his midnight-black and blood-red cape to
                    summon bats.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span
                    className="animate-pulse"
                    style={{ color: colors.neonViolet }}
                  >
                    •
                  </span>
                  <span>
                    <strong className="text-white">Phase 2:</strong>{" "}
                    Desperation. He sheds his refined look, unleashing
                    devastating melee swipes with long, claw-like fingernails.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Squire Details */}
          <div>
            <div
              className="space-y-8 bg-black/80 backdrop-blur p-10 rounded border hover:border-yellow-400/60 transition-colors duration-500"
              style={{ borderColor: colors.heroicGold + "40" }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                <div
                  className="w-20 h-20 rounded-lg bg-black shrink-0 flex items-center justify-center animate-float-slow"
                  style={{ border: `2px solid ${colors.heroicGold}` }}
                >
                  <Lock
                    className="w-10 h-10"
                    style={{ color: colors.heroicGold }}
                  />
                </div>
                <h2
                  className="text-xl md:text-2xl font-pixel leading-loose mt-2"
                  style={{ color: colors.heroicGold }}
                >
                  LEO THE SQUIRE
                </h2>
              </div>

              <p className="text-gray-300 tracking-wide leading-loose text-xs md:text-sm">
                A teenager in an oversized blue gambeson. He lacks heavy armor,
                but carries the heart of the party.
              </p>

              <div
                className="p-6 rounded bg-white/5 border-l-4 hover:bg-white/10 transition-colors"
                style={{ borderColor: colors.heroicGold }}
              >
                <p className="tracking-wide italic text-gray-300 text-[10px] md:text-xs leading-loose">
                  "When the Vampire captured him, his signature blue cloak was
                  torn and left behind—becoming the first item the heroes find
                  to start their quest. Only his silver whistle remains to guide
                  them in the dark."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section
        id="how-to-play"
        className="relative py-24 px-6 border-t border-white/10 overflow-hidden"
        style={{ backgroundColor: colors.obsidian }}
      >
        {/* Violet Ambient Hues */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{ backgroundColor: colors.heroicGold }}
          />
          <div
            className="absolute bottom-[-10%] -left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
            style={{ backgroundColor: colors.deepViolet }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-4xl font-pixel mb-6 animate-float-slow"
              style={{ color: colors.heroicGold }}
            >
              HOW TO PLAY
            </h2>
            <div
              className="w-24 h-1 mx-auto mt-8"
              style={{
                background: `linear-gradient(to right, transparent, ${colors.heroicGold}, transparent)`,
              }}
            />
          </div>

          <div>
            <div
              className="bg-black/60 backdrop-blur-sm border rounded-lg overflow-hidden shadow-2xl hover:shadow-fuchsia-500/20 transition-shadow duration-500"
              style={{ borderColor: colors.stoneGrey }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {controls.map((control, idx) => (
                  <div
                    key={idx}
                    className={`p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 border-white/10 hover:bg-white/5 transition-colors
                      ${idx % 2 === 1 && idx !== controls.length - 1 ? "md:border-l" : ""} 
                      ${idx < controls.length - 2 ? "border-b" : ""} 
                      md:border-b-0 ${idx < 4 ? "md:border-b" : ""}`}
                  >
                    <div className="flex-1">
                      <p
                        className="font-pixel text-[9px] md:text-[10px] leading-loose group-hover:animate-pulse"
                        style={{ color: colors.heroicGold }}
                      >
                        {control.keys}
                      </p>
                    </div>
                    <div className="text-gray-300 text-[10px] md:text-xs leading-loose md:text-right">
                      {control.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="px-10 py-5 font-pixel text-[10px] md:text-xs tracking-widest rounded border transition-all duration-300 uppercase hover:bg-white/10 hover:scale-105"
              style={{
                color: colors.heroicGold,
                borderColor: colors.heroicGold,
              }}
            >
              LAUNCH GAME DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative border-t py-12"
        style={{
          backgroundColor: colors.obsidian,
          borderColor: colors.stoneGrey,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3
            className="font-pixel text-sm md:text-base mb-6 animate-pulse"
            style={{ color: colors.heroicGold }}
          >
            OATHBOUND
          </h3>
          <p className="text-[10px] text-gray-400 mb-8 max-w-md mx-auto leading-loose">
            A 16-bit medieval fantasy platformer crafted with passion. Reunited
            we stand. Divided we fall.
          </p>
          <div className="pt-8 border-t border-white/10 text-[8px] text-gray-600 leading-loose">
            <p>
              © 2026 Oathbound: The Ten Trials. Adhirath, Afsheen, Anagha &
              Avantika.
            </p>
          </div>
        </div>
      </footer>

      {/* Global & Font Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Importing only the retro pixel font required by CIE 2 Doc */
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        * {
          box-sizing: border-box;
          font-family: 'Press Start 2P', cursive;
        }

        /* Prevents blurriness when scaling up small pixel art */
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        /* Retro 16-bit checkerboard / dither pattern */
        .pixel-retro-bg {
          background-image: 
            linear-gradient(45deg, #2E0854 25%, transparent 25%, transparent 75%, #2E0854 75%, #2E0854), 
            linear-gradient(45deg, #2E0854 25%, transparent 25%, transparent 75%, #2E0854 75%, #2E0854);
          background-size: 8px 8px;
          background-position: 0 0, 4px 4px;
        }

        /* 8-bit starfield pattern */
        .pixel-stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        /* Basic Animations */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.05); }
        }

        /* New Dynamic Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pan-stars {
          from { background-position: 0 0; }
          to { background-position: 200px 200px; }
        }

        @keyframes pan-retro {
          from { background-position: 0 0, 4px 4px; }
          to { background-position: 8px 8px, 12px 12px; }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-pan-stars {
          animation: pan-stars 25s linear infinite;
        }

        .animate-pan-retro {
          animation: pan-retro 4s linear infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `,
        }}
      />
    </div>
  );
}
