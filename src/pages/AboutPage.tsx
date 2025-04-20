import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-clarity-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Clarity
            </motion.h1>
            <motion.p
              className="text-lg text-clarity-neutral-700 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Supporting student mental wellness with evidence-based tools and compassionate community
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-clarity-neutral-700 mb-4">
                Clarity was created by a team of mental health professionals, educators, and former students who understand the unique challenges that college students face today.
              </p>
              <p className="text-clarity-neutral-700 mb-4">
                Our mission is to provide accessible, evidence-based tools and resources that help students navigate anxiety, stress, and overwhelming emotions during their academic journey.
              </p>
              <p className="text-clarity-neutral-700">
                We believe that with the right support, every student can develop resilience, self-awareness, and healthy coping strategies that will serve them throughout their education and beyond.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students collaborating" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-clarity-neutral-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do at Clarity"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
              <p className="text-clarity-neutral-600">
                All our tools and resources are grounded in research and clinical best practices for anxiety management and mental wellness.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Accessible</h3>
              <p className="text-clarity-neutral-600">
                We believe mental wellness support should be available to all students, regardless of their background, resources, or previous experience.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">Empowering</h3>
              <p className="text-clarity-neutral-600">
                Our approach focuses on helping students develop their own skills and insights, rather than creating dependency on external solutions.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-3">Compassionate</h3>
              <p className="text-clarity-neutral-600">
                We recognize that struggling with anxiety is not a weakness, and we approach every student's experience with empathy and understanding.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-3">Community-Focused</h3>
              <p className="text-clarity-neutral-600">
                We believe in the power of shared experiences and create spaces for students to connect, learn from each other, and reduce isolation.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3">Holistic</h3>
              <p className="text-clarity-neutral-600">
                We address mental wellness as interconnected with physical health, social connections, academic performance, and overall life balance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            title="Our Team"
            subtitle="The passionate professionals behind Clarity"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Dr. Sarah Chen" 
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Dr. Sarah Chen</h3>
              <p className="text-clarity-blue-500 mb-3">Clinical Psychologist & Founder</p>
              <p className="text-clarity-neutral-600">
                Specializing in student mental health and anxiety disorders for over 15 years.
              </p>
            </motion.div>
            
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8977551/pexels-photo-8977551.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Mark Johnson" 
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Mark Johnson</h3>
              <p className="text-clarity-blue-500 mb-3">Education Technologist</p>
              <p className="text-clarity-neutral-600">
                Former university professor focused on making mental health tools more accessible to students.
              </p>
            </motion.div>
            
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/8977464/pexels-photo-8977464.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Dr. Maya Patel" 
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Dr. Maya Patel</h3>
              <p className="text-clarity-blue-500 mb-3">Mindfulness Researcher</p>
              <p className="text-clarity-neutral-600">
                Conducts research on the effectiveness of mindfulness interventions in academic settings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 bg-clarity-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Important Note</h2>
            <p className="text-lg mb-6">
              While Clarity provides valuable tools for managing everyday anxiety and stress, it is not a replacement for professional mental health treatment.
            </p>
            <p className="text-lg">
              If you're experiencing severe anxiety, depression, or thoughts of self-harm, please reach out to your campus counseling center, call the National Suicide Prevention Lifeline at 988, or text HOME to 741741 to reach the Crisis Text Line.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;