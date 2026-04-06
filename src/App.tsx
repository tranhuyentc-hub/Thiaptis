import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Type, 
  Settings, 
  UserCircle, 
  Timer, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Flag,
  Book,
  CheckCircle2,
  Trophy,
  History,
  Home,
  BookOpen as MenuBook,
  BarChart3 as Analytics,
  Type as FontDownload
} from 'lucide-react';
import { cn } from './lib/utils';
import { MOCK_QUESTIONS } from './constants';
import { Question, TestSession, UserProgress } from './types';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab, onSubmit }: { activeTab: string, setActiveTab: (tab: string) => void, onSubmit?: () => void }) => (
  <header className="glass-header shadow-[0_20px_40px_rgba(0,52,94,0.05)]">
    <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold tracking-tighter text-primary">Aptis B2 Trainer</span>
        <span className="h-4 w-[1px] bg-outline-variant/30 hidden md:block"></span>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full">
          <Timer className="w-4 h-4 text-primary" />
          <span className="font-mono font-bold text-primary tracking-tighter">30:00</span>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {['Dashboard', 'Practice', 'Results'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={cn(
              "pb-1 font-semibold text-sm transition-colors relative",
              activeTab === tab.toLowerCase() 
                ? "text-primary border-b-2 border-primary" 
                : "text-slate-500 hover:text-primary"
            )}
          >
            {tab}
          </button>
        ))}
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-primary transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        {activeTab === 'practice' && (
          <button 
            onClick={onSubmit}
            className="bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 duration-200"
          >
            SUBMIT
          </button>
        )}
      </div>
    </div>
  </header>
);

const Sidebar = ({ questions, answers, currentIdx, onSelect }: { questions: Question[], answers: Record<string, string>, currentIdx: number, onSelect: (idx: number) => void }) => (
  <aside className="hidden lg:flex flex-col w-64 shrink-0 space-y-6 sticky top-24 h-[calc(100vh-6rem)]">
    <div className="bg-surface-container-lowest p-6 rounded-2xl ambient-shadow">
      <h3 className="font-bold uppercase tracking-[0.05em] text-xs text-on-surface-variant mb-6">Question Palette</h3>
      <div className="grid grid-cols-4 gap-2">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => onSelect(i)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-xl font-bold text-xs transition-all",
              answers[q.id] ? "bg-primary text-on-primary" : 
              i === currentIdx ? "bg-primary-container text-on-primary-container border-2 border-primary" :
              "bg-surface-container text-slate-400"
            )}
          >
            {(i + 1).toString().padStart(2, '0')}
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <div className="w-2 h-2 rounded-full bg-primary"></div> Answered
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <div className="w-2 h-2 rounded-full bg-surface-container"></div> Not Visited
        </div>
      </div>
    </div>
    
    <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary">
      <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-2">Pro Tip</span>
      <p className="text-sm text-on-surface leading-relaxed">Read the sentence carefully and identify the tense before choosing your answer.</p>
    </div>
  </aside>
);

const Dashboard = ({ onStartPractice }: { onStartPractice: () => void }) => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <section>
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-2">Welcome back, Scholar.</h1>
      <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">Your journey to Aptis B2 proficiency is 42% complete. Focus on the listening tasks today.</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl ambient-shadow flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <div>
          <span className="uppercase tracking-[0.05em] text-xs font-bold text-primary mb-4 block">Current Mission</span>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-4">Aptis B2 Mock Test #1</h2>
          <p className="text-on-surface-variant mb-8 max-w-md">Comprehensive test covering Grammar, Listening, and Reading sections (30 minutes).</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[10px] font-bold">B2</div>
            <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">30m</div>
          </div>
          <button 
            onClick={onStartPractice}
            className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            <span>Start Practice</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <h3 className="uppercase tracking-[0.05em] text-xs font-bold text-on-surface-variant mb-6">Weekly Streak</h3>
          <div className="flex justify-between items-end h-24 mb-4">
            {[12, 16, 8, 20, 0, 0, 0].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div 
                  className={cn(
                    "w-2 rounded-full transition-all duration-500",
                    h > 0 ? "bg-primary" : "bg-slate-200"
                  )} 
                  style={{ height: `${h * 4}px` }}
                ></div>
                <span className={cn("text-[10px] font-bold", i === 3 ? "text-primary" : "text-slate-400")}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl font-black text-on-surface">4 Days</div>
          <p className="text-xs text-on-surface-variant">Keep it up, you're in the top 10%.</p>
        </div>
      </div>
    </div>

    <section>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold tracking-tight">Suggested Focus</h3>
        <button className="text-primary font-bold text-sm hover:underline">View all tasks</button>
      </div>
      <div className="space-y-3">
        {[
          { title: 'Grammar: Conditionals', desc: 'Mixed types 1, 2, 3', icon: Type },
          { title: 'Listening: Short Conversations', desc: 'Daily life scenarios', icon: BookOpen }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-low transition-all cursor-pointer group ambient-shadow hover:translate-x-1">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
                <item.icon className="w-5 h-5 text-on-surface-variant" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">{item.title}</h4>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Practice = ({ answers, setAnswers }: { answers: Record<string, string>, setAnswers: (qId: string, oId: string) => void }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const question = MOCK_QUESTIONS[currentQuestionIdx];

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-right-4 duration-700">
      <Sidebar 
        questions={MOCK_QUESTIONS} 
        answers={answers} 
        currentIdx={currentQuestionIdx} 
        onSelect={setCurrentQuestionIdx} 
      />
      
      <section className="flex-grow flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className={cn(
              "uppercase tracking-[0.1em] text-[10px] font-black px-2 py-1 rounded-md block mb-2 w-fit",
              question.type === 'grammar' ? "bg-blue-100 text-blue-700" :
              question.type === 'listening' ? "bg-purple-100 text-purple-700" :
              "bg-green-100 text-green-700"
            )}>
              Section: {question.type.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter leading-none">Question {(currentQuestionIdx + 1).toString().padStart(2, '0')}</h1>
          </div>
          <button className="bg-surface-container-low px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-surface-container-high transition-colors">
            <Flag className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Flag for review</span>
          </button>
        </div>

        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl ambient-shadow relative overflow-hidden ghost-border">
          <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low rounded-bl-[100%] opacity-50"></div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl leading-[1.6] text-on-surface font-medium mb-12">
              {question.text}
            </p>
            
            <div className="grid gap-4">
              {question.options.map((option, i) => (
                <label key={option.id} className="group cursor-pointer">
                  <input 
                    type="radio" 
                    name={`aptis-q-${question.id}`} 
                    className="hidden peer" 
                    checked={answers[question.id] === option.id}
                    onChange={() => setAnswers(question.id, option.id)}
                  />
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-container/30 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full border-2 border-outline-variant/30 flex items-center justify-center font-bold text-sm text-slate-500 peer-checked:bg-primary peer-checked:text-white group-hover:bg-primary/10 transition-colors">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-lg font-semibold text-on-surface">{option.text}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button 
            disabled={currentQuestionIdx === 0}
            onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-surface-variant font-bold text-sm transition-all hover:bg-surface-container-highest active:scale-95 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            PREVIOUS
          </button>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-primary font-bold text-sm hover:underline tracking-widest px-4">SKIP QUESTION</button>
            <button 
              onClick={() => setCurrentQuestionIdx(prev => (prev + 1) % MOCK_QUESTIONS.length)}
              className="flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-xl shadow-primary/30 transition-all hover:bg-primary-dim active:scale-95"
            >
              NEXT
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <aside className="hidden xl:block w-72 shrink-0">
        <div className="sticky top-24 bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/10 p-6 rounded-3xl h-fit">
          <div className="flex items-center gap-2 mb-6">
            <Book className="w-5 h-5 text-primary-dim" />
            <h4 className="font-bold text-on-surface">Key Vocabulary</h4>
          </div>
          <div className="space-y-4">
            {question.vocabulary?.map((v, i) => (
              <div key={i} className="group">
                <p className="text-sm font-bold text-primary mb-1">{v.word}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{v.definition}</p>
                {i < (question.vocabulary?.length || 0) - 1 && <div className="h-[1px] bg-outline-variant/10 mt-4"></div>}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <div className="rounded-2xl overflow-hidden grayscale contrast-125 brightness-95 opacity-80">
              <img 
                className="w-full h-32 object-cover" 
                src={`https://picsum.photos/seed/${question.type}/400/200`} 
                alt="Academic context"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

const Results = ({ answers, onReset }: { answers: Record<string, string>, onReset: () => void }) => {
  const score = MOCK_QUESTIONS.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correctOptionId ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / MOCK_QUESTIONS.length) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in zoom-in duration-500">
      <section className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-black tracking-tighter">Test Completed!</h1>
        <p className="text-on-surface-variant text-lg">Here is how you performed on Aptis B2 Mock Test #1</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow text-center">
          <div className="text-5xl font-black text-primary mb-2">{score}/{MOCK_QUESTIONS.length}</div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Score</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow text-center">
          <div className="text-5xl font-black text-primary mb-2">{percentage}%</div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Accuracy</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow text-center">
          <div className="text-5xl font-black text-primary mb-2">B2</div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Estimated Level</p>
        </div>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold tracking-tight">Review Answers</h3>
        <div className="space-y-4">
          {MOCK_QUESTIONS.map((q, i) => {
            const isCorrect = answers[q.id] === q.correctOptionId;
            const userAnswer = q.options.find(o => o.id === answers[q.id])?.text || 'No answer';
            const correctAnswer = q.options.find(o => o.id === q.correctOptionId)?.text;

            return (
              <div key={q.id} className="bg-surface-container-lowest p-6 rounded-2xl ambient-shadow space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Question {i + 1} • {q.type.toUpperCase()}</span>
                    <p className="font-medium text-on-surface">{q.text}</p>
                  </div>
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  ) : (
                    <div className="w-6 h-6 bg-error/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-error font-bold text-xs">!</span>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className={cn("p-3 rounded-xl", isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
                    <span className="font-bold block mb-1">Your Answer:</span>
                    {userAnswer}
                  </div>
                  {!isCorrect && (
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-700">
                      <span className="font-bold block mb-1">Correct Answer:</span>
                      {correctAnswer}
                    </div>
                  )}
                </div>

                {q.explanation && (
                  <div className="p-4 bg-surface-container-low rounded-xl text-sm leading-relaxed text-on-surface-variant border-l-4 border-primary">
                    <span className="font-bold block mb-1">Explanation:</span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onReset}
          className="bg-primary text-on-primary px-12 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 active:scale-95 transition-all"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSetAnswer = (qId: string, oId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: oId }));
  };

  const handleReset = () => {
    setAnswers({});
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col pb-24 lg:pb-0">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onSubmit={() => setActiveTab('results')} 
      />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {activeTab === 'dashboard' && <Dashboard onStartPractice={() => setActiveTab('practice')} />}
        {activeTab === 'practice' && <Practice answers={answers} setAnswers={handleSetAnswer} />}
        {activeTab === 'results' && <Results answers={answers} onReset={handleReset} />}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 lg:hidden bg-white/80 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,52,94,0.03)]">
        {[
          { id: 'dashboard', icon: Home, label: 'Home' },
          { id: 'practice', icon: MenuBook, label: 'Tests' },
          { id: 'results', icon: Analytics, label: 'History' },
          { id: 'profile', icon: UserCircle, label: 'Profile' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex flex-col items-center justify-center transition-all",
              activeTab === item.id ? "text-primary scale-110" : "text-slate-400"
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] font-medium tracking-wide mt-1">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Timer Sticky */}
      {activeTab === 'practice' && (
        <div className="md:hidden fixed bottom-24 right-4 z-50">
          <div className="bg-primary text-on-primary px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2">
            <Timer className="w-5 h-5" />
            <span className="font-mono font-black">29:45</span>
          </div>
        </div>
      )}
    </div>
  );
}
