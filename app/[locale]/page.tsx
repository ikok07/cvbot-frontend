import Hero from "@/components/homepage/hero/Hero";
import Projects from "@/components/homepage/projects/Projects";
import Chatbot from "@/components/homepage/chatbot/Chatbot";
import HomepageNavigation from "@/components/homepage/nav/HomepageNavigation";
import HomepageNavigationProvider from "@/providers/HomepageNavigationProvider";
import HomepageFooter from "@/components/homepage/footer/HomepageFooter";

export default async function Home() {
  return <HomepageNavigationProvider>
      <div className="space-y-20 md:pt-20">
          <HomepageNavigation />
          <Hero />
          <Chatbot />
          <Projects />
          <HomepageFooter />
      </div>
  </HomepageNavigationProvider>
}
