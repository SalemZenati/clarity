import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import Quote from '../components/Quote';
import BreathingExercise from '../components/BreathingExercise';
import ResourceCard from '../components/ResourceCard';
import { Heart, Brain, BookOpen, User, Activity, Clock, Shield, Trees } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Feel Grounded. Reconnect With You."
        subtitle="Science-backed tools to help students manage anxiety and stress, one moment at a time."
        ctaText="Try a Quick Reset"
        ctaLink="/tools"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
        bgImageUrl="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Quick Reset Section */}
      <section className="py-16 bg-clarity-neutral-50">
        <div className="container-custom">
          <SectionHeader
            title="Need a Moment? Try This"
            subtitle="A quick breathing exercise to help you reset and refocus"
            centered
          />
          
          <div className="max-w-md mx-auto">
            <BreathingExercise />
          </div>
          
          <div className="text-center mt-8">
            <Link to="/tools" className="btn-secondary">
              Explore More Tools
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="How Clarity Helps"
            subtitle="Research-backed tools and community support for your mental wellness journey"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Mindfulness Tools"
              description="Quick exercises to help ground yourself in the present moment, from guided meditations to simple breathing techniques."
              color="text-clarity-blue-500"
              delay={0.1}
            />
            <FeatureCard
              icon={BookOpen}
              title="Reflection Journal"
              description="Track your moods, thoughts, and progress with a private digital journal that helps identify patterns and growth."
              color="text-clarity-green-500"
              delay={0.2}
            />
            <FeatureCard
              icon={User}
              title="Peer Stories"
              description="Read experiences from other students who've navigated similar challenges, helping you feel less alone."
              color="text-purple-500"
              delay={0.3}
            />
            <FeatureCard
              icon={Activity}
              title="Stress Trackers"
              description="Monitor your anxiety levels and identify triggers with simple tracking tools that provide insight over time."
              color="text-amber-500"
              delay={0.4}
            />
            <FeatureCard
              icon={Clock}
              title="Quick Interventions"
              description="Access tools that take just 2-5 minutes but can make a significant difference in managing acute anxiety moments."
              color="text-red-500"
              delay={0.5}
            />
            <FeatureCard
              icon={Shield}
              title="Resource Library"
              description="Find evidence-based articles, videos, and resources about understanding and managing anxiety as a student."
              color="text-indigo-500"
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-clarity-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Quote
              text="Using Clarity has helped me recognize when I'm starting to feel overwhelmed before it becomes too much. The quick breathing exercises have been especially helpful during finals week."
              author="Jamie, 20"
              authorTitle="Computer Science Student"
            />
          </div>
        </div>
      </section>
      
      {/* Resource Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Explore Resources"
            subtitle="Start your journey with these helpful resources"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResourceCard
              icon={Brain}
              title="Understanding Anxiety"
              description="Learn about the science of anxiety and why it affects students so intensely during college years."
              link="/resources"
              color="text-clarity-blue-400"
              delay={0.1}
            />
            <ResourceCard
              icon={Trees}
              title="Grounding Techniques"
              description="Simple practices to quickly bring your awareness back to the present moment when feeling overwhelmed."
              link="/tools"
              color="text-clarity-green-400"
              delay={0.2}
            />
            <ResourceCard
              icon={Heart}
              title="Self-Compassion Practices"
              description="Tools to nurture kindness toward yourself, especially during difficult academic periods."
              link="/tools"
              color="text-rose-400"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-clarity-blue-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              className="text-white/90 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our tools, join our community, and discover practical ways to manage anxiety and thrive as a student.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/tools"
                className="btn bg-white text-clarity-blue-500 hover:bg-clarity-blue-50"
              >
                Explore All Tools
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;