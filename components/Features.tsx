import React from 'react';
import { Truck, Clock, ShieldCheck, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-brand-500" />,
      title: t('features.speed_title'),
      description: t('features.speed_desc')
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-500" />,
      title: t('features.tracking_title'),
      description: t('features.tracking_desc')
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-500" />,
      title: t('features.offers_title'),
      description: t('features.offers_desc')
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-500" />,
      title: t('features.variety_title'),
      description: t('features.variety_desc')
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 font-bold bg-brand-100 px-3 py-1 rounded-full text-sm"
          >
            {t('features.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {t('features.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="bg-brand-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;