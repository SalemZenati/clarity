import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgImageUrl?: string;
};

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  bgImageUrl = 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="absolute inset-0 bg-clarity-blue-900/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to={ctaLink}
              className="btn-primary shadow-lg shadow-clarity-blue-500/20 group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={secondaryCtaLink}
                className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;