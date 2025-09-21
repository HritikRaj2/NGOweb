import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ngo-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/606aa31d-3eac-4774-8705-058154eab43c.png" 
                alt="RUHIVE Social Welfare Foundation" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development initiatives 
              for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Get Involved', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-ngo-orange transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {['Mental Health Awareness', 'Capacity Building', 'Environmental Issues', 'Education Support', 'Community Development'].map((program) => (
                <li key={program}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-ngo-orange transition-colors duration-200 text-sm"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-ngo-orange mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Social Welfare Street<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-ngo-orange flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ngo-orange flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@ruhive.org</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-ngo-orange hover:bg-ngo-orange-light p-2 rounded-full transition-colors duration-200"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <p>&copy; 2024 RUHIVE Social Welfare Foundation. All rights reserved.</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p>Reg. No: 80G/2023/NGO | FCRA: FCR-2023-001234 | PAN: ABCDE1234F</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;