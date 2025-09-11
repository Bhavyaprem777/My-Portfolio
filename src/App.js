// src/App.js
import React, { useState } from 'react';
import PortfolioPage from './PortfolioPage';
import { Briefcase } from 'lucide-react';
import {
  User,
  Code,
  FolderOpen,
  GraduationCap,
  Mail,
  Menu
} from 'lucide-react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
<button
  className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-lg hover:bg-blue-700"
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  <Menu size={24} />
</button>

{/* Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-indigo-100 text-blue-900 shadow-xl z-40 transform transition-transform duration-300 ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="p-6 space-y-6">
    <h2 className="text-2xl font-bold text-center mb-6">My Portfolio</h2>
    <a
      href="#about"
      onClick={() => setSidebarOpen(false)}
      className="flex items-center gap-3 hover:bg-blue-700 px-4 py-2 rounded transition"
    >
      <User size={20} /> About Me
    </a>
    <a
      href="#skills"
      onClick={() => setSidebarOpen(false)}
      className="flex items-center gap-3 hover:bg-blue-700 px-4 py-2 rounded transition"
    >
      <Code size={20} /> Skills
    </a>
    <a
      href="#experience"
      onClick={() => setSidebarOpen(false)}
      className="flex items-center gap-3 hover:bg-blue-700 px-4 py-2 rounded transition"
    >
      <Briefcase size={20} /> Technical Experience
    </a>
    <a
      href="#projects"
      onClick={() => setSidebarOpen(false)}
      className="flex items-center gap-3 hover:bg-blue-700 px-4 py-2 rounded transition"
    >
      <FolderOpen size={20} /> Projects
    </a>
    <a
      href="#education"
      onClick={() => setSidebarOpen(false)}
      className="flex items-center gap-3 hover:bg-blue-700 px-4 py-2 rounded transition"
    >
      <GraduationCap size={20} /> Education
    </a>
    <a
      href="#contact"
      onClick={() => setSidebarOpen(false)}
      className="flex items-center gap-3 hover:bg-blue-700 px-4 py-2 rounded transition"
    >
      <Mail size={20} /> Contact Me
    </a>
  </div>
</div>

      {/* Main Page */}
      <div className="ml-0 sm:ml-0"> {/* Optional: margin-left if you want offset when sidebar is open */}
        <PortfolioPage />
      </div>
    </div>
  );
};

export default App;
