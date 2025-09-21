import { Brain, Users, TreePine, GraduationCap, Heart } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Brain,
      title: 'Mental Health Awareness',
      description: 'Comprehensive programs focusing on stress management, emotional intelligence, and psychological wellbeing for students and professionals.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Skill development workshops and training sessions designed to enhance professional and personal capabilities of individuals.',
      color: 'text-green-600'
    },
    {
      icon: TreePine,
      title: 'Environmental Awareness',
      description: 'Community-driven initiatives to address environmental issues and promote sustainable practices for a greener future.',
      color: 'text-emerald-600'
    },
    {
      icon: GraduationCap,
      title: 'Educational Support',
      description: 'Quality education programs and resources for underprivileged children and adult learning opportunities.',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Community Wellness',
      description: 'Holistic wellness programs that address physical, mental, and social health needs of communities.',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-16 bg-ngo-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ngo-navy mb-4">
            Our Key Programs
          </h2>
          <div className="w-24 h-1 bg-ngo-orange mx-auto mb-6"></div>
          <p className="text-lg text-ngo-text max-w-3xl mx-auto">
            We offer comprehensive programs designed to address the most pressing needs 
            of our communities, focusing on education, mental health, and sustainable development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-ngo-orange bg-opacity-10 rounded-full mb-4">
                  <IconComponent className={`h-8 w-8 ${program.color}`} />
                </div>
                <h3 className="text-xl font-bold text-ngo-navy mb-3">
                  {program.title}
                </h3>
                <p className="text-ngo-text leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;