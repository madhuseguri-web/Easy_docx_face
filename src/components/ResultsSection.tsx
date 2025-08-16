import React from 'react';
import { Clock, TrendingUp, Award, Users, Zap, CheckCircle } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const metrics = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: "15+ Hours",
      label: "Saved Per Week",
      description: "Students save significant time on documentation",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "50%",
      label: "Quality Improvement",
      description: "Reports show measurable quality enhancement",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "A+ Grade",
      label: "Average Rating",
      description: "Students achieve higher academic performance",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "10,000+",
      label: "Active Users",
      description: "Growing community of satisfied students",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Increased Productivity",
      description: "Automated content generation and smart templates streamline the writing process"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Better Grades",
      description: "Professional formatting and AI-assisted content improve academic performance"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Student-Friendly Interface",
      description: "Intuitive design makes advanced documentation tools accessible to everyone"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Built-in quality checks ensure professional, publication-ready documents"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
            📈 Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Measurable Impact on Student Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Easy Docx transforms the academic documentation experience 
            with quantifiable improvements in productivity and quality
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${metric.color} rounded-2xl mb-6`}>
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-3">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Students Choose Easy Docx
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our platform delivers tangible benefits that make a real difference 
              in academic success and documentation quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-white/90">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart Mockup */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Track Your Documentation Success
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Report Completion Rate</span>
                    <span className="text-gray-900 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Quality Score</span>
                    <span className="text-gray-900 font-bold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Time Efficiency</span>
                    <span className="text-gray-900 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Student Success Metrics</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Average Grade Improvement</span>
                  <span className="font-bold text-green-600">+1.2 GPA</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Documentation Speed</span>
                  <span className="font-bold text-blue-600">3x Faster</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Student Satisfaction</span>
                  <span className="font-bold text-purple-600">98%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Plagiarism Detection</span>
                  <span className="font-bold text-red-600">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;