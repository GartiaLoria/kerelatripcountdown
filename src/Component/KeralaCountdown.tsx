import React, { useState, useEffect } from 'react';
import { Heart, Palmtree, Sparkles } from 'lucide-react';

const KeralaCountdown = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [message, setMessage] = useState('');

  const keralaImages = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3',
    'https://picsum.photos/1920/1080?random=4',
    'https://picsum.photos/1920/1080?random=5'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % keralaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!submittedName) return;

    const interval = setInterval(() => {
      const now = new Date();
      let targetDate;
      let customMessage = '';

      const nameLower = submittedName.toLowerCase().trim();

      if (nameLower === 'girish' || nameLower === 'girish bhardwaj') {
        targetDate = new Date('2025-12-20T07:05:00');
        customMessage = 'Bhai each second you are getting closer to the semxy Trippp 🔥😎🌴✨';
      } else if (nameLower === 'navneet' || nameLower === 'navneet singh') {
        targetDate = new Date('2025-12-19T07:05:00');
        customMessage = 'Mare ge chakku niklenga khoon, bhai ka birthday hai coming soon 🎂🎉🎊🥳';
      } else if (
        nameLower === 'loria' || 
        nameLower === 'loria manjari gartia' || 
        nameLower === 'loria m gartia' || 
        nameLower === 'loria gartia' || 
        nameLower === 'loria pyariii' || 
        nameLower === 'bamby ❤️❤️'
      ) {
        targetDate = new Date('2025-12-21T00:00:00');
        customMessage = 'Aapka exact start time toh abhi pata nahi so jis din se trip start hai ussdin ( or before for everyone and Girish the master 😗❤️ too ) vaha milnaaa 🥰😁🌺🎊';
      } else if (
        nameLower === 'shraddha' || 
        nameLower === 'shraddha mishra' || 
        nameLower === 'vanar' || 
        nameLower === 'vanar😂😂' || 
        nameLower === 'vanar sanik'
      ) {
        targetDate = new Date('2025-12-21T00:00:00');
        customMessage = 'Ap toh vahi hai aapko kya time difference 😏😏 firbhi dhek lijiye aapko vale ka janamdin hai na 🎂🍰🎈😄';
      } else {
        setMessage('KOI DUSRA ALLOWED NAHI HAI SAMJHA NAAA 😀🤬');
        setTimeLeft('');
        return;
      }

      const difference = targetDate.getTime()-now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setMessage(customMessage);
      } else {
        setTimeLeft('The trip has started! 🎉');
        setMessage('');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [submittedName]);

  const handleSubmit = () => {
    if (name.trim()) {
      setSubmittedName(name.trim());
    }
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleReset = () => {
    setSubmittedName('');
    setName('');
    setTimeLeft('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Righteous&family=Fredoka:wght@400;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
        }
        
        .float-animation { animation: float 3s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {keralaImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-2000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 2s ease-in-out'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-60" />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 glass-effect text-white py-4 md:py-6 shadow-2xl border-b border-white border-opacity-20">
        <div className="container mx-auto px-3 md:px-4 flex items-center justify-center gap-2 md:gap-3">
          <Palmtree className="w-6 h-6 md:w-8 md:h-8 text-emerald-300 float-animation" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Righteous', cursive" }}>
            Kerala Trip Countdown
          </h1>
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 float-animation" style={{ animationDelay: '0.5s' }} />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="glass-effect rounded-3xl shadow-2xl p-8 md:p-14 backdrop-blur-xl">
            <h2 
              className="text-4xl md:text-6xl font-extrabold text-center mb-10 leading-tight text-white"
              style={{ 
                textShadow: '2px 2px 20px rgba(0,0,0,0.5), 0 0 30px rgba(16, 185, 129, 0.5)',
                fontFamily: "'Fredoka', sans-serif"
              }}
            >
              This site tells you how much time is left before our trip starts 🌴✨
            </h2>

            {!submittedName ? (
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your name to findout approx accurate time"
                    className="w-full px-8 py-6 text-xl bg-white bg-opacity-90 border-4 border-emerald-400 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:border-emerald-500 transition-all shadow-lg placeholder-gray-500"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!name.trim()}
                  className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-6 rounded-2xl text-xl md:text-2xl font-bold hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl pulse-glow"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  🚀 Check My Countdown
                </button>
              </div>
            ) : (
              <div className="text-center space-y-8">
                {message && (
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
                    <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
                      {message}
                    </p>
                  </div>
                )}
                {timeLeft && (
                  <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-10 border-4 border-white shadow-2xl pulse-glow">
                    <p className="text-6xl md:text-7xl font-extrabold text-white tracking-tight" style={{ textShadow: '3px 3px 15px rgba(0,0,0,0.4)' }}>
                      {timeLeft}
                    </p>
                  </div>
                )}
                <button
                  onClick={handleReset}
                  className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  🔄 Try Another Name
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass-effect text-white py-6 border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-2 text-xl font-semibold" style={{ fontFamily: "'Righteous', cursive" }}>
            Made with <Heart className="w-6 h-6 fill-current text-pink-400 animate-pulse" /> by Girish the Master
          </p>
        </div>
      </footer>
    </div>
  );
};

export default KeralaCountdown;