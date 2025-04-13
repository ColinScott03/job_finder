import React from 'react';
import './Card.css';

type Job = {
    title: string;
    company: string;
    description: string;
    salary: string;
    location: string;
    image?: string;
    link: string;
};

type Props = {
    job: Job;
    onPrev: () => void;
    onNext: () => void;
};

const Card: React.FC<Props> = ({ job, onPrev, onNext }) => {
    return (
      <div className="job-card">
        <div className="arrow left" onClick={onPrev}>&lt;</div>
        <div className="job-content">
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
          {job.image && <img src={job.image} alt={job.title} className="job-image" />}
          <a href={job.link} className="view-button">View Job Posting</a>
        </div>
        <div className="arrow right" onClick={onNext}>&gt;</div>
      </div>
    );
  };

  export default Card;