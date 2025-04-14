import styles from './GalleryCard.module.css'
type GalleryCardProps = {
    title: string;
    image: string;
    company: string;
    description: string;
    salary: string;
    location: string;
}

const GalleryCard = ({ title, image, company, description, salary, location }: GalleryCardProps) => {

    return (
        <div className={styles.galleryCard}>
            <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{title}</h2>
            <p>{company}</p>
            <p>{description}</p>
            <p>{salary}</p>
            <p>{location}</p>
        </div>
    )
}
export default GalleryCard;