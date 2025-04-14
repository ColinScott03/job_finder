"use client";

import GalleryCard from "../../components/GalleryCard";
const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Intel',
      description: 'Build and maintain user interfaces.',
      salary: '$80,000 - $100,000',
      location: 'Remote',
      image: './intel.png',
      link: '/jobs/frontend-developer',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'TechNova',
      description: 'Develop server-side logic.',
      salary: '$90,000 - $110,000',
      location: 'New York, NY',
      image: '/TechNova.png',
      link: '/jobs/backend-engineer',
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Amazon',
      description: 'Build and maintain both the front-end and the back-end of a website.',
      salary: '$90,000 - $110,000',
      location: 'Seattle, WA',
      image: '/amazon.png',
      link: '/jobs/backend-engineer',
    },
    {
      id: 4,
      title: 'Cloud Security Engineer',
      company: 'Bank of America',
      description: 'Responsible for cyber security innovation and architecture.',
      salary: '$90,000 - $110,000',
      location: 'Chicago, IL',
      image: '/BofA.png',
      link: '/jobs/backend-engineer',
    },
    {
      id: 5,
      title: 'Data Analyst',
      company: 'Deloitte',
      description: 'Analyze government sector data',
      salary: '$90,000 - $100,000',
      location: 'New York, NY',
      image: '/deloitte.png',
      link: '/jobs/backend-engineer',
    },
  ];

const Gallery = () => {
    return (
        <div className="p-6 min-h-screen">
            <div className="flex justify-center mb-6 relative">
                <h1 className="text-5xl font-bold">My Jobs</h1>
                <div className="absolute right-5">
                    <select className="bg-gray-300 p-2 border rounded">
                        <option value="" disabled selected>Sort by:</option>
                        <option value="rating">Rating</option>
                        <option value="location">Location</option>
                        <option value="salary">Salary</option>
                    </select>
                </div>
            </div>  
            <div className="grid grid-cols-3">
            {jobs.map((job) => (
          <GalleryCard key={job.id} title={job.title} image={job.image} company={job.company} description={job.description} salary={job.salary} location={job.location} link={job.link}/>
        ))}
            </div>
        </div>
    )
}
export default Gallery;