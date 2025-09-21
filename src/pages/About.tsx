import Layout from '@/components/layout/Layout';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Mental health advocate with 15+ years of experience in community development.'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Program Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Expert in capacity building and educational program development.'
    },
    {
      name: 'Anita Singh',
      position: 'Mental Health Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Licensed counselor specializing in stress management and emotional wellness.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every individual and community with empathy and understanding.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We focus on creating measurable, lasting positive change in communities.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working together with communities and stakeholders.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs and services.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-ngo-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About RUHIVE</h1>
            <div className="w-24 h-1 bg-ngo-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Committed to building stronger communities through education, mental health awareness, and sustainable development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ngo-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-ngo-text leading-relaxed">
                <p>
                  RUHIVE Social Welfare Foundation was established in 2020 with a vision to address 
                  the growing mental health challenges faced by students and working professionals. 
                  Our journey began when our founder, Dr. Priya Sharma, recognized the urgent need 
                  for comprehensive mental health support in educational institutions and workplaces.
                </p>
                <p>
                  What started as small community workshops has now grown into a comprehensive 
                  organization serving thousands of individuals across multiple states. We have 
                  expanded our focus to include capacity building, environmental awareness, and 
                  community development programs.
                </p>
                <p>
                  Today, RUHIVE stands as a beacon of hope, providing evidence-based mental health 
                  support, practical skill development, and sustainable solutions to community challenges.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/9bf9b542-56ba-4a83-bb2f-312078090b7b.png" 
                alt="About RUHIVE" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-ngo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ngo-navy mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-ngo-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-ngo-orange bg-opacity-10 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-ngo-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-ngo-navy mb-3">{value.title}</h3>
                  <p className="text-ngo-text">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ngo-navy mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-ngo-orange mx-auto mb-6"></div>
            <p className="text-lg text-ngo-text max-w-2xl mx-auto">
              Meet the dedicated professionals who lead our mission to create positive change in communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-ngo-gray p-6 rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-ngo-navy mb-2">{member.name}</h3>
                <p className="text-ngo-orange font-semibold mb-3">{member.position}</p>
                <p className="text-ngo-text text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-ngo-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Legal Information</h2>
            <div className="w-24 h-1 bg-ngo-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">80G Registration</h3>
              <p className="text-gray-300">80G/2023/NGO/12345</p>
              <p className="text-sm text-gray-400 mt-2">Tax exemption certificate valid</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">FCRA Registration</h3>
              <p className="text-gray-300">FCR-2023-001234</p>
              <p className="text-sm text-gray-400 mt-2">Foreign contribution regulation approval</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">PAN Number</h3>
              <p className="text-gray-300">ABCDE1234F</p>
              <p className="text-sm text-gray-400 mt-2">Permanent account number</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;