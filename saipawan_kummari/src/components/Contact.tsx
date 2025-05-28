import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import ContactItem from './ContactItem';

const contactItems = [
  {
    Icon: Mail,
    title: "Email",
    content: "saipawankummari@gmail.com",
    href: "mailto:saipawankummari@gmail.com"
  },
  {
    Icon: Phone,
    title: "Phone",
    content: "+91 7382385380",
    href: "tel:+917382385380"
  },
  {
    Icon: MapPin,
    title: "Location",
    content: "Nandyal, Andhra Pradesh"
  }
];

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/SaiPawanKummari",
    label: "GitHub"
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/sai-pawan-kummari-75061328b/",
    label: "LinkedIn"
  }
];

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 border border-gray-800">
      <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        Get in Touch
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {contactItems.map((item, index) => (
          <div key={index} className="min-w-0 break-words">
            <ContactItem {...item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-6 pt-6 border-t border-gray-700">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-cyan-400 transition-transform duration-200 hover:-translate-y-1"
            aria-label={link.label}
          >
            <link.Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
