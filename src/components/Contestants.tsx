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
    image: 'https://cdn.discordapp.com/attachments/473598884434673664/1302294039718265025/d49c3a2d9a1c92fc.png?ex=67279756&is=672645d6&hm=b1af13071d5193ff6bc6b049664e08faf85a878d57d35322bfbbdc6980f6c603&',
    subscribers: '44.5K',
    specialty: 'בבויה',
    votes: 0,
    channelUrl: 'https://www.youtube.com/@LasryYT',
    totalViews: '3.7M',
    joinDate: '2024',
    topVideo: 'בניתי פארק מים ענק בבית שלי!',
    awards: ['דילן דרור גוניור', 'ילד הבבויה']
  },
  {
    name: 'נדב Marci',
    image: 'https://cdn.discordapp.com/attachments/473598884434673664/1302294877777690655/dc4f92cee82b954a.png?ex=6727981e&is=6726469e&hm=bdacaf20ef1e0a96952f66679a49d08251a41fe7a00576c7da1d4bcd31fbebfe&',
    subscribers: '62.8K',
    specialty: 'אוכל',
    votes: 0,
    channelUrl: 'https://www.youtube.com/user/nadavqwer',
    totalViews: '5.1M',
    joinDate: '2012',
    topVideo: 'נחש מי גרסת היוטיוברים (עם מאסטר אוהד)',
    awards: ['שחקן בראול סטארס', 'אוהב מזון']
  },
  {
    name: 'נתי קנטור',
    image: 'https://cdn.discordapp.com/attachments/473598884434673664/1302295352761647215/e6eb6bcb4d2100f2.jpg?ex=6727988f&is=6726470f&hm=5cb21becc0fe9e032e5a9e7eb8914abe47d0a5237c756ea4f70aa2c401ec0b8f&',
    subscribers: '12K',
    specialty: 'מקריטה',
    votes: 0,
    channelUrl: 'https://www.youtube.com/@natikantor',
    totalViews: '176K',
    joinDate: '2021',
    topVideo: 'סטטיק ובן אל תבורי & נטע ברזילי - אפס מאמץ | פרודיה',
    awards: ['אוהב סמים מס. 1 בארץ', 'רשות הלוחמה בסמים']
  },
  {
    name: 'אלבזון',
    image: 'https://cdn.discordapp.com/attachments/473598884434673664/1302296013326913677/c64f80e14380104c.jpg?ex=6727992d&is=672647ad&hm=6e350666bff08ea545a735512af099bf667bcf8800dd6cda661ecb4fe4a91464&',
    subscribers: '92.1K',
    specialty: 'גיימינג',
    votes: 0,
    channelUrl: 'https://youtube.com/@Elbazone9',
    totalViews: '10M',
    joinDate: '2023',
    topVideo: 'תחרות טריוויה הגדולה ביותר בבראול סטארס ישראל ! ( על 1000 יהלומים ! )',
    awards: ['חרשן השנה']
  },
  {
    name: 'אלנתן אלפרט',
    image: 'https://cdn.discordapp.com/attachments/473598884434673664/1302296299869048904/b4593f5697e67a3b.jpg?ex=67279971&is=672647f1&hm=f5f78a53f155215f723d2e79bf418cc5598b6ce87371cf39b0c3a79d93a29928&',
    subscribers: '7.41K',
    specialty: 'וולוגים',
    votes: 0,
    channelUrl: 'https://youtube.com/@Elnatan_Alp',
    totalViews: '1.1M',
    joinDate: '2024',
    topVideo: 'וולוג 9 - בנינו בריכה במבנה נטוש (זה לא הלך כמתוכנן…😱)',
    awards: ['וולוגר עם אבא משוגע']
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