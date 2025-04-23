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
  const { id: userId } = useUser();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/user-jobs?id=${userId}`);
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(userId) fetchJobs();
  }, [userId]);

  const handleRemoveJob = async (jobId: string, jobData: any) => {
    try {
      // First update UI optimistically
      setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
      
      // Then make the API call
      const res = await fetch('/api/removeJob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, job: jobData })
      });

      if (!res.ok) {
        throw new Error("Failed to remove job");
        // If there's an error, we could re-fetch to restore the correct state
        // fetchJobs();
      }
    } catch (err) {
      console.error(err);
      // Re-fetch to ensure UI is in sync with database
      fetchJobs();
    }
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
      {isLoading ? (
        <div className="text-center">Loading jobs...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {jobs.length > 0 ? (
            jobs.map((job) => (
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
                onRemove={() => handleRemoveJob(job.id, {
                  title: job.title,
                  company: job.company,
                  description: job.description, 
                  salary: job.salary,
                  location: job.location,
                  image: job.image,
                  link: job.link
                })}
              />
            ))
          ) : (
            <div className="col-span-3 text-center text-xl mt-10">
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;