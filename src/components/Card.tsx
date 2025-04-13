'use client';
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
    <div className="card-container">
  <button className="nav-button left" onClick={onPrev}>{'<'}</button>
  <h2>{job.title}</h2>
  <h3>{job.company}</h3>
  <img src={job.image} alt={`${job.title} image`} />
  <div className="card-info">
    <p>{job.description}</p>
    <p>{job.salary}</p>
    <p>{job.location}</p>
  </div>
  <a href={job.link}>
    <button className="view-button">View Job Posting</button>
  </a>
  <button className="nav-button right" onClick={onNext}>{'>'}</button>
</div>
  );
};

export default Card;