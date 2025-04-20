import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Save, Calendar, Smile, Frown, Meh, Sun, Thermometer, CloudRain, CloudDrizzle } from 'lucide-react';

const JournalPage = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [mood, setMood] = useState<string | null>(null);
  const [entries, setEntries] = useState<Array<{date: Date, content: string, mood: string | null}>>([
    {
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      content: "I had a really productive study session today. I was able to focus for 3 hours straight on my biology project and made significant progress. Feeling good about the upcoming deadline. I used the breathing exercise when I started to feel overwhelmed, and it really helped me refocus.",
      mood: "happy"
    },
    {
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      content: "Today was challenging. Had a surprise quiz in statistics and I don't think I did well. Started feeling that familiar anxiety creeping in during lunch. Used the grounding technique from the tools section which helped somewhat, but still feeling a bit on edge.",
      mood: "stressed"
    }
  ]);

  const saveEntry = () => {
    if (journalEntry.trim()) {
      setEntries([
        {
          date: new Date(),
          content: journalEntry,
          mood: mood
        },
        ...entries
      ]);
      setJournalEntry('');
      setMood(null);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getMoodIcon = (moodType: string | null) => {
    switch(moodType) {
      case 'happy':
        return <Smile className="h-6 w-6 text-green-500" />;
      case 'neutral':
        return <Meh className="h-6 w-6 text-amber-500" />;
      case 'stressed':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'anxious':
        return <CloudDrizzle className="h-6 w-6 text-indigo-500" />;
      case 'sad':
        return <Frown className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getMoodPrompts = (moodType: string | null) => {
    switch(moodType) {
      case 'happy':
        return [
          "What contributed to your positive mood today?",
          "What are three things that went well today?",
          "How can you create more moments like this in the future?"
        ];
      case 'neutral':
        return [
          "What would help move your day in a more positive direction?",
          "Is there something you're looking forward to?",
          "What small action could you take to improve your mood?"
        ];
      case 'stressed':
        return [
          "What specific situations triggered your stress today?",
          "Which parts of the situation are within your control?",
          "What coping strategies have helped you with similar situations in the past?"
        ];
      case 'anxious':
        return [
          "What thoughts are contributing to your anxiety?",
          "Is there evidence that contradicts these worried thoughts?",
          "What would you tell a friend who was experiencing this same situation?"
        ];
      case 'sad':
        return [
          "What emotions are underneath your sadness?",
          "What would feel comforting or supportive right now?",
          "What small step could you take toward feeling better?"
        ];
      default:
        return [
          "How are you feeling today?",
          "What's on your mind?",
          "Reflect on your day - what stands out?"
        ];
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-clarity-green-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Reflection Journal
            </motion.h1>
            <motion.p
              className="text-lg text-clarity-neutral-700 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Track your moods, thoughts, and anxiety patterns over time
            </motion.p>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionHeader
                title="Today's Entry"
                subtitle="Write your thoughts, reflect on your day, or track your anxiety symptoms"
              />
              
              <motion.div
                className="card mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-clarity-neutral-500 mr-2" />
                  <span className="text-clarity-neutral-600">{formatDate(new Date())}</span>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mood" className="block mb-2 font-medium">How are you feeling today?</label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setMood('happy')}
                      className={`flex items-center px-4 py-2 rounded-lg border ${mood === 'happy' ? 'border-green-500 bg-green-50 text-green-700' : 'border-clarity-neutral-200 hover:border-clarity-neutral-300'}`}
                    >
                      <Smile className="h-5 w-5 mr-2" />
                      Happy
                    </button>
                    <button
                      type="button"
                      onClick={() => setMood('neutral')}
                      className={`flex items-center px-4 py-2 rounded-lg border ${mood === 'neutral' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-clarity-neutral-200 hover:border-clarity-neutral-300'}`}
                    >
                      <Meh className="h-5 w-5 mr-2" />
                      Neutral
                    </button>
                    <button
                      type="button"
                      onClick={() => setMood('stressed')}
                      className={`flex items-center px-4 py-2 rounded-lg border ${mood === 'stressed' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-clarity-neutral-200 hover:border-clarity-neutral-300'}`}
                    >
                      <CloudRain className="h-5 w-5 mr-2" />
                      Stressed
                    </button>
                    <button
                      type="button"
                      onClick={() => setMood('anxious')}
                      className={`flex items-center px-4 py-2 rounded-lg border ${mood === 'anxious' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-clarity-neutral-200 hover:border-clarity-neutral-300'}`}
                    >
                      <CloudDrizzle className="h-5 w-5 mr-2" />
                      Anxious
                    </button>
                    <button
                      type="button"
                      onClick={() => setMood('sad')}
                      className={`flex items-center px-4 py-2 rounded-lg border ${mood === 'sad' ? 'border-red-500 bg-red-50 text-red-700' : 'border-clarity-neutral-200 hover:border-clarity-neutral-300'}`}
                    >
                      <Frown className="h-5 w-5 mr-2" />
                      Sad
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="journal-entry" className="block mb-2 font-medium">Journal Entry</label>
                  <div className="mb-2 space-y-1">
                    {getMoodPrompts(mood).map((prompt, idx) => (
                      <p key={idx} className="text-sm text-clarity-neutral-600 italic">{prompt}</p>
                    ))}
                  </div>
                  <textarea
                    id="journal-entry"
                    rows={8}
                    className="w-full px-4 py-3 rounded-lg border border-clarity-neutral-300 focus:border-clarity-blue-400 focus:ring focus:ring-clarity-blue-200 focus:ring-opacity-50"
                    placeholder="Start writing here..."
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={saveEntry}
                    className="btn-primary"
                    disabled={!journalEntry.trim()}
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Save Entry
                  </button>
                </div>
              </motion.div>
              
              <SectionHeader
                title="Previous Entries"
                subtitle="Review your past reflections and track your progress"
              />
              
              <div className="space-y-6">
                {entries.map((entry, idx) => (
                  <motion.div
                    key={idx}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-clarity-neutral-500 mr-2" />
                        <span className="text-clarity-neutral-600">{formatDate(entry.date)}</span>
                      </div>
                      <div>
                        {getMoodIcon(entry.mood)}
                      </div>
                    </div>
                    <p className="whitespace-pre-line">{entry.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="card sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Journaling Tips</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-1">Be Consistent</h4>
                    <p className="text-clarity-neutral-600 text-sm">
                      Try to write regularly, even if it's just a few sentences. Consistency helps you see patterns over time.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Be Honest</h4>
                    <p className="text-clarity-neutral-600 text-sm">
                      Your journal is private—write candidly about your thoughts and feelings without judgment.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Note Triggers</h4>
                    <p className="text-clarity-neutral-600 text-sm">
                      Pay attention to situations, people, or thoughts that trigger your anxiety.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Track Coping Strategies</h4>
                    <p className="text-clarity-neutral-600 text-sm">
                      Record what helps when you're feeling anxious and what doesn't work as well.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Notice Progress</h4>
                    <p className="text-clarity-neutral-600 text-sm">
                      Look back occasionally to see how far you've come and what you've learned about yourself.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-clarity-blue-50 rounded-lg">
                  <h4 className="font-medium mb-2">Feeling Stuck?</h4>
                  <p className="text-clarity-neutral-600 text-sm mb-3">
                    Try these journal prompts:
                  </p>
                  <ul className="text-sm space-y-2 list-disc pl-5">
                    <li>What's one thing that went well today and one challenge?</li>
                    <li>When I feel anxious, the physical sensations I notice are...</li>
                    <li>What's one small thing I can do today to support my mental health?</li>
                    <li>If my anxiety could speak, what would it say it needs?</li>
                    <li>What's one thing I'm grateful for right now?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;