import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ebrar.mangan03@gmail.com',
      href: 'mailto:ebrar.mangan03@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 555 123 45 67',
      href: 'tel:+905551234567'
    },
    {
      icon: MapPin,
      title: 'Konum',
      value: 'Ankara, Türkiye',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ebrarmn', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ebrarmn', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ebrar.mangan03@gmail.com', label: 'Email' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Mesajınız başarıyla gönderildi!');
  };

  return (
    <section id="iletişim" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              İletişim
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Projeleriniz için benimle iletişime geçin. Birlikte harika şeyler yapalım!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Mesaj Gönder</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                    placeholder="İsminizi girin"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                    placeholder="Email adresinizi girin"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                  placeholder="Mesaj konusunu girin"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Mesaj Gönder</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Sosyal Medya</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Çalışma Saatleri</h3>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pazartesi - Cuma</span>
                    <span className="text-green-400 font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cumartesi</span>
                    <span className="text-orange-400 font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pazar</span>
                    <span className="text-gray-500 font-medium">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 