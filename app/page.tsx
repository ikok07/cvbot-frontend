import Hero from "@/components/homepage/hero/Hero";
import Projects from "@/components/homepage/projects/Projects";
import Chatbot from "@/components/homepage/chatbot/Chatbot";

export default function Home() {
  return <div className="space-y-20">
      <Hero />
      <Chatbot />
      <Projects />
  </div>
}
