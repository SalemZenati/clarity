import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import BreathingExercise from '../components/BreathingExercise';
import { Link } from 'react-router-dom';
import { Brain, Music, HandMetal, Pencil, Timer, Waves, Moon, Dumbbell } from 'lucide-react';

const ToolsPage = () => {
  const toolCategories = [
    {
      title: "Quick Reset",
      description: "Tools that take 5 minutes or less",
      icon: Timer,
      color: "text-clarity-blue-500",
      tools: [
        {
          title: "4-4-6-2 Breathing",
          description: "A simple breathing pattern to quickly calm your nervous system",
          demo: <BreathingExercise />,
        },
        {
          title: "5-4-3-2-1 Grounding",
          description: "Use your senses to bring yourself back to the present moment",
          content: (
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-center">5-4-3-2-1 Grounding</h3>
              <p className="text-clarity-neutral-600 mb-6">
                This technique uses your five senses to help ground you in the present moment when you're feeling anxious or overwhelmed.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="bg-clarity-blue-100 text-clarity-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">5</span>
                  <div>
                    <h4 className="font-medium text-clarity-neutral-800">See</h4>
                    <p className="text-clarity-neutral-600">Find 5 things you can see around you</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-clarity-blue-100 text-clarity-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <h4 className="font-medium text-clarity-neutral-800">Touch</h4>
                    <p className="text-clarity-neutral-600">Find 4 things you can touch or feel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-clarity-blue-100 text-clarity-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium text-clarity-neutral-800">Hear</h4>
                    <p className="text-clarity-neutral-600">Find 3 things you can hear</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-clarity-blue-100 text-clarity-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium text-clarity-neutral-800">Smell</h4>
                    <p className="text-clarity-neutral-600">Find 2 things you can smell</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-clarity-blue-100 text-clarity-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium text-clarity-neutral-800">Taste</h4>
                    <p className="text-clarity-neutral-600">Find 1 thing you can taste</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-clarity-neutral-500 italic">
                Take your time with each step, and try to notice details about each item.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Mindfulness",
      description: "Practices to help you stay present",
      icon: Brain,
      color: "text-purple-500",
      tools: [
        {
          title: "Body Scan Meditation",
          description: "A guided practice to release tension throughout your body",
          content: (
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-center">Body Scan Meditation</h3>
              <p className="text-clarity-neutral-600 mb-6">
                This practice helps you become aware of tension in your body and consciously release it.
              </p>
              <ol className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <p>Sit or lie down in a comfortable position. Close your eyes if it feels comfortable.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <p>Take 3 deep breaths, feeling your belly rise and fall.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <p>Bring awareness to your feet. Notice any sensations. Imagine tension melting away as you exhale.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <p>Slowly move your attention up through your legs, hips, abdomen, chest, hands, arms, shoulders, neck, and head.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">5</span>
                  <p>At each area, pause, notice sensations, and release tension as you exhale.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">6</span>
                  <p>When you've scanned your whole body, take a moment to feel your entire body as a whole.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">7</span>
                  <p>Take 3 more deep breaths and gently open your eyes when you're ready.</p>
                </li>
              </ol>
              <p className="text-sm text-clarity-neutral-500 italic">
                This practice takes about 10 minutes. Try to approach it with curiosity rather than judgment.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Physical Tools",
      description: "Using your body to calm your mind",
      icon: HandMetal,
      color: "text-amber-500",
      tools: [
        {
          title: "Progressive Muscle Relaxation",
          description: "Systematically tense and release muscle groups to reduce physical tension",
          content: (
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-center">Progressive Muscle Relaxation</h3>
              <p className="text-clarity-neutral-600 mb-6">
                This technique helps reduce the physical symptoms of anxiety by deliberately tensing and then releasing each muscle group.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-clarity-neutral-800 mb-2">Instructions:</h4>
                  <ol className="space-y-2 pl-5 list-decimal">
                    <li>Sit or lie down in a comfortable position</li>
                    <li>For each muscle group, tense the muscles for 5 seconds, then release and relax for 10 seconds</li>
                    <li>Notice the difference between the tension and relaxation</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-medium text-clarity-neutral-800 mb-2">Sequence:</h4>
                  <ol className="space-y-2 pl-5 list-decimal">
                    <li>Hands: Make a fist with both hands</li>
                    <li>Forearms: Extend hands and bend them up at the wrist</li>
                    <li>Upper arms: Bend arms at elbows, "make a muscle"</li>
                    <li>Shoulders: Raise toward ears</li>
                    <li>Neck: Gently press head back against chair/floor</li>
                    <li>Face: Scrunch up</li>
                    <li>Chest: Take a deep breath and hold</li>
                    <li>Stomach: Tighten abdominal muscles</li>
                    <li>Lower back: Arch slightly</li>
                    <li>Buttocks: Tighten</li>
                    <li>Thighs: Press knees together</li>
                    <li>Calves: Point toes toward face</li>
                    <li>Feet: Curl toes</li>
                  </ol>
                </div>
              </div>
              <p className="text-sm text-clarity-neutral-500 italic">
                Remember to breathe normally throughout the exercise.
              </p>
            </div>
          ),
        },
      ],
    },
  ];

  const moreToolCategories = [
    {
      title: "Journaling",
      icon: Pencil,
      color: "text-clarity-green-500",
      description: "Express your thoughts and emotions through guided writing",
      link: "/journal",
    },
    {
      title: "Sound Therapy",
      icon: Music,
      color: "text-indigo-500",
      description: "Calming soundscapes and music to reduce anxiety",
      link: "#",
    },
    {
      title: "Sleep Support",
      icon: Moon,
      color: "text-blue-500",
      description: "Techniques to improve sleep quality and reduce nighttime anxiety",
      link: "#",
    },
    {
      title: "Exercise",
      icon: Dumbbell,
      color: "text-red-500",
      description: "Physical activities that help reduce anxiety and improve mood",
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
              Tools & Techniques
            </motion.h1>
            <motion.p
              className="text-lg text-clarity-neutral-700 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Evidence-based practices to help you manage anxiety and find calm
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tools Introduction */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeader
            title="Find What Works For You"
            subtitle="Everyone's experience with anxiety is different. Explore these tools and discover what helps you most."
          />
          
          {toolCategories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-full ${category.color.replace('text-', 'bg-').replace('500', '100')} mr-3`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-clarity-neutral-600">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.tools.map((tool, toolIdx) => (
                  <motion.div
                    key={toolIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: toolIdx * 0.1 }}
                  >
                    {tool.demo ? tool.demo : tool.content}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {/* More Tool Categories */}
          <div className="mt-16">
            <SectionHeader
              title="More Tools"
              subtitle="Explore our full collection of anxiety management tools"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {moreToolCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  className="card hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={`p-3 rounded-full w-fit mb-4 ${category.color.replace('text-', 'bg-').replace('500', '100')}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-clarity-neutral-600 mb-4">{category.description}</p>
                  <Link
                    to={category.link}
                    className="text-clarity-blue-500 font-medium hover:text-clarity-blue-700 inline-flex items-center"
                  >
                    Explore tools
                    <span className="ml-1">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-12 bg-clarity-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Support?</h2>
            <p className="mb-6">
              These tools are designed to help with everyday anxiety management, but sometimes you might need additional support.
            </p>
            <Link
              to="/support"
              className="btn bg-white text-clarity-neutral-900 hover:bg-clarity-neutral-100"
            >
              Find Support Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;