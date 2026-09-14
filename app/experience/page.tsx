import PageTransition from '@/components/PageTransition';
import NetworkCanvas from '@/components/canvas/Network';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Physics Lecturer',
      institution: 'ILM Group of Colleges, Gujrat',
      period: 'Sep 2025 – Aug 2026',
      responsibilities: [
        'Delivered Physics instruction to intermediate-level students.',
        'Developed assessments and learning materials.',
        'Evaluated student performance.',
        'Adapted teaching strategies.',
        'Managed academic records and documentation.'
      ]
    },
    {
      title: 'Physics & Mathematics Lecturer',
      institution: 'The Punjab School, Gujrat',
      period: 'Feb 2024 – May 2025',
      responsibilities: [
        'Planned and delivered Physics and Mathematics lessons.',
        'Maintained a positive learning environment.',
        'Supported student academic growth.',
        'Conducted assessments and monitored progress.'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pb-24">
        <NetworkCanvas />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
            <div className="h-1 w-20 bg-electric-cyan mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-deep-space shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl shadow-electric-cyan/20 z-10">
                  <Briefcase className="w-5 h-5 text-electric-cyan" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="font-bold text-xl text-white">{exp.title}</h3>
                    <time className="text-sm font-medium text-electric-cyan px-3 py-1 bg-electric-cyan/10 rounded-full w-fit">{exp.period}</time>
                  </div>
                  <h4 className="text-scientific-purple font-medium mb-4">{exp.institution}</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-soft-white/70 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
