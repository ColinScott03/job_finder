"use client";

import { useEffect, useState } from "react";
import GalleryCard from "../../components/GalleryCard";
import { useUser } from '../context/userContext';
import fetchJobs from "../utils/fetchJobs";

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  salary: string;
  location: string;
  image: string;
  link: string;
}

const Gallery = () => {
  const { id } = useUser();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch(`/api/user-jobs?id=${id}`);
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    }

    fetchJobs();
  }, [id]);

  const handleRemove = (jobId: string) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-center mb-6 relative">
        <h1 className="text-5xl font-bold">My Jobs</h1>
        <div className="absolute right-5">
          <select className="bg-gray-300 p-2 border rounded cursor-pointer">
            <option value="" disabled selected>Sort by:</option>
            <option value="rating">Rating</option>
            <option value="location">Location</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div>  
      <div className="grid grid-cols-3">
        {jobs.map((job) => (
          <GalleryCard
            key={job.id}
            id={job.id}
            title={job.title}
            image={job.image}
            company={job.company}
            description={job.description}
            salary={job.salary}
            location={job.location}
            link={job.link}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;