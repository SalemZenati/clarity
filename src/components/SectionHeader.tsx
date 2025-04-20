import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionHeader = ({
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-lg text-clarity-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;