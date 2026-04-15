import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeHelp } from './components/WhoWeHelp';
import { Services } from './components/Services';
import { ProblemsWeSolve } from './components/ProblemsWeSolve';
import { CapabilityPillars } from './components/CapabilityPillars';
import { WhyGaxGlobal } from './components/WhyGaxGlobal';
import { FinalCta } from './components/FinalCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <ProblemsWeSolve />
        <CapabilityPillars />
        <WhyGaxGlobal />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
