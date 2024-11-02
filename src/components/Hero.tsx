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
          poster="https://cdn.discordapp.com/attachments/473598884434673664/1302296698256752691/next_youtuber.png?ex=672799d0&is=67264850&hm=e549ec8daf60d8c9048e25dbee81239d752e64b7c25d3ad4fee108be8a4f3dd6&"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
    </header>
  );
}