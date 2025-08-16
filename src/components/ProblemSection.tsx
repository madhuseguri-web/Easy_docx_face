import React from 'react';
import { AlertCircle, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Academic Documentation Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students worldwide face significant hurdles when creating structured, 
            professional project documentation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
            <div className="text-gray-900 font-semibold mb-2">Students Struggle</div>
            <div className="text-gray-600">with structured report writing and formatting</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
            <div className="text-gray-900 font-semibold mb-2">Hours Wasted</div>
            <div className="text-gray-600">per project on formatting and structure</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">65%</div>
            <div className="text-gray-900 font-semibold mb-2">Grade Impact</div>
            <div className="text-gray-600">lower grades due to poor documentation</div>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Easy Docx Transforms Hesitation into High-Quality Documentation
          </h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Our AI-powered platform eliminates the guesswork, provides intelligent templates, 
            and guides students through every step of professional documentation creation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 rounded-full px-4 py-2">✨ AI-Generated Content</div>
            <div className="bg-white/20 rounded-full px-4 py-2">📊 Built-in Diagrams</div>
            <div className="bg-white/20 rounded-full px-4 py-2">🔍 Plagiarism Detection</div>
            <div className="bg-white/20 rounded-full px-4 py-2">📝 Grammar Checking</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;