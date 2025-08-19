import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'İsim', value: 'Ebrar Sena Mangan' },
    { icon: MapPin, label: 'Konum', value: 'Yenimahalle, Ankara, Türkiye' },
    { icon: Calendar, label: 'Doğum Tarihi', value: '04.08.2003' },
    { icon: Mail, label: 'Email', value: 'ebrar.mangan03@gmail.com' }
  ];

  const experiences = [
    {
      year: '2023 - Günümüz',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Modern web uygulamaları geliştirme, ekip liderliği ve proje yönetimi.'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'React ve Vue.js ile kullanıcı arayüzleri geliştirme.'
    },
    {
      year: '2019 - 2021',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Web teknolojileri öğrenme ve ilk projelerde yer alma.'
    }
  ];

  return (
    <section id="hakkımda" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
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
              Ben Kimim?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Merhaba! Ben tutkulu bir yazılım geliştiricisiyim. Kod yazmayı, problem çözmeyi ve 
            kullanıcı deneyimini en üst düzeyde tutan yenilikçi çözümler üretmeyi seviyorum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Kişisel Bilgiler</h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
                >
                  <info.icon className="text-orange-400" size={20} />
                  <div>
                    <span className="text-gray-400 text-sm">{info.label}</span>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Deneyim</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-orange-400 rounded-full"></div>
                  <div className="ml-6 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-400 font-semibold">{exp.year}</span>
                      <span className="text-green-400 text-sm">{exp.company}</span>
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">{exp.title}</h4>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Ne Yapıyorum?</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start space-x-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Modern web uygulamaları geliştiriyorum</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Kullanıcı deneyimini ön planda tutuyorum</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Problem çözme odaklı çalışıyorum</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Ekip çalışmasına değer veriyorum</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Sürekli öğrenmeye odaklanıyorum</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Neleri Seviyorum?</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start space-x-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Yeni teknolojiler öğrenmek</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Kod yazmak ve debug yapmak</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Yaratıcı çözümler üretmek</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Kullanıcı geri bildirimleri almak</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Ekip projelerinde çalışmak</span>
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Hedefim</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Her projede, kod kalitesi, performans ve kullanıcı dostu arayüzler 
                oluşturmaya özen gösteriyorum. Problem çözme becerilerim ve yaratıcı 
                yaklaşımımla, karmaşık ihtiyaçları basit ve etkili çözümlere dönüştürüyorum. 
                Modern teknolojileri takip ederek sürekli kendimi geliştiriyor ve 
                kullanıcı deneyimini en üst düzeyde tutan yenilikçi çözümler üretmeye odaklanıyorum.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 