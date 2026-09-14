import PageTransition from '@/components/PageTransition';
import NetworkCanvas from '@/components/canvas/Network';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Core Competencies',
      color: 'border-electric-cyan',
      textColor: 'text-electric-cyan',
      skills: ['Physics Teaching', 'Mathematics Teaching', 'Problem Solving']
    },
    {
      category: 'Classroom & Assessment',
      color: 'border-scientific-purple',
      textColor: 'text-scientific-purple',
      skills: ['Classroom Management', 'Student Assessment', 'Curriculum Planning']
    },
    {
      category: 'Professional Skills',
      color: 'border-plasma-blue',
      textColor: 'text-plasma-blue',
      skills: ['Academic Documentation', 'Communication Skills', 'Presentation Skills', 'Team Collaboration']
    },
    {
      category: 'Technical Tools',
      color: 'border-soft-white',
      textColor: 'text-soft-white',
      skills: ['Microsoft Word', 'Microsoft PowerPoint']
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pb-24">
        <NetworkCanvas />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Scientific Dashboard</h1>
            <div className="h-1 w-20 bg-plasma-blue mx-auto rounded-full"></div>
            <p className="mt-6 text-soft-white/70 max-w-2xl mx-auto">
              A comprehensive view of my educational and professional capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, index) => (
              <div key={index} className={`glass-panel p-8 border-l-4 ${cat.color} hover:bg-white/10 transition-colors`}>
                <h2 className={`text-2xl font-bold mb-6 ${cat.textColor}`}>{cat.category}</h2>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-black/40 border border-white/10 rounded-full text-sm font-medium hover:border-white/30 hover:bg-black/60 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
