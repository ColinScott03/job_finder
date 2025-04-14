'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Intel',
    description: 'Build and maintain user interfaces.',
    salary: '$80,000 - $100,000',
    location: 'Remote',
    image: '/intel.png',
    link: '/jobs/frontend-developer',
  },
  {
    title: 'Backend Engineer',
    company: 'TechNova',
    description: 'Develop server-side logic.',
    salary: '$90,000 - $110,000',
    location: 'New York, NY',
    image: '/TechNova.png',
    link: '/jobs/backend-engineer',
  },
  {
    title: 'Fullstack Developer',
    company: 'Amazon',
    description: 'Build and maintain both the front-end and the back-end of a website.',
    salary: '$90,000 - $110,000',
    location: 'Seattle, WA',
    image: '/amazon.png',
    link: '/jobs/backend-engineer',
  },
  {
    title: 'Cloud Security Engineer',
    company: 'Bank of America',
    description: 'Responsible for cyber security innovation and architecture.',
    salary: '$90,000 - $110,000',
    location: 'Chicago, IL',
    image: '/BofA.png',
    link: '/jobs/backend-engineer',
  },
  {
    title: 'Data Analyst',
    company: 'Deloitte',
    description: 'Analyze government sector data',
    salary: '$90,000 - $100,000',
    location: 'New York, NY',
    image: '/deloitte.png',
    link: '/jobs/backend-engineer',
  },
];

export default function AuthPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
  };

  const job = jobs[currentIndex];

  return (
    <div className="app-container">
      <div className="card-wrapper"></div>
      <Card job={job} onNext={handleNext} onPrev={handlePrev} />
      <footer className="footer">Copyright MARC</footer>

      <style jsx>{`
        .app-container {
          background-color: #D64545;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .footer {
          background-color: #20262B;
          width: 100%;
          text-align: center;
          padding: 10px;
          color: white;
        }
      `}</style>
    </div>
  );
}
