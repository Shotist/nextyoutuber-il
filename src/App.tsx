import React from 'react';
import { Trophy, Star, Calendar, MapPin, Ticket } from 'lucide-react';
import { Contestants } from './components/Contestants';
import { Hero } from './components/Hero';
import { Timer } from './components/Timer';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <Timer />
        
        <section className="mb-20 slide-in">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Trophy className="w-10 h-10 text-yellow-400 animate-float" />
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">המתמודדים</h2>
          </div>
          <Contestants />
        </section>

        <section className="relative py-16 mb-20">
          <div className="absolute inset-0 bg-red-900/20 transform -skew-y-3"></div>
          <div className="relative bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-2xl p-8 backdrop-blur-sm border border-red-500/20">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-100">פרטי האירוע</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                <Calendar className="w-8 h-8 text-red-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="font-bold text-xl text-red-100">מתי?</h3>
                  <p className="text-red-200">יום חמישי, 21.11.2024</p>
                  <p className="text-red-300">20:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                <MapPin className="w-8 h-8 text-red-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="font-bold text-xl text-red-100">איפה?</h3>
                  <p className="text-red-200">היכל מנורה מבטחים</p>
                  <p className="text-red-300">תל אביב</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                <Star className="w-8 h-8 text-red-400 flex-shrink-0 transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="font-bold text-xl text-red-100">מה בתוכנית?</h3>
                  <p className="text-red-200">תחרות חיה</p>
                  <p className="text-red-300">הופעות מיוחדות</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <a 
            href="https://www.paypal.com/paypalme/boazthecatlord" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-xl font-bold py-6 px-12 rounded-full inline-flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
          >
            <Ticket className="w-6 h-6" />
            <span>לרכישת כרטיסים</span>
          </a>
        </section>
      </main>

      <footer className="bg-gradient-to-t from-black to-transparent mt-20 py-8">
        <p className="text-center text-red-300 text-sm">© 2024 היוטיובר הבא של ישראל. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}