import styles from './GalleryCard.module.css';
import { useUser } from '../app/context/userContext';
import router from 'next/router';

type GalleryCardProps = {
  id: string;
  title: string;
  image: string;
  company: string;
  description: string;
  salary: string;
  location: string;
  link: string;
  onRemove: (id: string) => void;
};

const GalleryCard = ({
    id,
    title,
    image,
    company,
    description,
    salary,
    location,
    link,
    onRemove
  }: GalleryCardProps) => {
    return (
      <div className={styles.galleryCard}>
        <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p>{company}</p>
        <p>{description}</p>
        <p>${salary}</p>
        <p>{location}</p>
        <a href={link}>
          <button className={styles.viewButton}>View Job Posting</button>
        </a>
        <button onClick={() => onRemove(id)} className={styles.removeButton}>Remove Job</button>
      </div>
    );
  };

export default GalleryCard;