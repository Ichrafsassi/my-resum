import React from 'react';
import Contact from './components/contact';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-10">
        <header className="text-center border-b pb-8 mb-10">
          <h1 className="text-5xl font-bold text-indigo-700 tracking-wide">Ichraf Sassi</h1>
          <p className="text-xl text-indigo-500 mt-2">Software Engineer</p>
          <p className="text-md text-gray-500 mt-4 italic">Innovating with MERN Stack | Building scalable solutions</p>
        </header>
        <Contact />
        <Education />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
