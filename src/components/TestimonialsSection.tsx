import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Raviteja Seguri",
      role: "Computer Science Student",
      university: "IIT Delhi",
      rating: 5,
      text: "Easy Docx made my project report effortless! The AI-generated sections saved me countless hours and the quality was exceptional. I went from struggling with documentation to producing professional reports.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Deepak Chinthu",
      role: "Engineering Student",
      university: "NIT Warangal",
      rating: 5,
      text: "The diagram builder feature is incredible! I can create complex system architecture diagrams without any design skills. The integration with AI content generation is seamless and intuitive.",
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Shiva Sai Karthik Koyyala",
      role: "Software Engineering Student",
      university: "BITS Pilani",
      rating: 5,
      text: "The plagiarism checker and grammar tools gave me confidence in my work. I no longer worry about academic integrity issues, and my writing quality has improved significantly.",
      avatar: "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Kavya Amula",
      role: "Research Student",
      university: "IIIT Hyderabad",
      rating: 5,
      text: "The Viva Assistant feature helped me prepare for my project defense perfectly. Being able to convert my detailed report into presentation format was a game-changer.",
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Arjun Reddy",
      role: "Master's Student",
      university: "IISc Bangalore",
      rating: 5,
      text: "As someone who struggled with structured writing, Easy Docx was a lifesaver. The templates and AI suggestions helped me understand proper academic format and improve my documentation skills.",
      avatar: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "PhD Candidate",
      university: "JNU Delhi",
      rating: 5,
      text: "The flexible workflow accommodates my research needs perfectly. I can upload my own templates and still benefit from AI assistance. It's like having a personal documentation assistant.",
      avatar: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium mb-6">
            💬 Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Students Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from students who have transformed their academic documentation 
            experience with Easy Docx
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wall of Love Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Join Thousands of Satisfied Students</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 rounded-full px-4 py-2">📚 Academic Excellence</div>
            <div className="bg-white/20 rounded-full px-4 py-2">⚡ Time Saving</div>
            <div className="bg-white/20 rounded-full px-4 py-2">🎯 Quality Improvement</div>
            <div className="bg-white/20 rounded-full px-4 py-2">✅ Academic Integrity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;