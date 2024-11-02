import React, { useState, useEffect } from 'react';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-21T20:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8 animate-pulse-glow">הספירה לאחור החלה</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {[
          { label: 'ימים', value: timeLeft.days },
          { label: 'שעות', value: timeLeft.hours },
          { label: 'דקות', value: timeLeft.minutes },
          { label: 'שניות', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-lg p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-100 mb-2">{item.value}</div>
            <div className="text-red-300">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}