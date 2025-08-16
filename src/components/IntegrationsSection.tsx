import React from 'react';

const IntegrationsSection: React.FC = () => {
  const integrations = [
    {
      name: "MongoDB",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Database"
    },
    {
      name: "Express.js",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Backend Framework"
    },
    {
      name: "React",
      logo: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Frontend Library"
    },
    {
      name: "Node.js",
      logo: "https://images.pexels.com/photos/11035444/pexels-photo-11035444.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Runtime Environment"
    },
    {
      name: "Mermaid.js",
      logo: "https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Diagram Generation"
    },
    {
      name: "OpenAI GPT",
      logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "AI Generation"
    },
    {
      name: "Google Docs",
      logo: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Document Export"
    },
    {
      name: "Grammarly",
      logo: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      description: "Grammar Checking"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
            🔗 Powerful Integrations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built on Reliable Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Easy Docx leverages industry-leading tools and frameworks to deliver 
            a robust, scalable, and secure documentation platform
          </p>
        </div>

        {/* Tech Stack Highlight */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MERN Stack Architecture</h3>
            <p className="text-gray-600">
              Full-stack JavaScript solution providing seamless performance and scalability
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">M</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">MongoDB</h4>
              <p className="text-sm text-gray-600">NoSQL database for flexible data storage</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-600">E</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Express.js</h4>
              <p className="text-sm text-gray-600">Fast, minimalist web framework</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">R</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">React</h4>
              <p className="text-sm text-gray-600">Dynamic user interface library</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">N</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Node.js</h4>
              <p className="text-sm text-gray-600">Server-side JavaScript runtime</p>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{integration.name}</h4>
              <p className="text-xs text-gray-600">{integration.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-blue-600 font-bold">API</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">RESTful API</h3>
            <p className="text-gray-600">
              Well-documented API endpoints for seamless integration with external tools and services.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-green-600 font-bold">AI</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Integration</h3>
            <p className="text-gray-600">
              Advanced AI models for content generation, grammar checking, and intelligent suggestions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-purple-600 font-bold">PDF</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Export Options</h3>
            <p className="text-gray-600">
              Multiple export formats including PDF, DOCX, and HTML for submission flexibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;