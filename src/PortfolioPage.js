import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
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

          <p className="mt-8">
          Hi, I'm Chebrolu Bhavyasree, currently persuing Bachelor's degree in Computer Science. I'm an aspiring and detail-oriented software developer with a strong foundation in full-stack web development, especially the MERN stack. I love building user-friendly, scalable applications that solve real-world problems. I'm always eager to explore new technologies, take on challenging projects, and grow as a developer. With a focus on clean code and continuous learning, I aim to create meaningful digital experiences that leave a lasting impact.
          </p>
          <div className="mt-8 text-center" data-aos="fade-up">
  <a
    href="https://drive.google.com/file/d/1oNLDPtbgO32Lk4Kid9LCxkN_RX7eJA3_/view?usp=sharing"
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
        <Skill icon={<FaNodeJs className="text-green-600 text-6xl mx-auto" />} name="Node.js" />
        <Skill icon={<SiMongodb className="text-green-500 text-6xl mx-auto" />} name="MongoDB" />
        <Skill icon={<FaReact className="text-cyan-400 text-6xl mx-auto" />} name="React" />
        <Skill icon={<SiTailwindcss className="text-blue-400 text-6xl mx-auto" />} name="Tailwind" />
        <Skill icon={<SiFirebase className="text-yellow-500 text-6xl mx-auto" />} name="Firebase" />
        <Skill icon={<FaFigma className="text-pink-500 text-6xl mx-auto" />} name="Figma" />
        <Skill icon={<SiVercel className="text-white text-6xl mx-auto" />} name="Vercel" />
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
<section id="projects" className="my-8 px-4">
<div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-10 relative inline-block" data-aos="fade-up">
        Projects
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              View
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
<div className="text-center mt-10">
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
      {/* School */}
      <div className="flex items-start gap-4 bg-[#2c3e50] p-4 rounded-xl shadow-md">
        <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
          <i className="fas fa-school text-xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">School (2019–2020)</h3>
          <p className="text-sm text-gray-300">Vowel Techlan School, Nellore, Andhra Pradesh</p>
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
        </div>
      </div>

      {/* B.Tech */}
      <div className="flex items-start gap-4 bg-[#2c3e50] p-4 rounded-xl shadow-md">
        <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
          <i className="fas fa-graduation-cap text-xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">B.Tech – CSE (2022–2026)</h3>
          <p className="text-sm text-gray-300">Mohan Babu University, Tirupati, Andhra Pradesh</p>
        </div>
      </div>
    </div>
  </div>

  {/* Graduation Cap Animation (image with AOS) */}
  <div data-aos="fade-left">
    <img 
      src=" https://cdn-icons-png.flaticon.com/512/3135/3135755.png" 
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
