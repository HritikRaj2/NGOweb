import Layout from '@/components/layout/Layout';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-ngo-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-ngo-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or want to collaborate with RUHIVE? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-ngo-navy mb-6">Get in Touch</h2>
            <div className="space-y-6 text-ngo-text text-lg">
              <p>
                <strong>Address:</strong><br />
                RUHIVE Social Welfare Foundation<br />
                123 Harmony Street, New Delhi, India
              </p>
              <p>
                <strong>Email:</strong><br />
                contact@ruhive.org
              </p>
              <p>
                <strong>Phone:</strong><br />
                +91 98765 43210
              </p>
              <p>
                <strong>Working Hours:</strong><br />
                Monday - Friday, 10:00 AM to 6:00 PM IST
              </p>
            </div>
          </div>

          {/* Embedded Google Form */}
          <div>
            <h2 className="text-3xl font-bold text-ngo-navy mb-6">Send Us a Message</h2>
            <div className="rounded-lg overflow-hidden shadow border border-gray-300">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSduyns3g0AeGnpUuvOhCaPuZewyG4l-qK06BqLs6zw7hmk-uQ/viewform?usp=sharing&ouid=116094468178815076263"
                width="100%"
                height="800"
                frameBorder="0"
                title="Google Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed (Optional) */}
      <section className="bg-ngo-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ngo-navy mb-4">Our Location</h2>
          <div className="w-24 h-1 bg-ngo-orange mx-auto mb-8"></div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.app.goo.gl/rkiAkXnfZKNwWH6Y9" // Replace with your actual map link
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
