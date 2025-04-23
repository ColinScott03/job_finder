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
  id: jobId,
  title,
  image,
  company,
  description,
  salary,
  location,
  link,
  onRemove,
}: GalleryCardProps) => {
  const { id: userId } = useUser();

  const handleRemove = async () => {
    const job = { title, company, description, salary, location, image, link };

    try {
      const res = await fetch('/api/removeJob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, job })
      });

      if (!res.ok) throw new Error("Failed to remove job");
      onRemove(jobId);
      
    } catch (err) {
      console.error(err);
    }
  };

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
      <button onClick={handleRemove} className={styles.removeButton}>Remove Job</button>
    </div>
  );
};

export default GalleryCard;