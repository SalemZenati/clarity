import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock, ExternalLink, AlertTriangle } from 'lucide-react';

const SupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send the data to a server
  };

  const resources = [
    {
      title: "Crisis Text Line",
      description: "Text HOME to 741741 to connect with a Crisis Counselor. Free, 24/7 support.",
      icon: MessageSquare,
      link: "https://www.crisistextline.org/",
      urgent: true,
    },
    {
      title: "988 Suicide & Crisis Lifeline",
      description: "Call or text 988 for immediate support if you're struggling or in crisis.",
      icon: Phone,
      link: "https://988lifeline.org/",
      urgent: true,
    },
    {
      title: "Find a Campus Counseling Center",
      description: "Search for mental health services available at your college or university.",
      icon: ExternalLink,
      link: "#",
    },
    {
      title: "Therapy Resource Directory",
      description: "Find therapists who specialize in anxiety and student mental health.",
      icon: ExternalLink,
      link: "#",
    },
  ];

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
              Support & Contact
            </motion.h1>
            <motion.p
              className="text-lg text-clarity-neutral-700 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with helpful resources and reach out to our team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Urgent Support Notice */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-start md:items-center gap-4">
            <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-amber-800">Need immediate help?</h2>
              <p className="text-amber-700">
                If you're experiencing a mental health emergency or having thoughts of suicide, please call 988 or text HOME to 741741 immediately. These services are available 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeader
            title="Support Resources"
            subtitle="Connect with professional mental health services and resources"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, idx) => (
              <motion.a
                key={idx}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card flex gap-4 hover:shadow-md ${resource.urgent ? 'border-2 border-amber-300' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={`p-2 rounded-full h-fit ${resource.urgent ? 'bg-amber-100' : 'bg-clarity-blue-100'}`}>
                  <resource.icon className={`h-6 w-6 ${resource.urgent ? 'text-amber-600' : 'text-clarity-blue-600'}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{resource.title}</h3>
                    {resource.urgent && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                        Urgent Support
                      </span>
                    )}
                  </div>
                  <p className="text-clarity-neutral-600">{resource.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-clarity-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Contact Us"
                subtitle="Have questions, feedback, or want to share your story? We'd love to hear from you."
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="bg-clarity-blue-100 p-2 rounded-full h-fit">
                    <Mail className="h-6 w-6 text-clarity-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="text-clarity-neutral-600">contact@clarityapp.com</p>
                    <p className="text-sm text-clarity-neutral-500">We respond to all emails within 48 hours.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-clarity-blue-100 p-2 rounded-full h-fit">
                    <Clock className="h-6 w-6 text-clarity-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                    <p className="text-clarity-neutral-600">Monday-Friday: 9am-5pm ET</p>
                    <p className="text-sm text-clarity-neutral-500">Our team is available during these hours for live chat support.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-white rounded-lg border border-clarity-neutral-200">
                <h3 className="text-lg font-semibold mb-2">Share Your Story</h3>
                <p className="text-clarity-neutral-600 mb-4">
                  We're always looking for students who want to share their experiences with anxiety and mental wellness. Your story could help others feel less alone.
                </p>
                <p className="text-sm text-clarity-neutral-500">
                  If you're interested in contributing to our Peer Voices section, please mention it in your message.
                </p>
              </div>
            </div>
            
            <div>
              <div className="card">
                {submitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-clarity-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-clarity-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-clarity-neutral-600 mb-4">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                    
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-clarity-neutral-300 focus:border-clarity-blue-400 focus:ring focus:ring-clarity-blue-200 focus:ring-opacity-50"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-clarity-neutral-300 focus:border-clarity-blue-400 focus:ring focus:ring-clarity-blue-200 focus:ring-opacity-50"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-clarity-neutral-300 focus:border-clarity-blue-400 focus:ring focus:ring-clarity-blue-200 focus:ring-opacity-50"
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Clarity and our resources"
            centered
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2">Is Clarity a replacement for therapy?</h3>
              <p className="text-clarity-neutral-600">
                No, Clarity is not a substitute for professional mental health treatment. Our tools and resources are designed to complement professional care, not replace it. If you're experiencing significant anxiety or mental health challenges, we encourage you to seek support from a licensed therapist or counselor.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">How do I know which tools are right for me?</h3>
              <p className="text-clarity-neutral-600">
                Everyone's experience with anxiety is different, so we encourage you to explore various tools and techniques to find what works best for you. Our resources are categorized to help you find tools for specific situations (like test anxiety or social situations) and different levels of anxiety. If you're not sure where to start, the quick interventions in our Tools section are a good first step.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">Is my journal information private?</h3>
              <p className="text-clarity-neutral-600">
                Yes, your journal entries are completely private and can only be accessed by you. We use industry-standard encryption to protect your data. You can find more information about our privacy practices in our Privacy Policy.
              </p>
            </motion.div>
            
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-2">How can I contribute to Clarity?</h3>
              <p className="text-clarity-neutral-600">
                We welcome contributions from students who want to share their experiences and strategies for managing anxiety. If you're interested in sharing your story for our Peer Voices section, please contact us through the form on this page. We also appreciate feedback on our tools and resources so we can continue to improve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;