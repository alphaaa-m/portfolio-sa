import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import AtomCanvas from '@/components/canvas/Atom';
import { ArrowRight, BookOpen, BrainCircuit, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <AtomCanvas />
        <div className="text-center z-10 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sadia Amjad
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium heading-gradient mb-6">
            Physics Educator & Research Scholar
          </h2>
          <p className="text-lg md:text-xl text-soft-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Exploring Physics, Inspiring Minds, Building Future Scientists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/about" 
              className="px-8 py-4 rounded-full bg-electric-cyan text-deep-space font-bold hover:bg-plasma-blue transition-colors flex items-center gap-2"
            >
              View Portfolio <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full glass-panel font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 border-y border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-electric-cyan mb-2">5+</div>
              <div className="text-sm text-soft-white/70">Years Teaching Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-scientific-purple mb-2">2</div>
              <div className="text-sm text-soft-white/70">Academic Institutions Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-plasma-blue mb-2">2</div>
              <div className="text-sm text-soft-white/70">Core Subjects (Physics & Math)</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-soft-white mb-2">MPhil</div>
              <div className="text-sm text-soft-white/70">Research Journey</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Bridging Theory and Inspiration</h2>
          <p className="text-lg text-soft-white/80 leading-relaxed mb-8">
            As a dedicated Physics educator with over 5 years of experience, I specialize in translating complex scientific principles into accessible, engaging lessons. My approach focuses on nurturing analytical reasoning and scientific thinking in students at secondary and higher-secondary levels, preparing them for academic excellence and future STEM careers.
          </p>
          <Link href="/about" className="text-electric-cyan hover:text-plasma-blue font-medium flex items-center gap-2 justify-center">
            Read full profile <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-electric-cyan mb-6" />
              <h3 className="text-xl font-bold mb-4">Featured Experience</h3>
              <p className="text-soft-white/70 mb-6">
                Most recently served as a Physics Lecturer at ILM Group of Colleges, Gujrat, developing comprehensive assessments and adapting teaching strategies for intermediate-level students.
              </p>
              <Link href="/experience" className="text-sm text-electric-cyan hover:underline">View Experience</Link>
            </div>
            
            <div className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300">
              <GraduationCap className="w-10 h-10 text-scientific-purple mb-6" />
              <h3 className="text-xl font-bold mb-4">Education Journey</h3>
              <p className="text-soft-white/70 mb-6">
                Currently pursuing an MPhil in High Energy Physics at the University of the Punjab, building upon a strong foundation established during my BS Physics at the University of Sargodha.
              </p>
              <Link href="/education" className="text-sm text-scientific-purple hover:underline">View Education</Link>
            </div>

            <div className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300">
              <BrainCircuit className="w-10 h-10 text-plasma-blue mb-6" />
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <p className="text-soft-white/70 mb-6">
                Expertise in Physics & Mathematics instruction, classroom management, student assessment, curriculum planning, and fostering collaborative learning environments.
              </p>
              <Link href="/skills" className="text-sm text-plasma-blue hover:underline">View Skills</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto glass-panel p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-scientific-purple/10 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Looking for a Dedicated Physics Educator?</h2>
            <p className="text-lg text-soft-white/80 mb-8">
              I am open to new academic and research opportunities where I can contribute to student success and institutional excellence.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 rounded-full bg-soft-white text-deep-space font-bold hover:bg-electric-cyan transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
