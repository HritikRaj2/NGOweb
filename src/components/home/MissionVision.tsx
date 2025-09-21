const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ngo-navy mb-4">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-ngo-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-ngo-gray rounded-lg p-8 border-l-4 border-ngo-orange">
            <h3 className="text-2xl font-bold text-ngo-navy mb-4">Our Mission</h3>
            <p className="text-ngo-text leading-relaxed">
              To empower communities and improve lives through comprehensive education, 
              mental healthcare, and sustainable development initiatives. We focus on 
              building capacity and nurturing minds to create lasting positive change 
              in society.
            </p>
          </div>
          
          {/* Vision */}
          <div className="bg-ngo-gray rounded-lg p-8 border-l-4 border-ngo-navy">
            <h3 className="text-2xl font-bold text-ngo-navy mb-4">Our Vision</h3>
            <p className="text-ngo-text leading-relaxed">
              A world where every individual has access to quality education, mental 
              health support, and opportunities for personal and professional growth. 
              We envision resilient communities equipped with the tools and knowledge 
              to thrive in an ever-changing world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;