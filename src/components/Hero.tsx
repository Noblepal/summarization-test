import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your Business with Our Solution
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamline your workflow, boost productivity, and achieve your goals faster with our innovative platform trusted by thousands of companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 text-lg font-semibold">
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button onClick={() => setShowVideo(true)} className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2 text-lg font-semibold">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-gray-400">User Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <div className="bg-slate-800 rounded-lg p-6 space-y-4">
                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-primary-100 rounded"></div>
                  <div className="h-16 bg-primary-100 rounded"></div>
                  <div className="h-16 bg-primary-100 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="bg-slate-800 rounded-lg p-8 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Product Demo</h3>
              <button onClick={() => setShowVideo(false)} className="text-gray-400 hover:text-gray-200">
                <X size={24} />
              </button>
            </div>
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
              <Play size={64} className="text-white opacity-50" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
