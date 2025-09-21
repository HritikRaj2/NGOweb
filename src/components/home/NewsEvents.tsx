import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsEvents = () => {
  const newsItems = [
    {
      date: '25 Dec',
      title: 'Mental Health Workshop Successfully Conducted',
      description: 'Our recent workshop on stress and depression management reached over 200 college students and working professionals.',
      category: 'Workshop',
      image: '/lovable-uploads/74890673-e40e-438c-a597-d3844225c138.png'
    },
    {
      date: '15 Dec',
      title: 'New Capacity Building Program Launched',
      description: 'Launch of our comprehensive capacity building program focusing on emotional intelligence and resilience training.',
      category: 'Program Launch',
      image: '/lovable-uploads/8a638103-2437-4ead-868a-d8b713fde227.png'
    },
    {
      date: '10 Dec',
      title: 'Environmental Awareness Campaign Completed',
      description: 'Community cleanup and awareness drive successfully completed with participation from local volunteers.',
      category: 'Campaign',
      image: '/lovable-uploads/63614879-3ab3-45d5-90f3-2364df63c952.png'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-navy mb-4">
              Latest News & Events
            </h2>
            <div className="w-24 h-1 bg-ngo-orange mb-6"></div>
            <p className="text-lg text-ngo-text max-w-2xl">
              Stay updated with our latest activities, workshops, and community impact initiatives.
            </p>
          </div>
          <Button variant="outline" className="border-ngo-navy text-ngo-navy hover:bg-ngo-navy hover:text-white mt-6 lg:mt-0">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-ngo-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-ngo-text text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2 text-ngo-orange" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-ngo-navy mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-ngo-text mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <Button variant="ghost" className="text-ngo-orange hover:text-ngo-orange-light hover:bg-ngo-orange hover:bg-opacity-10 p-0">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;