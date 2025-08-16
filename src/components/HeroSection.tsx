import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import AuthModal from './AuthModal';

const HeroSection: React.FC = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                🚀 AI-Powered Documentation Studio
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Easy Docx:
                <span className="text-blue-600 block">Intelligent Project</span>
                Documentation Studio
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline academic project reports with AI-powered guidance, templates, 
                and tools designed specifically for students. Transform your documentation 
                process from struggle to success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="font-semibold">Get Started for Free</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="border border-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-medium">Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>50+ Universities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="ml-4 text-sm text-gray-500">Easy Docx Dashboard</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">AI Project Report Generator</div>
                          <div className="text-sm text-gray-500">Generate sections automatically</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-2">Recently Generated Sections</div>
                        <div className="space-y-2">
                          <div className="bg-white rounded px-3 py-2 text-sm">✅ Introduction</div>
                          <div className="bg-white rounded px-3 py-2 text-sm">✅ Problem Statement</div>
                          <div className="bg-white rounded px-3 py-2 text-sm">🔄 Methodology (In Progress)</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-gray-600">75% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  AI Generated
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Plagiarism Free
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 -z-10 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        </div>
      </section>

      {/* Signup Modal */}
      <AuthModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        type="signup"
      />
    </>
  );
};

export default HeroSection;