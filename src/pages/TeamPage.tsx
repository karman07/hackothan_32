import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Github, Linkedin, Mail, Code,  Brain,  Award, GraduationCap, MapPin, Calendar, Star, Users, Coffee,  Target, Lightbulb } from 'lucide-react';
import Shubh from '../assets/shubh.jpeg';
const TeamPage = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Ramneek Kaur Brar",
      role: "Project Lead & Full-Stack Developer",
      specialization: "AI/ML & Backend Architecture",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      college: "Thapar Polytechnic, Patiala",
      year: "Final Year Diploma CSE",
      location: "Sangrur, Punjab",
      age: 19,
      gpa: "9.0/10",
      skills: ["React.js", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS", "Docker", "Blockchain"],
      contributions: [
        "Led the entire project from conception to deployment",
        "Developed AI-powered document analysis algorithms with 94% accuracy",
        "Architected scalable microservices backend infrastructure",
        "Implemented blockchain-based certificate verification system",
        "Mentored junior team members and coordinated development sprints"
      ],
      github: "https://github.com/karman07",
      linkedin: "https://github.com/karman07",
      email: "karmansingharora01@gmail.com",
      bio: "Passionate about leveraging AI to solve real-world problems in education technology. With 3+ years of programming experience, I've led multiple hackathon teams to victory and published research papers on fraud detection. My vision is to make education verification transparent and accessible to all.",
      achievements: ["Winner of Smart India Hackathon 2023", "Published research on ML-based fraud detection", "Google Summer of Code participant"],
      hobbies: ["Open source contributing", "Chess", "Tech blogging"]
    },
    {
      id: 2,
      name: "Karman Singh",
      role: "Frontend Lead & UI/UX Designer",
      specialization: "User Experience & Interface Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763c88?w=300&h=300&fit=crop&crop=face",
      college: "Thapar Polytechnic, Patiala",
      year: "Final Year Diploma CSE",
      location: "Patiala, Punjab",
      age: 18,
      gpa: "9.1/10",
      skills: ["React.js", "TypeScript", "Figma", "Tailwind CSS", "Adobe XD", "Framer", "Three.js", "GSAP"],
      contributions: [
        "Designed intuitive user interface with 98% user satisfaction rate",
        "Developed responsive frontend components with accessibility compliance",
        "Created comprehensive design system and style guide",
        "Implemented advanced animations and micro-interactions",
        "Conducted extensive user research and usability testing"
      ],
      github: "https://github.com/karman07",
      linkedin: "https://github.com/karman07",
      email: "karmansingharora01@gmail.com",
      bio: "UX enthusiast with a passion for creating accessible and user-friendly educational platforms. Having worked with 5+ startups as a freelance designer, I specialize in government portal design standards and have a deep understanding of Indian user behavior patterns.",
      achievements: ["Winner of UX Design Challenge 2023", "Dribbble featured designer", "Adobe Certified Expert"],
      hobbies: ["Digital art", "Photography", "UI animation tutorials"]
    },
    {
      id: 3,
      name: "Ruhan Chopra",
      role: "ML Engineer & Data Scientist",
      specialization: "Computer Vision & OCR Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      college: "Thapar Polytechnic, Patiala",
      year: "Final Year B.Tech ECE",
      location: "Dhanbad, Jharkhand",
      age: 21,
      gpa: "8.9/10",
      skills: ["Python", "OpenCV", "PyTorch", "Scikit-learn", "Docker", "MLOps", "CUDA", "Jupyter"],
      contributions: [
        "Developed OCR models with 97% character recognition accuracy",
        "Implemented fraud detection algorithms using ensemble methods",
        "Optimized ML model performance reducing inference time by 60%",
        "Created comprehensive dataset of 50,000+ document samples",
        "Built automated model training and deployment pipelines"
      ],
      github: "https://github.com/rohitgupta",
      linkedin: "https://linkedin.com/in/rohitgupta",
      email: "karmansingharora01@gmail.com",
      bio: "ML researcher focused on computer vision applications in document verification. With publications in IEEE conferences and experience in 3 research internships, I'm passionate about applying cutting-edge AI to solve societal challenges.",
      achievements: ["IEEE paper published", "Microsoft AI Challenge finalist", "Kaggle Expert rating"],
      hobbies: ["Research paper reading", "Basketball", "AI model experiments"]
    },
    {
      id: 4,
      name: "Shubhkarman Singh",
      role: "DevOps Engineer & Database Architect",
      specialization: "Cloud Infrastructure & System Security",
      image: Shubh,
      college: "Thapar Polytechnic, Patiala",
      year: "Final Year B.Tech IT",
      location: "Patiala, Punjab",
      age: 22,
      gpa: "8.6/10",
      skills: ["PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Nginx"],
      contributions: [
        "Designed scalable database architecture handling 1M+ records",
        "Implemented robust cloud infrastructure with 99.9% uptime",
        "Set up comprehensive DevOps pipelines reducing deployment time by 80%",
        "Ensured system security and GDPR compliance",
        "Optimized database queries improving response time by 45%"
      ],
      github: "https://github.com/snehakumari",
      linkedin: "https://linkedin.com/in/snehakumari",
      email: "sneha.kumari@example.com",
      bio: "Cloud architecture specialist with expertise in building secure, scalable systems for government applications. AWS certified with hands-on experience in managing production systems serving thousands of users daily.",
      achievements: ["AWS Solutions Architect certified", "Best Cloud Project Award 2023", "Cybersecurity certification"],
      hobbies: ["Cloud computing blogs", "Hiking", "Cooking"]
    },
    {
      id: 5,
      name: "Mehak Gupta",
      role: "Backend Developer & Security Specialist",
      specialization: "API Development & Cybersecurity",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      college: "Thapar Polytechnic, Patiala",
      year: "Final Year B.Tech CSE",
      location: "Patiala, Punjab",
      age: 23,
      gpa: "8.4/10",
      skills: ["Node.js", "Express.js", "JWT", "OAuth", "Redis", "GraphQL", "Microservices", "Blockchain"],
      contributions: [
        "Developed secure REST APIs with JWT authentication",
        "Implemented role-based access control system",
        "Built real-time notification system using WebSockets",
        "Created comprehensive API documentation and testing suites",
        "Integrated third-party payment and verification services"
      ],
      github: "https://github.com/vikashkumar",
      linkedin: "https://linkedin.com/in/vikashkumar",
      email: "vikash.kumar@example.com",
      bio: "Security-focused backend developer with deep expertise in building robust APIs and implementing cybersecurity best practices. Experienced in penetration testing and has helped identify vulnerabilities in 10+ applications.",
      achievements: ["Ethical Hacking certification", "API Security specialist", "Bug bounty recognition"],
      hobbies: ["Cybersecurity research", "Gaming", "Motorcycle riding"]
    },
    {
      id: 6,
      name: "Naman Wadhwa",
      role: "QA Engineer & Product Manager",
      specialization: "Quality Assurance & Product Strategy",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      college: "Thapar Polytechnic, Patiala",
      year: "Final Year BCA",
      location: "Patiala, Punjab",
      age: 21,
      gpa: "9.0/10",
      skills: ["Selenium", "Jest", "Cypress", "Postman", "JIRA", "Agile", "Product Analytics", "User Research"],
      contributions: [
        "Designed comprehensive testing strategy covering 95% code coverage",
        "Managed product roadmap and feature prioritization",
        "Conducted user interviews and gathered requirements from 100+ stakeholders",
        "Implemented automated testing reducing manual testing time by 70%",
        "Led quality assurance ensuring zero critical bugs in production"
      ],
      github: "https://github.com/anitasingh",
      linkedin: "https://linkedin.com/in/anitasingh",
      email: "anita.singh@example.com",
      bio: "Product-minded QA engineer with a passion for creating bug-free, user-centric applications. With experience in both manual and automated testing, I ensure that our product meets the highest quality standards while delivering exceptional user experience.",
      achievements: ["ISTQB Foundation Level certified", "Agile Testing certification", "Best QA Project Award"],
      hobbies: ["Product design", "Reading", "Yoga"]
    }
  ];

  const projectStats = [
    { label: "Development Time", value: "10 Months", icon: <Calendar className="w-5 h-5" /> },
    { label: "Lines of Code", value: "35,000+", icon: <Code className="w-5 h-5" /> },
    { label: "AI Models Trained", value: "15", icon: <Brain className="w-5 h-5" /> },
    { label: "Test Cases", value: "800+", icon: <Award className="w-5 h-5" /> },
    { label: "Team Members", value: "6", icon: <Users className="w-5 h-5" /> },
    { label: "Coffee Consumed", value: "500+ Cups", icon: <Coffee className="w-5 h-5" /> }
  ];

  const technologies = [
    { name: "React.js", category: "Frontend", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-800" },
    { name: "Python", category: "AI/ML", color: "bg-yellow-100 text-yellow-800" },
    { name: "TensorFlow", category: "AI/ML", color: "bg-orange-100 text-orange-800" },
    { name: "MongoDB", category: "Database", color: "bg-green-100 text-green-800" },
    { name: "AWS", category: "Cloud", color: "bg-purple-100 text-purple-800" },
    { name: "Docker", category: "DevOps", color: "bg-blue-100 text-blue-800" },
    { name: "Blockchain", category: "Security", color: "bg-red-100 text-red-800" }
  ];

  const milestones = [
    { month: "Month 1-2", title: "Research & Discovery", description: "Problem analysis, market research, and technology selection", status: "completed" },
    { month: "Month 3-4", title: "Design & Architecture", description: "System design, UI/UX mockups, and database schema", status: "completed" },
    { month: "Month 5-7", title: "Core Development", description: "MVP development, AI model training, and basic features", status: "completed" },
    { month: "Month 8-9", title: "Advanced Features", description: "Security implementation, performance optimization, and testing", status: "completed" },
    { month: "Month 10", title: "Deployment & Launch", description: "Production deployment, documentation, and final testing", status: "completed" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      <Navbar/>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <GraduationCap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm text-blue-800 font-medium">6 Students, 1 Vision</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet the Student Innovators
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Revolutionizing Education</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Six dedicated computer science students from Jharkhand's premier institutions united by a common goal: 
            combating educational fraud through cutting-edge artificial intelligence and blockchain technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {projectStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the talented individuals who transformed a bold vision into reality through months of 
              dedicated research, innovative development, and unwavering collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:border-blue-200 hover:-translate-y-1"
                
              >
                <div className="flex flex-col gap-6">
                  {/* Profile Header */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl object-cover shadow-md"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-blue-600 font-semibold mb-1">{member.role}</div>
                      <div className="text-gray-600 text-sm mb-3">{member.specialization}</div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Age {member.age}</span>
                        <span>•</span>
                        <span>GPA {member.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Education & Location */}
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <GraduationCap className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="font-medium">{member.college}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-3 text-green-500" />
                      <span>{member.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-3 text-red-500" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>

                  {/* Skills */}
                  <div>
                    <div className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Technical Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <div>
                    <div className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Key Contributions
                    </div>
                    <ul className="space-y-2">
                      {member.contributions.slice(0, 3).map((contribution, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {contribution}
                        </li>
                      ))}
                      {member.contributions.length > 3 && (
                        <li className="text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-700">
                          +{member.contributions.length - 3} more contributions...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Notable Achievements
                    </div>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Award className="w-3 h-3 mr-2 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hobbies & Interests */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Interests:</span> {member.hobbies.join(", ")}
                    </div>
                    <div className="flex space-x-3">
                      <a href={member.github} className="text-gray-400 hover:text-gray-700 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Journey */}
      <section id="journey" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Journey</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From initial concept to final deployment, here's how six students transformed an idea 
              into a revolutionary platform over 10 months of intensive collaboration.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <div className="text-blue-600 font-semibold mb-2">{milestone.month}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                phase: "Research & Planning",
                duration: "2 Months",
                description: "Deep analysis of certificate fraud, extensive market research, and comprehensive system architecture design.",
                achievements: ["100+ institutions surveyed", "Technical feasibility confirmed", "Architecture blueprint finalized"],
                icon: <Lightbulb className="w-8 h-8" />,
                color: "from-yellow-500 to-orange-500"
              },
              {
                phase: "Development & Innovation",
                duration: "7 Months",
                description: "Intensive development phase building core platform, training AI models, and implementing cutting-edge security features.",
                achievements: ["15 AI models trained", "35,000+ lines of code written", "Security protocols implemented"],
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-purple-500"
              },
              {
                phase: "Testing & Deployment",
                duration: "1 Month",
                description: "Comprehensive testing across all modules, performance optimization, and successful production deployment.",
                achievements: ["800+ test cases executed", "99.9% uptime achieved", "Complete documentation delivered"],
                icon: <Award className="w-8 h-8" />,
                color: "from-green-500 to-teal-500"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${phase.color} text-white mb-6`}>
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <div className="text-blue-600 font-semibold mb-4">{phase.duration}</div>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                <div>
                  <div className="text-sm font-semibold text-gray-800 mb-3">Key Achievements:</div>
                  <ul className="space-y-2">
                    {phase.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Modern technologies and frameworks carefully selected to build a robust, scalable, 
              and secure platform that can handle the demands of educational institutions nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all border border-gray-200">
                <div className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                  {tech.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why These Technologies?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Performance & Scalability</h4>
                <p className="text-gray-600 text-sm">
                  React.js and Node.js provide exceptional performance while MongoDB and AWS ensure 
                  our platform can scale to serve millions of students and institutions across India.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">AI & Security</h4>
                <p className="text-gray-600 text-sm">
                  TensorFlow powers our advanced fraud detection algorithms, while blockchain technology 
                  ensures tamper-proof certificate verification and data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture & Values */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team Culture</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Beyond technical expertise, our strength lies in our shared values, collaborative spirit, 
              and unwavering commitment to making education more transparent and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Excellence</h3>
              <p className="text-gray-600">
                We believe in the power of diverse perspectives. Each team member brings unique skills 
                and experiences that strengthen our collective capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore cutting-edge technologies to solve 
                complex problems in the education sector.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Driven</h3>
              <p className="text-gray-600">
                Every decision we make is guided by our mission to create meaningful impact 
                in the lives of students and educational institutions.
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fun Team Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Cups of Coffee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600">Late Night Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Pizza Orders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-600">Git Commits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default TeamPage;