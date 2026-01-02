import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Download, Store, Users, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Counter = ({ value, suffix, isFloat }: { value: number, suffix: string, isFloat?: boolean }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()
    );

    React.useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

const StatsCounter: React.FC = () => {
    const { t } = useTranslation();

    const stats = [
        {
            icon: <Download className="w-8 h-8" />,
            value: 50000,
            label: t('stats.downloads'),
            suffix: '+'
        },
        {
            icon: <Store className="w-8 h-8" />,
            value: 120,
            label: t('stats.partners'),
            suffix: '+'
        },
        {
            icon: <Users className="w-8 h-8" />,
            value: 15000,
            label: t('stats.users'),
            suffix: '+'
        },
        {
            icon: <Star className="w-8 h-8" />,
            value: 4.9,
            label: t('stats.rating'),
            suffix: '',
            isFloat: true
        }
    ];

    return (
        <section className="py-20 bg-brand-500 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-white/20 p-4 rounded-2xl mb-4 backdrop-blur-sm">
                                {stat.icon}
                            </div>
                            <div className="text-4xl lg:text-5xl font-black mb-2 flex items-center justify-center gap-1" style={{ direction: 'ltr' }}>
                                <Counter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
                                <span>{stat.suffix}</span>
                            </div>
                            <div className="text-brand-100 font-medium text-lg">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
