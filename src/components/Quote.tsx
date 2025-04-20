import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

type QuoteProps = {
  text: string;
  author: string;
  authorTitle?: string;
  delay?: number;
};

const Quote = ({ text, author, authorTitle, delay = 0 }: QuoteProps) => {
  return (
    <motion.div
      className="bg-clarity-blue-50 rounded-xl p-6 md:p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <QuoteIcon className="absolute top-6 left-6 h-10 w-10 text-clarity-blue-200" />
      <div className="ml-8 mt-4">
        <p className="text-lg md:text-xl italic mb-6">{text}</p>
        <div>
          <p className="font-semibold text-clarity-neutral-800">{author}</p>
          {authorTitle && (
            <p className="text-sm text-clarity-neutral-500">{authorTitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;