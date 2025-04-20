import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

type ResourceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color?: string;
  delay?: number;
};

const ResourceCard = ({
  title,
  description,
  icon: Icon,
  link,
  color = 'text-clarity-blue-400',
  delay = 0,
}: ResourceCardProps) => {
  return (
    <motion.div
      className="card group hover:bg-clarity-blue-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`p-3 rounded-full w-fit mb-4 ${color.replace('text-', 'bg-').replace('400', '100')}`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-clarity-neutral-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center font-medium text-clarity-blue-500 hover:text-clarity-blue-600"
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ResourceCard;