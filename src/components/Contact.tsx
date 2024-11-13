import { FC } from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'varshithvh@gmail.com',
      href: 'mailto:varshithvh@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6363549133',
      href: 'tel:+916363549133',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'Portfolio Website',
      href: 'https://varshithvhegde.github.io',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/varshithvhegde',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/varshithvhegde',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/varshithvhegde',
      label: 'Twitter'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === Globe ? "_blank" : undefined}
              rel={item.icon === Globe ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden"
            >
              <div className="relative z-10 p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${item.color} mb-4`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <social.icon size={20} className="text-gray-300 hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;