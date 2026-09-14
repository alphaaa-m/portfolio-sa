import PageTransition from '@/components/PageTransition';
import NetworkCanvas from '@/components/canvas/Network'; // Reusing NetworkCanvas for now
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'MPhil in High Energy Physics',
      institution: 'University of the Punjab, Lahore',
      period: '2026 – Present',
      status: 'In Progress'
    },
    {
      degree: 'BS Physics',
      institution: 'University of Sargodha, Gujrat Campus',
      period: '2019 – 2024',
      status: 'Graduated'
    },
    {
      degree: 'FSc (Pre-Engineering)',
      institution: 'Best Group of Colleges, Gujrat',
      period: '2017 – 2019',
      status: 'Completed'
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'The Punjab School, Gujrat',
      period: '2015 – 2017',
      status: 'Completed'
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pb-24">
        <NetworkCanvas />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Journey</h1>
            <div className="h-1 w-20 bg-scientific-purple mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-deep-space shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl shadow-scientific-purple/20 z-10">
                  <GraduationCap className="w-5 h-5 text-scientific-purple" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <GraduationCap className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="font-bold text-xl text-white">{edu.degree}</h3>
                      <time className="text-sm font-medium text-scientific-purple px-3 py-1 bg-scientific-purple/10 rounded-full w-fit shrink-0">{edu.period}</time>
                    </div>
                    <h4 className="text-electric-cyan font-medium mb-4">{edu.institution}</h4>
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-soft-white/60 uppercase tracking-wider">
                      {edu.status}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
