import PageTransition from '@/components/PageTransition';
import MoleculeCanvas from '@/components/canvas/Molecule';
import { Target, Book, Layout, BrainCircuit, Users, PenTool } from 'lucide-react';

export default function About() {
  const specialties = [
    { title: 'Physics Instruction', icon: <Target className="w-6 h-6 text-electric-cyan" /> },
    { title: 'Mathematics Teaching', icon: <Book className="w-6 h-6 text-scientific-purple" /> },
    { title: 'Student Mentoring', icon: <Users className="w-6 h-6 text-plasma-blue" /> },
    { title: 'Classroom Management', icon: <Layout className="w-6 h-6 text-electric-cyan" /> },
    { title: 'Academic Assessment', icon: <PenTool className="w-6 h-6 text-scientific-purple" /> },
    { title: 'Curriculum Planning', icon: <BrainCircuit className="w-6 h-6 text-plasma-blue" /> },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pb-24">
        <MoleculeCanvas />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 bg-electric-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-soft-white/80 leading-relaxed text-left glass-panel p-8">
              <strong className="text-electric-cyan text-2xl font-semibold block mb-4">Sadia Amjad</strong>
              is a Physics educator with more than 5 years of teaching experience in Physics and Mathematics at secondary and higher-secondary levels. She is dedicated to creating engaging, student-centered learning environments that foster scientific thinking and analytical reasoning.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Areas of Specialization</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {specialties.map((spec, i) => (
                <div key={i} className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                  <div className="mb-4 p-3 bg-deep-space/50 rounded-full border border-white/5">
                    {spec.icon}
                  </div>
                  <h3 className="font-semibold">{spec.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-scientific-purple/20 blur-[50px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-cyan/20 blur-[50px] rounded-full"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Current Academic Focus</h2>
                <h3 className="text-xl text-electric-cyan mb-1">MPhil in High Energy Physics</h3>
                <p className="text-soft-white/70">University of the Punjab, Lahore</p>
              </div>
              <div className="space-y-3">
                <p className="text-soft-white/90 border-l-2 border-scientific-purple pl-4">Advancing scientific thinking</p>
                <p className="text-soft-white/90 border-l-2 border-electric-cyan pl-4">Cultivating analytical reasoning</p>
                <p className="text-soft-white/90 border-l-2 border-plasma-blue pl-4">Driving student success</p>
                <p className="text-soft-white/90 border-l-2 border-scientific-purple pl-4">Promoting academic excellence</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
