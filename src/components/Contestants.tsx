import React, { useState } from 'react';
import { Youtube, Instagram, Flame, ThumbsUp, Users, Video, Award } from 'lucide-react';
import { Modal } from './Modal';

interface Contestant {
  name: string;
  image: string;
  subscribers: string;
  specialty: string;
  votes: number;
  channelUrl: string;
  totalViews: string;
  joinDate: string;
  topVideo: string;
  awards: string[];
}

const contestants: Contestant[] = [
  {
    name: 'אור לסרי',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80',
    subscribers: '500K',
    specialty: 'קומדיה ווייבס',
    votes: 12543,
    channelUrl: 'https://www.youtube.com/@orlasry',
    totalViews: '50M',
    joinDate: '2015',
    topVideo: 'הסרטון שהפך לוויראלי ביותר',
    awards: ['יוטיובר השנה 2023', 'פרס הקומדיה']
  },
  {
    name: 'יוטיובר 2',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80',
    subscribers: '750K',
    specialty: 'גיימינג',
    votes: 10232,
    channelUrl: 'https://youtube.com',
    totalViews: '75M',
    joinDate: '2016',
    topVideo: 'שיא עולמי במיינקראפט',
    awards: ['גיימר השנה', 'שיאן צפיות בגיימינג']
  },
  {
    name: 'יוטיובר 3',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    subscribers: '1M',
    specialty: 'לייף סטייל',
    votes: 9876,
    channelUrl: 'https://youtube.com',
    totalViews: '100M',
    joinDate: '2017',
    topVideo: 'יום בחיים שלי',
    awards: ['יוצר השנה', 'השפעה חברתית']
  },
  {
    name: 'יוטיובר 4',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    subscribers: '300K',
    specialty: 'טכנולוגיה',
    votes: 8654,
    channelUrl: 'https://youtube.com',
    totalViews: '30M',
    joinDate: '2018',
    topVideo: 'סקירת הגאדג׳ט החדש',
    awards: ['חדשן השנה']
  },
  {
    name: 'יוטיובר 5',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    subscribers: '600K',
    specialty: 'מוזיקה',
    votes: 7432,
    channelUrl: 'https://youtube.com',
    totalViews: '60M',
    joinDate: '2019',
    topVideo: 'הקאבר המצליח ביותר',
    awards: ['מוזיקאי השנה']
  },
];

export function Contestants() {
  const [votes, setVotes] = useState(contestants.map(c => c.votes));
  const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);

  const handleVote = (index: number) => {
    setVotes(prev => prev.map((v, i) => i === index ? v + 1 : v));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contestants.map((contestant, index) => (
          <div key={index} 
               className="group relative bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div 
              className="aspect-square cursor-pointer"
              onClick={() => setSelectedContestant(contestant)}
            >
              <img 
                src={contestant.image} 
                alt={contestant.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold mb-2 text-red-100">{contestant.name}</h3>
              <p className="text-red-300 mb-3">{contestant.specialty}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Youtube className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-100">{contestant.subscribers}</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-red-100">{votes[index]} הצבעות</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleVote(index)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>הצבע</span>
                  </button>
                  <button className="bg-red-600/20 hover:bg-red-600/40 rounded-full p-2 transition-colors">
                    <Instagram className="w-5 h-5 text-red-100" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedContestant} 
        onClose={() => setSelectedContestant(null)}
      >
        {selectedContestant && (
          <div className="text-red-100">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedContestant.image} 
                alt={selectedContestant.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <h3 className="text-2xl font-bold mb-1">{selectedContestant.name}</h3>
                <p className="text-red-300">{selectedContestant.specialty}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-950/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">מנויים</span>
                </div>
                <p className="text-xl font-bold">{selectedContestant.subscribers}</p>
              </div>
              <div className="bg-red-950/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Video className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">צפיות כוללות</span>
                </div>
                <p className="text-xl font-bold">{selectedContestant.totalViews}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                הישגים
              </h4>
              <ul className="list-disc list-inside space-y-1 text-red-200">
                {selectedContestant.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <a
                href={selectedContestant.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                <span>הרשמה לערוץ</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}