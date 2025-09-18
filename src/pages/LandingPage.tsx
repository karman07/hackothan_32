import { useState, useEffect } from 'react';
import { Shield, Search, Upload, CheckCircle, Building, FileText, Lock, Zap, Eye, Award, AlertTriangle, ArrowRight, Star } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useNavigate } from 'react-router-dom';

const EduVerifyLanding = () => {
  const [_, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms detect tampered documents, forged signatures, and anomalies in real-time with 99.9% accuracy."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Institutional Cross-Verification",
      description: "Instantly verify certificates against official databases and credential registries across Jharkhand's educational institutions."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Military-grade cryptographic validation ensures document integrity and prevents unauthorized modifications or tampering."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "OCR Analysis",
      description: "Optical Character Recognition technology extracts and validates metadata, QR codes, signatures, and embedded security features."
    }
  ];

  const stats = [
    { number: "99.9%", label: "Detection Accuracy", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "150+", label: "Partner Institutions", icon: <Building className="w-6 h-6" /> },
    { number: "50K+", label: "Documents Verified", icon: <FileText className="w-6 h-6" /> },
    { number: "24/7", label: "System Uptime", icon: <Zap className="w-6 h-6" /> }
  ];

  const threats = [
    "Tampered grades or photographs",
    "Forged institutional seals or signatures", 
    "Invalid or duplicate certificate numbers",
    "Non-existent institutions or course programs",
    "Cloned or replicated documents"
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Registrar, Ranchi University",
      text: "EduVerify has revolutionized our verification process. What used to take weeks now takes minutes.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "HR Director, TCS Jharkhand",
      text: "The accuracy and speed of document verification has significantly improved our hiring process.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">

        <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <AlertTriangle className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm text-blue-800 font-medium">Combating Educational Certificate Fraud</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Academic Credential
              <span className="block text-blue-600">
                Verification System
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Government-backed AI-powered platform to authenticate educational certificates and detect document fraud. 
              Trusted by institutions, employers, and government agencies across Jharkhand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center shadow-lg" onClick={() => navigate('/app')}>
                <Upload className="w-5 h-5 mr-2" />
                Verify Certificate Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Addressing Critical Educational Challenges
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                The rise in digitization has led to sophisticated document fraud affecting educational institutions, 
                employers, and government agencies. Traditional verification methods are inadequate for modern threats.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  Common Document Fraud Types
                </h3>
                <div className="space-y-3">
                  {threats.map((threat, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{threat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-blue-600 font-medium cursor-pointer hover:text-blue-700 transition-colors">
                Learn more about our security measures
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Traditional Verification Process</h3>
                  <p className="text-gray-600">Manual, time-consuming, and unreliable</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Email verification requests</span>
                    <span className="text-red-600 font-medium">5-10 days</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Manual document review</span>
                    <span className="text-red-600 font-medium">High error rate</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Phone confirmations</span>
                    <span className="text-red-600 font-medium">Unreliable</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg text-center">
                  <span className="text-red-700 font-semibold">Result: Vulnerable to fraud and manipulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Verification Technology
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, machine learning, and blockchain technology to provide 
              the most accurate and secure document verification system available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200 cursor-pointer group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Simple Three-Step Verification Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures quick, accurate, and secure verification of educational credentials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload Document",
                description: "Submit your certificate or degree document in PDF, image, or scanned format. Our system supports both legacy certificates and modern digital documents.",
                icon: <Upload className="w-8 h-8" />,
                color: "blue"
              },
              {
                step: "2", 
                title: "AI-Powered Analysis",
                description: "Our advanced AI engine performs comprehensive analysis using OCR, metadata extraction, pattern recognition, and cross-referencing with official databases.",
                icon: <Search className="w-8 h-8" />,
                color: "green"
              },
              {
                step: "3",
                title: "Instant Verification Report",
                description: "Receive detailed verification results within seconds, including authenticity score, fraud indicators, and official validation certificate.",
                icon: <Award className="w-8 h-8" />,
                color: "purple"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className={`text-2xl font-bold text-${item.color}-600`}>{item.step}</span>
                  </div>
                  <div className={`text-${item.color}-600 mb-4 flex justify-center`}>{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted by Education Leaders
            </h2>
            <p className="text-gray-600 text-lg">
              See what institutional leaders and employers say about EduVerify
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <Footer/>
    </div>
  );
};

export default EduVerifyLanding;