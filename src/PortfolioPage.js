import React, { useEffect, useState } from "react";
import { FiServer } from "react-icons/fi"; 
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaJava,
  FaPython,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiTypescript, SiNetlify, SiDocker,  SiChakraui
} from 'react-icons/si';


// ✅ Skill box component
const Skill = ({ icon, name }) => (
  <div className="border-4 border-blue-500 rounded-xl px-8 py-8 text-center min-w-[200px]">
    {icon}
    <p className="mt-1">{name}</p>
  </div>
);

const PortfolioPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  
  // Function to open the modal with project description
  const openModal = (description) => {
    console.log("Modal Triggered with Description:", description);
    setModalContent(description);
    setIsModalOpen(true);
  };
  
  
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(""); // Clear content when closing
  };
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  
  return (
    
    <div style={{ backgroundColor: '#1e2a47', minHeight: '100vh', color: 'white' }}>
      {/* Portfolio Heading */}
      <header className="flex items-center justify-center p-8">
        <div data-aos="fade-in" className="relative inline-block text-center">
        <h1 className="text-5xl font-bold inline-block relative">
  Portfolio
  <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
</h1>
  </div>
        
</header>
      <section id="about" className="my-8 px-4">
      {/* About Me Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center p-8">
    {/* Photo */}
<div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0">
  <div
    style={{
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      
    }}
  >
    <img
      src="assets/PortfolioImage.jpg" // ✅ Check file path and name
      alt="Bhavysree"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block', // ✅ Ensures no white space
        
      }}
    />
  </div>
</div>

{/* About Me Text */}
<div className="sm:ml-8 w-full sm:w-2/3 text-center sm:text-left" data-aos="fade-up">
<div className="text-center mb-4">
<h2 className="text-3xl font-bold absolute left-[-20px] top-[-20px]">
    CHEBROLU BHAVYASREE
</h2>

<h2 className="text-3xl font-semibold inline-block relative mt-12">
    About Me
    <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
  </h2>
</div>

<p className="text-xl mt-8">
Hi, I'm Chebrolu Bhavyasree, Computer Science graduate with hands-on experience in full-stack development and building web
applications. Incoming MSc Advanced Computer Science student at the University of
Birmingham (January 2027), with a keen interest in Artificial Intelligence, Machine Learning
and Natural Language Processing. Interested in opportunities combining technology, research
and communication. Currently developing a Software Incident Intelligence Hub from the
ground up.
  </p>
<div className="mt-8 text-center" data-aos="fade-up">
  <a
    href="https://drive.google.com/file/d/1nwpfDQ05PEKLV8nNPb_s0PLnpl3MfLvv/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-medium"
  >
    📄 View Resume
  </a>
</div>
</div>
</div>
</section>      

  {/* Skills Section */}
  <section id="skills" className="my-8 px-4"> 
<div className="p-10">
  <h2 className="text-3xl font-bold relative text-center mb-10 inline-block" data-aos="fade-up">
    Skills
    <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
  </h2>

  {/* Technical Skills */}
  <div className="mb-16" data-aos="fade-up">
    <h3 className="text-2xl font-semibold text-center mb-6 relative inline-block">
      Technical Skills
      <span className="absolute -bottom-1 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
    </h3>
    <div className="overflow-hidden w-full">
      <div className="flex space-x-6 animate-slide-left">
        <Skill icon={<FaHtml5 className="text-orange-600 text-6xl mx-auto" />} name="HTML" />
        <Skill icon={<FaCss3Alt className="text-blue-600 text-6xl mx-auto" />} name="CSS" />
        <Skill icon={<FaJs className="text-yellow-400 text-6xl mx-auto" />} name="JavaScript" />
        <Skill icon={<FaJava className="text-red-500 text-6xl mx-auto" />} name="Java" />
        <Skill icon={<FaPython className="text-blue-400 text-6xl mx-auto" />} name="Python" />
        <Skill icon={<FaNodeJs className="text-green-600 text-6xl mx-auto" />} name="Node.js" />
        {/*<Skill icon={<SiMongodb className="text-green-500 text-6xl mx-auto" />} name="MongoDB" />*/}
        <Skill icon={<FaReact className="text-cyan-400 text-6xl mx-auto" />} name="React" />
        <Skill icon={<SiTailwindcss className="text-blue-400 text-6xl mx-auto" />} name="Tailwind" />
        <Skill icon={<SiFirebase className="text-yellow-500 text-6xl mx-auto" />} name="Firebase" />
        <Skill icon={<FaFigma className="text-pink-500 text-6xl mx-auto" />} name="Figma" />
        <Skill icon={<SiVercel className="text-white text-6xl mx-auto" />} name="Vercel" />
        <Skill icon={<SiNetlify className="text-green-500 text-6xl mx-auto" />} name="Netlify" />
        {/*<Skill icon={<SiTypescript className="text-blue-600 text-6xl mx-auto" />} name="TypeScript" />*/}
        {/*<Skill icon={<SiDocker className="text-blue-400 text-6xl mx-auto" />} name="Docker" />*/}
      </div>
    </div>
  </div>

  {/* Non-Technical Skills */}
  <div data-aos="fade-up">
    <h3 className="text-2xl font-semibold text-center mb-6 relative inline-block">
      Non-Technical Skills
      <span className="absolute -bottom-1 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
    </h3>
    <div className="overflow-hidden w-full">
      <div className="flex space-x-6 animate-slide-left">
        <Skill icon={<span className="text-5xl">🗣️</span>} name="Communication" />
        <Skill icon={<span className="text-5xl">🧠</span>} name="Problem Solving" />
        <Skill icon={<span className="text-5xl">🤝</span>} name="Teamwork" />
        <Skill icon={<span className="text-5xl">📈</span>} name="Leadership" />
        <Skill icon={<span className="text-5xl">🎯</span>} name="Goal-Oriented" />
        <Skill icon={<span className="text-5xl">⚡</span>} name="Adaptability" />
        <Skill icon={<span className="text-5xl">💡</span>} name="Critical Thinking" />
      </div>
    </div>
  </div>
</div>
</section>
<section id="experience" className="my-16 px-4">
  <div className="p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center md:space-x-10">

    {/* Left Side Image */}
    <div
      className="w-full md:w-1/3 mb-8 md:mb-0 flex-shrink-0"
      data-aos="fade-right"
    >
      <img
        src="https://thrivemyway.com/wp-content/uploads/2021/11/Computer-animation-software-e1638027651347.jpg"
        alt="Technical Experience"
        className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Right Side Content */}
    <div className="w-full md:w-2/3 flex-shrink" data-aos="fade-left">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left relative inline-block">
        Technical Experience
        <span className="absolute -bottom-2 left-0 h-1 bg-pink-500 rounded-full w-full"></span>
      </h2>

      {/* ---------------- FIRST INTERNSHIP CARD ---------------- */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl mb-8 hover:shadow-pink-500 transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-3 text-pink-400 flex items-center gap-2 flex-wrap">
          <span className="text-white text-xl">💼</span> Internship — The Tann Mann Gaadi, Bangalore, India (Remote)
        </h3>

        <p className="text-gray-300 mb-2"><strong>Project:</strong> SWIFTZE</p>
        <p className="text-gray-300 mb-2"><strong>Duration:</strong> March 2025 – September 2025</p>
        <p className="text-gray-300 mb-4"><strong>Role:</strong> Frontend Developer / Temporary Lead</p>

       {/* Tasks */}
<p className="text-gray-300 leading-relaxed text-justify">
  Designed and developed UI/UX components for an e-commerce platform
  connecting customers with tailoring services. Integrated APIs to
  retrieve and dynamically display application data. Took on temporary
  team leadership responsibilities, coordinating task allocation,
  timelines and development progress while collaborating with team
  members to streamline workflows and deliver quality features.
</p>

        {/* Technologies Used */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <FaReact /> React.js
          </div>
          <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <FaJs /> JavaScript
          </div>
          <div className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
            <FiServer /> API
          </div>
          <div className="flex items-center gap-2 bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <SiTailwindcss /> Tailwind
          </div>
          <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <SiVercel /> Vercel
          </div>
        </div>
      </div>

      {/* ---------------- SECOND INTERNSHIP CARD (BIZOWL) ---------------- */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl hover:shadow-pink-500 transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-3 text-pink-400 flex items-center gap-2 flex-wrap">
          <span className="text-white text-xl">💼</span> Internship — Bizowl, New Delhi, India (Remote)
        </h3>

        <p className="text-gray-300 mb-2"><strong>Project:</strong> BIZOWL</p>
        <p className="text-gray-300 mb-2"><strong>Duration:</strong> December 2025 – July 2026</p>
        <p className="text-gray-300 mb-4"><strong>Role:</strong> Full Stack Developer Intern</p>

      {/* Tasks */}
<p className="text-gray-300 leading-relaxed text-justify">
  Developed modular, reusable and scalable UI components using React.js
  and Chakra UI. Integrated Firebase Authentication and Cloud Firestore
  to support secure user authentication and real-time data synchronisation.
  Improved interface accessibility, responsiveness and visual consistency
  while collaborating with cross-functional teams to deliver intuitive,
  user-friendly application features.
</p>

        {/* Technologies Used */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <FaReact /> React.js
          </div>
          <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <FaJs /> JavaScript
          </div>
          <div className="flex items-center gap-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <FiServer /> Chakra UI
          </div>
          <div className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
            <FiServer /> Firebase
          </div>
          <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <SiFirebase /> Firestore
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="research" className="my-8 px-4">
  <div className="p-8">
    <h2
      className="text-3xl font-bold text-center mb-10 relative inline-block"
      data-aos="fade-up"
    >
      Research & Publications
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Research Paper 1 */}
      <div
        className="p-6 rounded-xl border border-gray-700 bg-gray-900/50 hover:border-pink-500 transition-all duration-300"
        data-aos="fade-up"
      >
        <span className="text-pink-400 text-sm font-semibold">
          Research Paper 01
        </span>

        <h3 className="text-xl font-bold text-white mt-3 mb-3">
          Adaptive Graph-Based Sharding for Reducing Cross-Shard Transactions in NFT Systems
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          2nd International Conference on Computational Innovations and Emerging Trends (ICCIET 2026)
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          Explores graph-based sharding techniques for NFT systems, leveraging
          graph relationships to guide asset distribution across shards.
          The proposed approach aims to minimise cross-shard transactions,
          reduce communication overhead and improve transaction efficiency.
        </p>

        <p className="text-xs text-gray-400 mb-3">
          Mohan Babu University, Tirupati, India | April 17–18, 2026
        </p>

        <span className="inline-block px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30">
          Accepted · Proceedings Pending
        </span>
      </div>

      {/* Research Paper 2 */}
      <div
        className="p-6 rounded-xl border border-gray-700 bg-gray-900/50 hover:border-pink-500 transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <span className="text-pink-400 text-sm font-semibold">
          Research Paper 02
        </span>

        <h3 className="text-xl font-bold text-white mt-3 mb-3">
          A Sharded Blockchain Architecture for Scalable and Efficient NFT Asset Management
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Device Intelligence, Computing and Communication Technologies (DICCT 2026)
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          Proposes a sharded blockchain architecture for NFT asset management,
          exploring how partitioning blockchain workloads across multiple
          shards can improve scalability, distribute processing demands
          and support more efficient asset management.
        </p>

        <p className="text-xs text-gray-400 mb-3">
          Graphic Era (Deemed to be University), Dehradun, India | April 24–25, 2026
        </p>

        <span className="inline-block px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30">
          Accepted for Presentation · Paper ID: 1413
        </span>
      </div>

    </div>
  </div>
</section>

<section id="projects" className="my-8 px-4">
<div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-10 relative inline-block" data-aos="fade-up">
        Projects
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project - Software Incident Intelligence Hub */}
<div className="bg-[#2c3e50] rounded-xl p-6 shadow-lg" data-aos="fade-up">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-semibold text-white">Software Incident Intelligence Hub</h3>
    <span className="bg-amber-500/20 text-amber-300 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-400/30">
      In Progress
    </span>
  </div>

  <img
    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    alt="Software Incident Intelligence Hub"
    className="rounded-md mb-4 w-full h-48 object-cover"
  />

  <div className="flex justify-between mb-3">
    <a
      href="https://github.com/Bhavyaprem777/Software_Incident_Intelligence_Hub"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
    >
      View
    </a>
    <button
      onClick={() => document.getElementById('tech-incident-hub').classList.toggle('hidden')}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Tech Stack
    </button>
    <button
      onClick={() =>
        openModal(
          "Currently developing a full-stack incident management and operational intelligence platform from the ground up. Designed to log live system failures, track root-cause troubleshooting workflows, and integrate structured documentation via Confluence."
        )
      }
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
    >
      Know More
    </button>
  </div>

  <div id="tech-incident-hub" className="hidden text-sm text-gray-200 mt-2 space-y-1">
    <p>Frontend: React.js, Tailwind CSS</p>
    <p>Backend & DB: Node.js, Firebase</p>
    <p>Documentation & Workflow: Confluence (Planned integrations in progress)</p>
  </div>
</div>
        {/* Project 1 - Hospital Management */}
        <div className="bg-[#2c3e50] rounded-xl p-6 shadow-lg" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-white mb-4">Hospital Management System</h3>
          <img
            src="https://media.vanguardcommunications.net/Hospital-exterior.jpg"
            alt="Hospital Project"
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <div className="flex justify-between mb-3">
            <a
              href="https://hospital-management-website-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              View
            </a>
            <button
              onClick={() => document.getElementById('tech1').classList.toggle('hidden')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Tech Stack
            </button>
            <button
              onClick={() => openModal("This project is a Hospital Management System where users can register hospitals, make an appointment with doctor, Check Health Information, Visit Health Blog and more.")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Know More
            </button>
          </div>
          <div id="tech1" className="hidden text-sm text-gray-200 mt-2 space-y-1">
            <p>Frontend: HTML, CSS, JavaScript</p>
            <p>Backend: Node.js, Express</p>
            <p>Database: MongoDB</p>
          </div>
        </div>

        {/* Project 2 - News Sentiment Analyzer */}
        <div className="bg-[#2c3e50] rounded-xl p-6 shadow-lg" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-white mb-4">News Sentiment Analyzer</h3>
          <img
            src="https://genaikit.com/gif/SentimentAnalysis.gif"
            alt="News Sentiment"
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <div className="flex justify-between mb-3">
            <a
              href="https://news-sentiment-analyzer-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              View(only UI)
            </a>
            <button
              onClick={() => document.getElementById('tech2').classList.toggle('hidden')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Tech Stack
            </button>
            <button
              onClick={() => openModal("The News Sentiment Analyzer analyzes the sentiment of real-time news articles and displays the results using charts and word clouds.")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Know More
            </button>
          </div>
          <div id="tech2" className="hidden text-sm text-gray-200 mt-2 space-y-1">
            <p>Frontend: React.js, Tailwind CSS</p>
            <p>Backend: Flask (Python)</p>
            <p>Libraries: Chart.js, WordCloud</p>
          </div>
        </div>

        {/* Project 3 - Food Donation System */}
        <div className="relative">
  {/* Mail & Password Info */}
  <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-4 py-2 rounded shadow-md z-10">
    <p><strong>Mail:</strong> demo@example.com</p>
    <p><strong>Password:</strong> demo@123</p>
  </div>

        <div className="bg-[#2c3e50] rounded-xl p-6 shadow-lg" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-white mb-4">Food Donation & Rescue System</h3>
          <img
            src="https://img.freepik.com/free-photo/top-view-food-donation-box_23-2148733850.jpg"
            alt="Food Donation"
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <div className="flex justify-between mb-3">
            <a
              href="https://zero-waste-swart.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              View
            </a>
            <button
              onClick={() => document.getElementById('tech3').classList.toggle('hidden')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Tech Stack
            </button>
            <button
              onClick={() => openModal("This project is a food donation and rescue system that connects donors with verified recipients using AI-based food quantity estimation and geolocation.")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Know More
            </button>
          </div>
          <div id="tech3" className="hidden text-sm text-gray-200 mt-2 space-y-1">
            <p>Frontend: React.js, Tailwind CSS</p>
            <p>Backend: Node.js, Express</p>
            <p>Database: MongoDB</p>
            <p>Features: Geolocation, AI-based image input, lifecycle tracking</p>
          </div>
        </div>
      </div>
       {/* Project 4 - Voice Dubbing App */}
<div class="relative">
<div className="bg-[#2c3e50] rounded-xl p-6 shadow-lg" data-aos="fade-up">
  <h3 className="text-xl font-semibold text-white mb-4">Voice Dubbing App</h3>
  <img
    src="https://play-lh.googleusercontent.com/31rgFTQOFNYRTrYr-gyWLEgCCgC3FB3SDNYi-DhYYDX2K2dbTt34hObT_4OWHjidKK8"
    alt="Voice Dubbing App"
    className="rounded-md mb-4 w-full h-48 object-cover"
  />
  <div className="flex justify-between mb-3">
    <a
      href="https://voice-dub.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
    >
      View
    </a>
    <button
      onClick={() => document.getElementById('tech4').classList.toggle('hidden')}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Tech Stack
    </button>
    <button
      onClick={() =>
        openModal(
          "Voice Dubbing App converts Hindi audio files into English audio using Google Cloud services. Users can upload audio, preview both versions, and listen to real-time dubbed output."
        )
      }
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
    >
      Know More
    </button>
  </div>
  <div id="tech4" className="hidden text-sm text-gray-200 mt-2 space-y-1">
    <p>Frontend: Next.js</p>
    <p>Backend: Node.js</p>
    <p>APIs Used: Google Cloud Speech-to-Text, Translate API, Text-to-Speech</p>
    <p>Features: Audio Upload, Playback, Real-time Voice Conversion</p>
  </div>
</div>
</div>
{/* Project 5 - Employee Attendance System */}
<div class="relative">
<div className="bg-[#2c3e50] rounded-xl p-6 shadow-lg" data-aos="fade-up">
  <h3 className="text-xl font-semibold text-white mb-4">Employee Attendance System</h3>
  <img
    src="https://tse3.mm.bing.net/th/id/OIP.y-kW7ASVKKSsmkqjdE7ObAHaHa?pid=Api&P=0&h=220" // Placeholder, can replace with your own screenshot
    alt="Employee Attendance System"
    className="rounded-md mb-4 w-full h-48 object-cover"
  />
  <div className="flex justify-between mb-3">
    <a
      href="https://employee-attendance-system-omega.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition cursor-not-allowed"
    >
      View
    </a>
    <button
      onClick={() => document.getElementById('tech5').classList.toggle('hidden')}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Tech Stack
    </button>
    <button
      onClick={() =>
        openModal(
          "Employee Attendance System allows managers to track attendance and employees to mark their daily check-ins. Features include role-based access, attendance overview, and user-friendly UI. Backend integration with MongoDB and Node.js is planned."
        )
      }
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
    >
      Know More
    </button>
  </div>
  <div id="tech5" className="hidden text-sm text-gray-200 mt-2 space-y-1">
    <p>Frontend: React.js</p>
    <p>Styling: Tailwind CSS</p>
    <p>Planned Backend: Node.js & MongoDB</p>
    <p>Features: Employee & Manager Roles, Attendance Marking, Attendance Overview</p>
  </div>
</div>
</div>
</div>    
      {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-2 sm:px-4">
    <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-[90%] sm:max-w-sm md:max-w-md overflow-y-auto max-h-[90vh]">
      <h4 className="text-base sm:text-lg font-semibold mb-3 text-black">
        Project Description
      </h4>
      <p className="text-sm sm:text-base text-black break-words">
        {modalContent || "No description available"}
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm sm:text-base"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
<div className="text-center mt-28">
  <button
    onClick={handleClick}
    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-medium"
  >
    🎥 Click here to watch video demo
  </button>

  {showLinks && (
    <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      <a
        href="https://drive.google.com/file/d/1aTgXhJ2HGoeytixuiXCwQVlJ_aGggOV7/view"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left"
      >
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          🏥 Hospital Management System
        </h3>
        <p className="text-sm text-gray-600">Click to watch the full video demo of hospital management project.</p>
      </a>

      <a
        href="https://drive.google.com/file/d/1GaCzZ-UQ-wYyz3iQ67thYXcKaFsy4v9h/view"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left"
      >
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          📰 News Sentiment Analyzer
        </h3>
        <p className="text-sm text-gray-600">Watch how your app analyzes news sentiment with real-time data.</p>
      </a>

      <a
        href="https://drive.google.com/file/d/1KzLPQp_rF5j8mcXJZ1mx_Yq5m7jgNr01/view"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left"
      >
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          🍱 Food Donation & Rescue System
        </h3>
        <p className="text-sm text-gray-600">Demo video showing donation lifecycle and food rescue features.</p>
      </a>
      <a
  href="https://drive.google.com/file/d/1Yx89zPL9BySLal9BLOVH2362KWL72IhT/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left"
>
  <h3 className="text-xl font-semibold text-blue-800 mb-2">
    🎙️ Voice Dubbing App
  </h3>
  <p className="text-sm text-gray-600">Watch how Hindi audio gets converted to English using AI-powered dubbing.</p>
</a>
<a
  href="https://drive.google.com/file/d/18TLBfw3Qc4qmqeGMaovRMsPovCjw9CO8/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left cursor-not-allowed"
>
  <h3 className="text-xl font-semibold text-blue-800 mb-2">
    🗂️ Employee Attendance System
  </h3>
  <p className="text-sm text-gray-600">
    Track employee check-ins and attendance with role-based access for employees and managers. Backend integration with Node.js & MongoDB is planned.
  </p>
</a>


    </div>
  )}
</div>
</div>
</section>

<section id="education" className="my-8 px-4">
  <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-12" data-aos="fade-up">
    {/* Education Section */}
    <div className="flex-1" data-aos="fade-right">
      <h2 className="text-3xl font-bold text-center mb-10 relative inline-block text-white">
        Education
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
      </h2>

      <div className="relative border-l-4 border-pink-500 pl-6 max-w-3xl mx-auto space-y-10">

         {/* B.Tech */}
        <div className="flex items-start gap-4 bg-[#2c3e50] p-4 rounded-xl shadow-md">
          <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
            <i className="fas fa-graduation-cap text-xl"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Bachelor of Technology (B.Tech) – Computer Science and Engineering (2022–2026)</h3>
            <p className="text-sm text-gray-300">Mohan Babu University, Tirupati, Andhra Pradesh</p>
            <p className="text-sm text-gray-300"><strong>CGPA:</strong> 9.97/10 </p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="flex items-start gap-4 bg-[#2c3e50] p-4 rounded-xl shadow-md">
          <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
            <i className="fas fa-book-open text-xl"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Intermediate – MPC (2020–2022)</h3>
            <p className="text-sm text-gray-300">Vowel Junior College, Nellore, Andhra Pradesh</p>
            <p className="text-sm text-gray-300"><strong>Percentage:</strong> 98%</p>
          </div>
        </div>

       {/* School */}
        <div className="flex items-start gap-4 bg-[#2c3e50] p-4 rounded-xl shadow-md">
          <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
            <i className="fas fa-school text-xl"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">School (2019–2020)</h3>
            <p className="text-sm text-gray-300">Vowel Techlan School, Nellore, Andhra Pradesh</p>
            <p className="text-sm text-gray-300"><strong>Percentage:</strong> 95.8%</p>
          </div>
        </div>
      </div>
    </div>

    {/* Graduation Cap Animation (image with AOS) */}
    <div data-aos="fade-left">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" 
        alt="Graduation Cap"
        className="w-64 h-auto object-contain drop-shadow-lg"
      />
    </div>
  </div>
</section>

<section id="contact" className="my-8 px-4">
<div className="p-8 max-w-7xl mx-auto grid grid-cols-1 gap-10" data-aos="fade-up">
  {/* Contact Me Heading */}
  <h2 className="text-3xl font-bold text-center mb-10 relative inline-block" data-aos="fade-up">
  <span className="relative">
    Contact Me
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-1 w-[90%] bg-pink-500 rounded-full"></span>
  </span>
</h2>


  {/* Contact Information Below Heading */}
  <div className="flex flex-row items-center gap-10 mb-10 flex-wrap">
  {/* Phone Number Box */}
  <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
    <i className="fas fa-phone-alt text-pink-500 text-xl"></i>
    <span className="text-white">+91 9121030849</span> {/* Replace with your number */}
  </div>

  {/* Email Box */}
  <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
    <i className="fas fa-envelope text-pink-500 text-xl"></i>
    <span className="text-white break-words max-w-full">
      bhavyasreechebrolu@gmail.com
    </span> {/* Replace with your email */}
  </div>

  {/* GitHub Box */}
  <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
    <i className="fab fa-github text-pink-500 text-xl"></i>
    <a href="https://github.com/Bhavyaprem777" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
      github.com/Bhavyaprem777
    </a>
  </div>

  {/* Linkedin Box */}
  <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
    <i className="fas fa-globe text-pink-500 text-xl"></i>
    <a href="https://www.linkedin.com/in/bhavyasree-chebrolu-a218002b7/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
     Linkedin
    </a>
  </div>
</div>


  {/* Grid Layout for Image and Contact Form */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Left Side: Image */}
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/qw.gif"  // Replace with your preferred image link
        alt="Graduation Cap"
        className="w-96 h-100 object-contain drop-shadow-lg mb-6 rounded-lg"
      />
    </div>

    {/* Right Side: Contact Form */}
    <div className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">
      {/* Contact Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-white mb-2">Name</label>
          <input
            type="text"
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow duration-300 shadow-md hover:shadow-lg"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow duration-300 shadow-md hover:shadow-lg"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow duration-300 shadow-md hover:shadow-lg"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <div className="flex justify-center">
        <a
  href="mailto:bhavyasreechebrolu@gmail.com"
  className="block w-full bg-pink-500 hover:bg-pink-600 text-white text-center py-3 rounded-md transition duration-300 shadow-md hover:shadow-xl"
>
  Send Message
</a>
</div>

</form>
</div>
</div>
</div>
</section>
</div>

);
};

export default PortfolioPage;
      