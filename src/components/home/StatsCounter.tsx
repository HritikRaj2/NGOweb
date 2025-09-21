import { Users, MapPin, Calendar, Heart } from 'lucide-react';

const StatsCounter = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Lives Impacted',
      description: 'Individuals benefited from our programs'
    },
    {
      icon: MapPin,
      number: '150+',
      label: 'Villages Reached',
      description: 'Communities across multiple states'
    },
    {
      icon: Calendar,
      number: '200+',
      label: 'Programs Conducted',
      description: 'Workshops and awareness sessions'
    },
    {
      icon: Heart,
      number: '5,000+',
      label: 'Mental Health Sessions',
      description: 'Counseling and support provided'
    }
  ];

  return (
    <section className="py-16 bg-ngo-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact by Numbers
          </h2>
          <div className="w-24 h-1 bg-ngo-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measuring our commitment to creating positive change in communities across the nation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-ngo-orange rounded-full mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-ngo-orange mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;