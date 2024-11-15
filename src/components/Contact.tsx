import { FC } from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaAndroid } from 'react-icons/fa';

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
    },
    {
      CustomIcon: () => (
        <div className="flex items-center space-x-1">
          <FaGooglePlay size={16} />
          <FaAndroid size={16} />
        </div>
      ),
      label: 'Google Play',
      value: 'My Android Apps',
      href: 'https://play.google.com/store/apps/dev?id=7195155598989215375',
      color: 'from-green-400 to-emerald-600'
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
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [0.9, 1.02, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.6 + i * 0.1
      }
    })
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
      />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
          />
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
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === Globe || item.CustomIcon ? "_blank" : undefined}
              rel={item.icon === Globe || item.CustomIcon ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
              <div className="relative p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className={`p-4 rounded-full bg-gradient-to-r ${item.color} mb-4`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.CustomIcon ? <item.CustomIcon /> : <item.icon size={24} className="text-white" />}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="flex justify-center items-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={socialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 relative group"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <social.icon size={20} className="text-gray-300 relative z-10 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;