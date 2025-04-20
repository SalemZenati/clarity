import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  delay?: number;
};

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  color = 'text-clarity-blue-500',
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="card hover:translate-y-[-4px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`p-3 rounded-full w-fit mb-4 ${color.replace('text-', 'bg-').replace('500', '100')}`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-clarity-neutral-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;