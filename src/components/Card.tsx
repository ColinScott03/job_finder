'use client';
import React from 'react';
import './Card.css';

type Job = {
  title: string;
  company: string;
  description: string;
  salary_min: string;
  salary_max: string;
  location: string;
  image?: string;
  link: string;
};

type Props = {
  job: Job;
  onPrev: () => void;
  onNext: () => void;
  showNavigation?: boolean;
};

const Card: React.FC<Props> = ({ job, onPrev, onNext, showNavigation = true }) => {
  return (
    <div className="card-container">
      {showNavigation && (
        <button className="nav-button left" onClick={onPrev}>{'<'}</button>
      )}
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <img src={job.image} alt={`${job.title} image`} />
      <div className="card-info">
        <p>{job.description}</p>
        <p>{job.salary_min} - {job.salary_max}</p>
        <p>{job.location}</p>
      </div>
      <a href={job.link}>
        <button className="view-button">View Job Posting</button>
      </a>
      {showNavigation && (
        <button className="nav-button right" onClick={onNext}>{'>'}</button>
      )}
    </div>
  );
};

export default Card;