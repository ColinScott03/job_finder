'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Tech Corp',
    description: 'Build and maintain user interfaces.',
    salary: '$80,000 - $100,000',
    location: 'Remote',
    image: '/job1.png',
    link: '/jobs/frontend-developer',
  },
  {
    title: 'Backend Engineer',
    company: 'Data Systems',
    description: 'Develop server-side logic.',
    salary: '$90,000 - $110,000',
    location: 'New York, NY',
    image: '/job2.png',
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
      <Navbar />
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
