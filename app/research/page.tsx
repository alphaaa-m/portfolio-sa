import PageTransition from '@/components/PageTransition';
import MoleculeCanvas from '@/components/canvas/Molecule'; // Reusing MoleculeCanvas for now
import { Microscope, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Research() {
  const interests = [
    'High Energy Physics',
    'Scientific Education',
    'Physics Learning Methodologies',
    'Student-Centered Teaching',
    'STEM Education'
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pb-24">
        <MoleculeCanvas />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Portfolio</h1>
            <div className="h-1 w-20 bg-electric-cyan mx-auto rounded-full mb-8"></div>
          </div>

          <div className="glass-panel p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-scientific-purple/10 blur-[80px] rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-deep-space rounded-2xl border border-white/10">
                  <Microscope className="w-8 h-8 text-electric-cyan" />
                </div>
                <h2 className="text-3xl font-bold">Research Interests</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-electric-cyan/30 transition-colors">
                    <ArrowRight className="w-4 h-4 text-electric-cyan shrink-0" />
                    <span className="font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 text-center border-dashed border-2 border-white/20 bg-deep-space/50">
            <FileText className="w-12 h-12 text-soft-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-soft-white/80">Publications & Projects</h3>
            <p className="text-soft-white/60 max-w-md mx-auto">
              Research publications and projects will be added in the future as my MPhil journey at the University of the Punjab progresses.
            </p>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
