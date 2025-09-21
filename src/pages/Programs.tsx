import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Brain, Users, TreePine, GraduationCap, Heart, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Mental Health Awareness Program',
      description: 'Comprehensive mental health workshops focusing on stress management, emotional intelligence, and psychological wellbeing for students and working professionals.',
      image: '/lovable-uploads/74890673-e40e-438c-a597-d3844225c138.png',
      status: 'Ongoing',
      beneficiaries: '2,500+',
      duration: '6 months',
      location: 'Maharashtra, Gujarat',
      icon: Brain,
      features: [
        'Stress and Depression Management Workshops',
        'Individual Counseling Sessions',
        'Group Therapy Programs',
        'Mental Health First Aid Training'
      ]
    },
    {
      id: 2,
      title: 'Capacity Building Initiative',
      description: 'Skill development workshops and training sessions designed to enhance professional and personal capabilities of individuals and communities.',
      image: '/lovable-uploads/8a638103-2437-4ead-868a-d8b713fde227.png',
      status: 'Ongoing',
      beneficiaries: '1,800+',
      duration: '12 months',
      location: 'Multiple States',
      icon: Users,
      features: [
        'Leadership Development Programs',
        'Communication Skills Training',
        'Professional Development Workshops',
        'Team Building Activities'
      ]
    },
    {
      id: 3,
      title: 'Environmental Awareness Campaign',
      description: 'Community-driven initiatives to address environmental issues and promote sustainable practices for a greener future.',
      image: '/lovable-uploads/63614879-3ab3-45d5-90f3-2364df63c952.png',
      status: 'Completed',
      beneficiaries: '5,000+',
      duration: '3 months',
      location: 'Rural Areas',
      icon: TreePine,
      features: [
        'Community Cleanup Drives',
        'Tree Plantation Programs',
        'Waste Management Training',
        'Sustainable Living Workshops'
      ]
    },
    {
      id: 4,
      title: 'Holistic Wellness Program',
      description: 'Comprehensive wellness initiatives addressing physical, mental, and social health needs of communities through integrated approaches.',
      image: '/lovable-uploads/75665b1a-0b21-4bd5-a814-b05f2ff68499.png',
      status: 'Planning',
      beneficiaries: 'Target: 3,000+',
      duration: '18 months',
      location: 'Urban & Rural',
      icon: Heart,
      features: [
        'Meditation and Mindfulness Training',
        'Yoga and Physical Wellness',
        'Nutrition Education Programs',
        'Community Health Camps'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-ngo-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
            <div className="w-24 h-1 bg-ngo-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive initiatives designed to create lasting positive impact in communities through education, mental health support, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={program.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Image */}
                  <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        program.status === 'Ongoing' ? 'bg-green-500 text-white' :
                        program.status === 'Completed' ? 'bg-blue-500 text-white' :
                        'bg-yellow-500 text-white'
                      }`}>
                        {program.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-ngo-orange bg-opacity-10 rounded-full">
                        <IconComponent className="h-6 w-6 text-ngo-orange" />
                      </div>
                      <h2 className="text-3xl font-bold text-ngo-navy">{program.title}</h2>
                    </div>

                    <p className="text-ngo-text leading-relaxed text-lg">
                      {program.description}
                    </p>

                    {/* Program Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-ngo-gray rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-ngo-orange" />
                        </div>
                        <p className="text-sm text-ngo-text">Beneficiaries</p>
                        <p className="font-bold text-ngo-navy">{program.beneficiaries}</p>
                      </div>
                      <div className="text-center p-4 bg-ngo-gray rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-5 w-5 text-ngo-orange" />
                        </div>
                        <p className="text-sm text-ngo-text">Duration</p>
                        <p className="font-bold text-ngo-navy">{program.duration}</p>
                      </div>
                      <div className="text-center p-4 bg-ngo-gray rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <MapPin className="h-5 w-5 text-ngo-orange" />
                        </div>
                        <p className="text-sm text-ngo-text">Coverage</p>
                        <p className="font-bold text-ngo-navy">{program.location}</p>
                      </div>
                    </div>

                    {/* Program Features */}
                    <div>
                      <h3 className="text-xl font-bold text-ngo-navy mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-ngo-orange rounded-full"></div>
                            <span className="text-ngo-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-ngo-orange hover:bg-ngo-orange-light text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ngo-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Support Our Programs?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your contribution can help us reach more communities and create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ngo-orange hover:bg-ngo-orange-light text-white">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ngo-navy">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;