import React from 'react';
import { Zap, Brain, Instagram as Diagram3, Shield, Presentation, Settings, FileText, Sparkles } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Grow Your Reports",
      description: "Input project details including title, abstract, and tech stack. Select from our curated templates to get started instantly.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Generation",
      description: "Leverage generative AI to auto-create sections like Introduction, Problem Statement, Methodology, and Conclusion - fully editable with prompt-based suggestions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Diagram3 className="w-8 h-8" />,
      title: "Diagram Builder",
      description: "Integrated Mermaid.js for creating flowcharts, system designs, and architecture diagrams directly within your documentation.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Academic Integrity Tools",
      description: "Built-in plagiarism and grammar checkers ensure originality and quality while maintaining academic standards.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Viva Assistant",
      description: "Simplify your projects into oral pitch formats perfect for presentations and exam preparations.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Flexible Workflow",
      description: "Modular, guided process supports both custom templates and uploaded formats for maximum flexibility.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart Templates",
      description: "Pre-built academic templates for various project types including research papers, technical reports, and thesis documentation.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Intelligent Suggestions",
      description: "AI-powered writing assistance provides contextual suggestions to improve clarity, structure, and academic tone.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            🚀 Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need for Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to streamline your documentation process 
            and ensure professional, high-quality project reports
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Feature badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {index === 0 && <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">Templates</span>}
                {index === 1 && <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded">AI Powered</span>}
                {index === 2 && <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">Visual</span>}
                {index === 3 && <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded">Quality Control</span>}
                {index === 4 && <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">Presentation</span>}
                {index === 5 && <span className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">Customizable</span>}
                {index === 6 && <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">Pre-built</span>}
                {index === 7 && <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded">Smart</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                See Easy Docx in Action
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Generate complete project sections in minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Create professional diagrams with zero design skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Ensure academic integrity with built-in checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Export to multiple formats for submission</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="text-sm text-white/80 mb-2">AI Generated Content Preview</div>
                <div className="text-white font-medium">"The proposed system architecture employs a microservices approach..."</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">2.5min</div>
                  <div className="text-sm text-white/80">Avg Generation Time</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-sm text-white/80">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;