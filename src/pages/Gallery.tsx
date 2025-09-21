import Layout from "@/components/layout/Layout";

const galleryImages = [
  {
    src: "/lovable-uploads/7b23fe8e-27fc-4ef5-9721-77cfb36cc49e.png",
    alt: "Yoga Sangam Patra - International Day of Yoga Certificate from Ministry of Ayush",
    title: "International Day of Yoga 2025"
  },
  {
    src: "/lovable-uploads/9fbca227-1777-47da-a28e-4180fb62ef05.png",
    alt: "Self Awareness & Stress Management Workshop at Kunwar Satya Vira Degree College",
    title: "Mental Health Workshop"
  },
  {
    src: "/lovable-uploads/15c0175a-218b-449f-b24a-f10c9eb9a2fd.png",
    alt: "RUHIVE Foundation Director in professional setting",
    title: "Leadership Team"
  },
  {
    src: "/lovable-uploads/202b02fa-7cb2-4078-a616-e3973553c16e.png",
    alt: "Workshop session with participants and speakers",
    title: "Educational Workshop"
  },
  {
    src: "/lovable-uploads/26af5582-398c-492e-87d2-36acdb7e6f78.png",
    alt: "Award ceremony and recognition event at corporate office",
    title: "Partnership Recognition"
  },
  {
    src: "/lovable-uploads/cdb5b213-9ca0-4fd6-9fae-00690b86506f.png",
    alt: "School children receiving awards and certificates at academy event",
    title: "Student Achievement Program"
  },
  {
    src: "/lovable-uploads/81675fbd-a4b5-47de-b33c-30ca400f946d.png",
    alt: "Community radio program collaboration and book distribution",
    title: "Media Outreach Program"
  },
  {
    src: "/lovable-uploads/a06539dd-743c-40e9-a6e4-6e0d51f75988.png",
    alt: "Panel discussion and workshop session with multiple speakers",
    title: "Community Workshop"
  },
  {
    src: "/lovable-uploads/71155caf-b45b-4ae4-a2f4-d740a263d4dc.png",
    alt: "Award ceremony with student and educators at school event",
    title: "Educational Excellence Award"
  },
  {
    src: "/lovable-uploads/de346a4c-9ead-4a52-959d-9d9916de12ef.png",
    alt: "Newspaper coverage of mental health awareness program",
    title: "Media Coverage"
  }
];

const Gallery = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
              A visual journey through our impactful programs, community outreach initiatives, 
              and the positive changes we're creating together.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in creating more moments like these. Your support helps us reach more communities 
              and make a lasting impact on lives across the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Join Our Mission
              </button>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Support Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;