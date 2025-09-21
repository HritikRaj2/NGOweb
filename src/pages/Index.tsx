import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionVision from '@/components/home/MissionVision';
import ProgramsSection from '@/components/home/ProgramsSection';
import StatsCounter from '@/components/home/StatsCounter';
import NewsEvents from '@/components/home/NewsEvents';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionVision />
      <ProgramsSection />
      <StatsCounter />
      <NewsEvents />
    </Layout>
  );
};

export default Index;
