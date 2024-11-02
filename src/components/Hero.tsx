import React from 'react';
import { Youtube } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80"></div>
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      <div className="relative text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Youtube className="w-12 h-12 text-red-500 animate-float" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse-glow bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
          היוטיובר הבא של ישראל
        </h1>
        <p className="text-xl md:text-2xl text-red-100 mb-8">
          חמשת היוצרים הגדולים בישראל מתחרים על התואר הנחשק
        </p>
      </div>
    </header>
  );
}