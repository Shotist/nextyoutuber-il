import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Flame, ThumbsUp, Users, Video, Award } from 'lucide-react';
import { Modal } from './Modal';
import pb from '../../pocketbase.ts';

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
  uid: string;
}

const contestants: Contestant[] = [
  {
    name: 'אור לסרי',
    image: 'https://shotist.net/nextil/orlasry.png',
    subscribers: '44.5K',
    specialty: 'בבויה',
    votes: 0,
    channelUrl: 'https://www.youtube.com/@LasryYT',
    totalViews: '3.7M',
    joinDate: '2024',
    topVideo: 'בניתי פארק מים ענק בבית שלי!',
    awards: ['דילן דרור גוניור', 'ילד הבבויה'],
    uid: "vmbqyfh22qwrry8"
  },
  {
    name: 'נדב Marci',
    image: 'https://shotist.net/nextil/marci.png',
    subscribers: '62.8K',
    specialty: 'אוכל',
    votes: 0,
    channelUrl: 'https://www.youtube.com/user/nadavqwer',
    totalViews: '5.1M',
    joinDate: '2012',
    topVideo: 'נחש מי גרסת היוטיוברים (עם מאסטר אוהד)',
    awards: ['שחקן בראול סטארס', 'אוהב מזון'],
    uid: "6zwusk11am3srgp"
  },
  {
    name: 'נתי קנטור',
    image: 'https://shotist.net/nextil/natti.jpg',
    subscribers: '12K',
    specialty: 'מקריטה',
    votes: 0,
    channelUrl: 'https://www.youtube.com/@natikantor',
    totalViews: '176K',
    joinDate: '2021',
    topVideo: 'סטטיק ובן אל תבורי & נטע ברזילי - אפס מאמץ | פרודיה',
    awards: ['אוהב סמים מס. 1 בארץ', 'רשות הלוחמה בסמים'],
    uid: "kz06d1gx94veryj"
  },
  {
    name: 'אלבזון',
    image: 'https://shotist.net/nextil/elbaz.jpg',
    subscribers: '92.1K',
    specialty: 'גיימינג',
    votes: 0,
    channelUrl: 'https://youtube.com/@Elbazone9',
    totalViews: '10M',
    joinDate: '2023',
    topVideo: 'תחרות טריוויה הגדולה ביותר בבראול סטארס ישראל ! ( על 1000 יהלומים ! )',
    awards: ['חרשן השנה'],
    uid: "jzy95qleav23u0i"
  },
  {
    name: 'אלנתן אלפרט',
    image: 'https://shotist.net/nextil/elnatan.jpg',
    subscribers: '7.41K',
    specialty: 'וולוגים',
    votes: 0,
    channelUrl: 'https://youtube.com/@Elnatan_Alp',
    totalViews: '1.1M',
    joinDate: '2024',
    topVideo: 'וולוג 9 - בנינו בריכה במבנה נטוש (זה לא הלך כמתוכנן…😱)',
    awards: ['וולוגר עם אבא משוגע'],
    uid: "xoh6ze2kuf2dx6x"
  },
];

export function Contestants() {
  const [votes, setVotes] = useState(contestants.map(c => c.votes));
  const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);
  
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const updatedVotes = await Promise.all(
          contestants.map(async (contestant) => {
            try {
              const data = await pb.collection('votes').getOne(contestant.uid);
              return data.votes || 0; // Use 0 if no votes are found
            } catch (error) {
              console.warn(`Error fetching votes for ${contestant.uid}:`, error);
              return 0; // Default to 0 if there's an error
            }
          })
        );
        setVotes(updatedVotes);
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };
  
    fetchVotes();
  }, []);
    
  const handleVote = async (index: number) => {
    const hasVoted = sessionStorage.getItem('hasVoted');
  
    if (hasVoted) {
      alert("You've already voted!");
      return;
    }
  
    try {
      console.log('Updating votes...');
      const contestant = contestants[index];
  
      // Increment the vote count in the database by 1
      const currentVotes = await pb.collection('votes').getOne(contestant.uid);
      await pb.collection('votes').update(contestant.uid, {
        votes: currentVotes.votes + 1,
      });
  
      // Fetch the updated vote count to ensure accuracy
      const updatedContestant = await pb.collection('votes').getOne(contestant.uid);
  
      // Update the local state with the new vote count
      setVotes(prev => prev.map((v, i) => (i === index ? updatedContestant.votes : v)));
      contestants[index].votes = updatedContestant.votes;
  
      // Store voting status in session storage
      sessionStorage.setItem('hasVoted', 'true');
      sessionStorage.setItem('votedContestant', contestant.uid);
  
      alert('Vote successful!');
    } catch (error) {
      console.error('Error updating votes:', error);
    }
  };
      // const handleVote = (index: number) => {
    
  //   setVotes(prev => prev.map((v, i) => i === index ? v + 1 : v));
    
  // };

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