import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Book, BookOpen, Video, Link as LinkIcon, Search, X } from 'lucide-react';

// Resource types
type ResourceType = 'all' | 'article' | 'video' | 'guide' | 'link';

type Resource = {
  id: number;
  title: string;
  description: string;
  type: Exclude<ResourceType, 'all'>;
  tags: string[];
  link: string;
  source?: string;
  date?: string;
};

const ResourcesPage = () => {
  const [selectedType, setSelectedType] = useState<ResourceType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resources: Resource[] = [
    {
      id: 1,
      title: "Understanding Anxiety: The Science Behind Your Stress Response",
      description: "An in-depth look at what happens in your brain and body when you experience anxiety, and why the student experience can intensify these reactions.",
      type: "article",
      tags: ["science", "anxiety basics", "biology"],
      link: "#",
      source: "Journal of Student Wellbeing",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "5-Minute Mindfulness Practices for Before Exams",
      description: "A collection of quick mindfulness exercises specifically designed to reduce test anxiety in the moments before an exam.",
      type: "guide",
      tags: ["exams", "mindfulness", "practical", "quick"],
      link: "#",
      date: "February 3, 2024"
    },
    {
      id: 3,
      title: "How to Talk to Your Professors About Anxiety",
      description: "A step-by-step guide to having productive conversations with faculty members about anxiety-related accommodations and support.",
      type: "article",
      tags: ["academic", "communication", "professors"],
      link: "#",
      source: "College Mental Health Center",
      date: "January 22, 2024"
    },
    {
      id: 4,
      title: "The Science of Breathing: How Your Breath Controls Your Nervous System",
      description: "Explore the physiological connection between breathing patterns and anxiety, and learn specific breathing techniques based on scientific research.",
      type: "video",
      tags: ["breathing", "science", "techniques"],
      link: "#",
      source: "Neuroscience of Wellness",
      date: "December 10, 2023"
    },
    {
      id: 5,
      title: "Finding Support: Campus Mental Health Resources",
      description: "A comprehensive directory of mental health services available at universities across the country, with information on how to access them.",
      type: "link",
      tags: ["campus resources", "therapy", "support"],
      link: "#",
      source: "Higher Education Mental Health Alliance",
      date: "November 5, 2023"
    },
    {
      id: 6,
      title: "Sleep and Anxiety: Breaking the Cycle",
      description: "How sleep deprivation contributes to anxiety, and practical strategies to improve your sleep quality as a busy student.",
      type: "article",
      tags: ["sleep", "lifestyle", "practical"],
      link: "#",
      source: "Sleep Research Institute",
      date: "October 18, 2023"
    },
    {
      id: 7,
      title: "Cognitive Behavioral Techniques for Academic Stress",
      description: "Learn how to identify and challenge unhelpful thought patterns that contribute to academic anxiety and perfectionism.",
      type: "guide",
      tags: ["CBT", "academic", "techniques", "thoughts"],
      link: "#",
      date: "September 30, 2023"
    },
    {
      id: 8,
      title: "Anxiety and the Digital Age: Managing Social Media Stress",
      description: "How constant connectivity affects student anxiety levels, with strategies for creating healthier digital boundaries.",
      type: "video",
      tags: ["digital", "social media", "boundaries", "lifestyle"],
      link: "#",
      source: "Digital Wellness Institute",
      date: "August 12, 2023"
    },
  ];

  const getTypeIcon = (type: Exclude<ResourceType, 'all'>) => {
    switch(type) {
      case 'article':
        return <Book className="h-5 w-5" />;
      case 'guide':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'link':
        return <LinkIcon className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: Exclude<ResourceType, 'all'>) => {
    switch(type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'guide':
        return 'bg-green-100 text-green-800';
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'link':
        return 'bg-purple-100 text-purple-800';
    }
  };

  // Filter resources based on selected type and search query
  const filteredResources = resources.filter(resource => {
    // Filter by type
    if (selectedType !== 'all' && resource.type !== selectedType) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

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
              Resources
            </motion.h1>
            <motion.p
              className="text-lg text-clarity-neutral-700 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Articles, videos, and guides to help you understand and manage anxiety
            </motion.p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Filter Resources</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-clarity-neutral-700">Resource Type</h4>
                  <div className="space-y-2">
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${selectedType === 'all' ? 'bg-clarity-blue-100 text-clarity-blue-800' : 'hover:bg-clarity-neutral-100'}`}
                      onClick={() => setSelectedType('all')}
                    >
                      All Resources
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${selectedType === 'article' ? 'bg-clarity-blue-100 text-clarity-blue-800' : 'hover:bg-clarity-neutral-100'}`}
                      onClick={() => setSelectedType('article')}
                    >
                      <Book className="h-4 w-4 mr-2" />
                      Articles
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${selectedType === 'guide' ? 'bg-clarity-blue-100 text-clarity-blue-800' : 'hover:bg-clarity-neutral-100'}`}
                      onClick={() => setSelectedType('guide')}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Guides
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${selectedType === 'video' ? 'bg-clarity-blue-100 text-clarity-blue-800' : 'hover:bg-clarity-neutral-100'}`}
                      onClick={() => setSelectedType('video')}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Videos
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${selectedType === 'link' ? 'bg-clarity-blue-100 text-clarity-blue-800' : 'hover:bg-clarity-neutral-100'}`}
                      onClick={() => setSelectedType('link')}
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      External Links
                    </button>
                  </div>
                </div>
                
                <div className="p-4 bg-clarity-neutral-100 rounded-lg">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-clarity-neutral-600 text-sm mb-3">
                    Not sure where to start? Visit our Support page for personalized recommendations.
                  </p>
                  <a 
                    href="/support" 
                    className="text-clarity-blue-600 font-medium text-sm hover:text-clarity-blue-800"
                  >
                    Get personalized help →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Resources List */}
            <div className="flex-1">
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search resources by keyword, topic, or tag..."
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-clarity-neutral-300 focus:border-clarity-blue-400 focus:ring focus:ring-clarity-blue-200 focus:ring-opacity-50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-clarity-neutral-400" />
                  {searchQuery && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-clarity-neutral-400 hover:text-clarity-neutral-600"
                      onClick={() => setSearchQuery('')}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {searchQuery ? `Search Results (${filteredResources.length})` : 'All Resources'}
                </h2>
                
                {(selectedType !== 'all' || searchQuery) && (
                  <button
                    className="text-clarity-neutral-600 hover:text-clarity-neutral-900 text-sm flex items-center"
                    onClick={() => {
                      setSelectedType('all');
                      setSearchQuery('');
                    }}
                  >
                    Clear filters
                    <X className="h-4 w-4 ml-1" />
                  </button>
                )}
              </div>
              
              {filteredResources.length === 0 ? (
                <div className="text-center py-12 bg-clarity-neutral-50 rounded-lg">
                  <p className="text-clarity-neutral-600 mb-2">No resources found matching your criteria.</p>
                  <button
                    className="text-clarity-blue-500 font-medium"
                    onClick={() => {
                      setSelectedType('all');
                      setSearchQuery('');
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredResources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      className="card hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                          {getTypeIcon(resource.type)}
                          <span className="ml-1 capitalize">{resource.type}</span>
                        </span>
                        
                        {resource.date && (
                          <span className="text-clarity-neutral-500 text-sm">
                            {resource.date}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      
                      {resource.source && (
                        <p className="text-clarity-neutral-600 text-sm mb-2">
                          Source: {resource.source}
                        </p>
                      )}
                      
                      <p className="text-clarity-neutral-700 mb-4">{resource.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-clarity-neutral-100 text-clarity-neutral-800 cursor-pointer hover:bg-clarity-neutral-200"
                              onClick={() => setSearchQuery(tag)}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={resource.link}
                          className="inline-flex items-center font-medium text-clarity-blue-600 hover:text-clarity-blue-800"
                        >
                          View Resource
                          <span className="ml-1">→</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;