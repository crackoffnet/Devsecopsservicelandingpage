import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Outcomes } from './components/Outcomes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { GoogleAdPlaceholder } from './components/GoogleAd';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Ad after Hero - High visibility */}
        <div className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GoogleAdPlaceholder height="120px" text="Banner Advertisement" className="max-w-4xl mx-auto" />
          </div>
        </div>

        <Services />
        
        {/* Ad after Services - Mid-page engagement */}
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GoogleAdPlaceholder height="250px" text="Display Advertisement" className="max-w-3xl mx-auto" />
          </div>
        </div>

        <Process />
        <Outcomes />
        
        {/* Ad before Contact - Pre-conversion */}
        <div className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GoogleAdPlaceholder height="90px" text="Leaderboard Advertisement" className="max-w-5xl mx-auto" />
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}