import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Outcomes } from './components/Outcomes';
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

        <Services />

        <Process />
        <Outcomes />

        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
