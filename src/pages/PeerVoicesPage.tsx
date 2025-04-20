import SectionHeader from '../components/SectionHeader';
import Quote from '../components/Quote';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const PeerVoicesPage = () => {
  const stories = [
    {
      id: 1,
      name: "Emma K.",
      title: "Finding My Way Through Test Anxiety",
      content: "When I started college, my test anxiety got so bad I would blank out during exams even though I knew the material. I felt like I was the only one struggling, but when I finally opened up to my TA about it, they shared their own similar experiences. That was the first time I realized I wasn't alone.\n\nI started using the 4-7-8 breathing technique before exams and worked with the academic support center to develop better study strategies that built my confidence. Now as a junior, I still get nervous before big tests, but I have tools to manage it and can actually show what I know.",
      tags: ["test anxiety", "breathing techniques", "academic support"],
      likes: 42,
      comments: 15,
      ago: "2 months ago",
      imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Marcus J.",
      title: "Social Anxiety in a New City",
      content: "Moving across the country for college was exciting but terrifying. When everyone seemed to be making friends easily during orientation, I was paralyzed with social anxiety. I'd stay in my dorm instead of attending events, then feel even more isolated.\n\nThe turning point came when I joined a small study group for my chemistry class. The structure of discussing coursework made socializing less intimidating, and I slowly built connections from there. I also started seeing a therapist through the university's counseling services, which helped me challenge my negative thought patterns.\n\nThree years later, I'm still close with two people from that study group, and while social situations can still be challenging, I've learned to push through the initial discomfort to find meaningful connections.",
      tags: ["social anxiety", "making friends", "counseling services"],
      likes: 37,
      comments: 12,
      ago: "1 month ago",
      imageUrl: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Sophia L.",
      title: "Balancing Perfectionism and Self-Care",
      content: "I've always been a high achiever, but in my sophomore year, my perfectionism turned toxic. I was pulling all-nighters, skipping meals, and having panic attacks about assignments. My health was deteriorating, but I couldn't let go of the idea that anything less than perfect wasn't enough.\n\nA professor noticed my exhaustion and suggested I visit the wellness center. The counselor there helped me see that my perfectionism was actually hindering my performance, not helping it. I started setting boundaries around study time, scheduled regular meals, and used mindfulness apps to manage my anxiety.\n\nThe most important lesson I learned was that self-care isn't selfish—it's essential. I still have high standards for myself, but now I recognize that my value isn't determined by my GPA, and taking care of my mental health actually makes me more effective in everything I do.",
      tags: ["perfectionism", "self-care", "boundaries", "mindfulness"],
      likes: 56,
      comments: 23,
      ago: "3 weeks ago",
      imageUrl: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];
  
  const communityQuotes = [
    {
      text: "Reading these stories reminds me that so many of us are facing similar challenges. It makes the hard days a little less lonely.",
      author: "Jamie, 19",
      authorTitle: "First-year Engineering Student"
    },
    {
      text: "The practical tips shared here have made a real difference in how I manage my anxiety before presentations. Thank you to everyone who's brave enough to share their experiences.",
      author: "Tyler, 22",
      authorTitle: "Communications Major"
    },
    {
      text: "I never thought I'd be able to talk openly about my anxiety, but seeing others do it has given me the courage to be more honest with my friends and professors about what I'm going through.",
      author: "Aisha, 20",
      authorTitle: "Psychology Student"
    }
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
              Peer Voices
            </motion.h1>
            <motion.p
              className="text-lg text-clarity-neutral-700 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real stories from students about their experiences with anxiety and the strategies that help
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-clarity-neutral-700 mb-8">
              Everyone's experience with anxiety is unique, but there's power in sharing our stories. 
              Here, students from across the country share their challenges, breakthroughs, and the 
              practical strategies that have made a difference in their lives.
            </p>
            <div className="p-4 bg-clarity-blue-50 rounded-lg inline-block">
              <p className="text-clarity-neutral-800 font-medium">
                These stories are shared with permission, but names have been changed to protect privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-12 bg-clarity-neutral-50">
        <div className="container-custom">
          <SectionHeader
            title="Student Stories"
            subtitle="Learn from peers who have navigated similar challenges"
            centered
          />
          
          <div className="space-y-12">
            {stories.map((story, idx) => (
              <motion.div
                key={story.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={story.imageUrl} 
                      alt={`Illustration for ${story.title}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                    <p className="text-clarity-neutral-600 mb-4">By {story.name} • {story.ago}</p>
                    
                    <div className="mb-6">
                      {story.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {story.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-clarity-neutral-100 text-clarity-neutral-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <button className="flex items-center text-clarity-neutral-600 hover:text-clarity-blue-500">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{story.likes}</span>
                      </button>
                      <button className="flex items-center text-clarity-neutral-600 hover:text-clarity-blue-500">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span>{story.comments}</span>
                      </button>
                      <button className="flex items-center text-clarity-neutral-600 hover:text-clarity-blue-500">
                        <Share2 className="h-5 w-5 mr-1" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Quotes Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="From Our Community"
            subtitle="What students are saying about the impact of shared experiences"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {communityQuotes.map((quote, idx) => (
              <Quote
                key={idx}
                text={quote.text}
                author={quote.author}
                authorTitle={quote.authorTitle}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-16 bg-clarity-blue-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Share Your Experience
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your story could help another student feel less alone or discover a new coping strategy. 
              We welcome submissions from current and former students about their experiences with anxiety.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/support"
                className="btn bg-white text-clarity-blue-600 hover:bg-clarity-blue-50"
              >
                Submit Your Story
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeerVoicesPage;