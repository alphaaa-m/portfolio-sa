'use client';
import PageTransition from '@/components/PageTransition';
import NetworkCanvas from '@/components/canvas/Network';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <PageTransition>
      <div className="relative min-h-screen pb-24">
        <NetworkCanvas />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex flex-col items-center">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <div className="h-1 w-20 bg-electric-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-soft-white/70 max-w-2xl mx-auto text-lg">
              Open to academic, research, and teaching opportunities. Feel free to reach out for collaboration or inquiries.
            </p>
          </div>

          {/* Contact Information */}
          <div className="glass-panel p-10 flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold mb-10 text-center">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10">
                    <Mail className="w-8 h-8 text-electric-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-soft-white/60 mb-2">Email</p>
                    <a href="mailto:sa3701195@gmail.com" className="text-lg font-medium hover:text-electric-cyan transition-colors">
                      sa3701195@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10">
                    <Phone className="w-8 h-8 text-scientific-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-soft-white/60 mb-2">Phone</p>
                    <a href="tel:+923056119809" className="text-lg font-medium hover:text-scientific-purple transition-colors">
                      +92 305 6119809
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10">
                    <MapPin className="w-8 h-8 text-plasma-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-soft-white/60 mb-2">Location</p>
                    <p className="text-lg font-medium">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
          </div>
          </div>
      </div>
    </PageTransition>
  );
}
