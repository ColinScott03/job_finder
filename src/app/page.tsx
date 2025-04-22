'use client';

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import connectMongoDB from "../../config/mongodb";
import Image from 'next/image';
import fetchJobs from '@/app/utils/fetchJobs';
import Card from '@/components/Card';

export default function Home() {

  const [jobs, setJobs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function loadJobs() {
      try {
        const fetched = await fetchJobs();
        setJobs(fetched);  // update the state when data is ready
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    loadJobs();
  }, []);

  return (

    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/sanfordStadiumPicture.jpg')" }}>

      <div className="mt-6 flex items-center">
        <Image src="/smallLogoWhite.png" alt="Tender Logo" width={400} height={400} />
      </div>


      <div className="flex flex-col justify-center bg-neutral-200 bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-xl h-[400px] transform ">


        <div className="mb-50 flex flex-col justify-between items-center min-h-[0px]">

          <h1 className="text-3xl font-bold mb-4 text-center">Finding jobs has never been more simple!</h1>

          <p className="text-center">Based on your personalized interests, you can swipe right on jobs you’re interested in or left on jobs you don’t like so much.</p>

          <div className="mt-20 flex gap-4">
            <button
              onClick={() => router.push('/accountCreation')}
              className="bg-neutral-700 text-white text-2xl font-semibold px-10 py-4 rounded-xl hover:bg-neutral-500 transition cursor-pointer">
              Get started!
            </button>
            <button
              onClick={() => router.push('/login')}
              className="bg-white text-neutral-700 border border-neutral-500 text-2xl font-semibold px-10 py-4 rounded-xl hover:bg-neutral-100 transition cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
      {jobs.length >= 4 ? (
        <>
          <Card
           job={{
              title: jobs[0].title,
              company: jobs[0].company.display_name,
              description: jobs[0].description,
              salary_min: `$${jobs[0].salary_min}`,
              salary_max: `$${jobs[0].salary_max}`,
              location: jobs[0].location.display_name,
              image: jobs[0].company?.logo_url || '/defaultJobImage.png',
              link: jobs[0].redirect_url
            }}
            onPrev={() => {}}
            onNext={() => {}}
            showNavigation={false}
          />
          <Card
            job={{
              title: jobs[1].title,
              company: jobs[1].company.display_name,
              description: jobs[1].description,
              salary_min: `$${jobs[1].salary_min}`,
              salary_max: `$${jobs[1].salary_max}`,
              location: jobs[1].location.display_name,
              image: jobs[1].company?.logo_url || '/defaultJobImage.png',
              link: jobs[1].redirect_url
            }}
            onPrev={() => {}}
            onNext={() => {}}
            showNavigation={false}
          />
          <Card
            job={{
              title: jobs[2].title,
              company: jobs[2].company.display_name,
              description: jobs[2].description,
              salary_min: `$${jobs[2].salary_min}`,
              salary_max: `$${jobs[2].salary_max}`,
              location: jobs[2].location.display_name,
              image: jobs[2].company?.logo_url || '/defaultJobImage.png',
              link: jobs[2].redirect_url
            }}
            onPrev={() => {}}
            onNext={() => {}}
            showNavigation={false}
          />
          <Card
            job={{
              title: jobs[3].title,
              company: jobs[3].company.display_name,
              description: jobs[3].description,
              salary_min: `$${jobs[3].salary_min}`,
              salary_max: `$${jobs[3].salary_max}`,
              location: jobs[3].location.display_name,
              image: jobs[3].company?.logo_url || '/defaultJobImage.png',
              link: jobs[3].redirect_url
            }}
            onPrev={() => {}}
            onNext={() => {}}
            showNavigation={false}
          />
        </>
      ) : (
        <p className="text-white text-5xl">Loading jobs...</p>
      )}
      </div>
    </div>
  );
}