'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Settings from '@/app/settings/page';
import fetchJobs from '@/app/utils/fetchJobs';
import { useUser } from '../context/userContext';


export default function AuthPage() {

  const { id } = useUser();
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState<string | null>(null);


  useEffect(() => {
    async function loadJobs() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const preferencesRes = await fetch(`/api/items/${id}`);
        console.log(preferencesRes);
        const preferences = await preferencesRes.json();
        const searchQuery: Record<string, string> = {
          keyword: preferences.interests,
          location: preferences.location,
          industry: preferences.industry
        };

        if (preferences.jobType) {
          const jobTypes = preferences.jobType.split(',').map((s: string) => s.trim());
          if (jobTypes.includes('Full-Time')) searchQuery['full_time'] = '&full_time=1';
          if (jobTypes.includes('Part-Time')) searchQuery['part_time'] = '&part_time=1';
          if (jobTypes.includes('Permanent')) searchQuery['permanent'] = '&permanent=1';
          if (jobTypes.includes('Contract')) searchQuery['contract'] = '&contract=1';
        }
        const fetched = await fetchJobs(searchQuery);
        setJobs(fetched);  // update the state when data is ready
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();

    async function fetchName() {
      try {
        const res = await fetch(`/api/user?id=${id}`);
        if (!res.ok) throw new Error("Failed to fetch name");
        const data = await res.json();
        setName(data.name);
      } catch (err) {
        console.error("Error fetching name:", err);
      }
    }
    fetchName();
  }, [id]);


  const handleNext = async () => {
    const job = jobs[currentIndex];
    const currentJob = {
      title: job.title,
      company: job.company.display_name,
      description: job.description,
      salary: job.salary_max,
      location: job.location.display_name,
      image: job.company?.logo_url || '/defaultJobImage.png',
      link: job.redirect_url
    };
    console.log(JSON.stringify({
      userId: id,
      job: currentJob
    }));
    await fetch('/api/saveJob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: id,
        job: currentJob

      })
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 + jobs.length) % jobs.length);
  };

  if (loading) return <p>Loading!</p>;
  if (!jobs.length) return <p>No jobs found with your search criteria. Please edit your settings.</p>;

  const job = jobs[currentIndex];
  const jobData = {
    title: job.title,
    company: job.company.display_name,
    description: job.description,
    salary_min: job.salary_min,
    salary_max: job.salary_max,
    location: job.location.display_name,
    image: job.company?.logo_url || '/defaultJobImage.png',
    link: job.redirect_url
  }

  return (
    <div className="app-container">
      <div className="card-wrapper"></div>
      <h1 className="text-5xl pt-7 pb-7">{name ? `Welcome, ${name}!` : "Welcome!"}</h1>
      <Card job={jobData} onNext={handleNext} onPrev={handlePrev} />
      <footer className="footer">Copyright MARC</footer>

      <style jsx>{`
        .app-container {
          background-color: #D64545;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px
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
