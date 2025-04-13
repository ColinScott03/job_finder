import styles from './GalleryCard.module.css'
type GalleryCardProps = {
    title: string;
    image: string;
}

const GalleryCard = ({ title, image }: GalleryCardProps) => {

    return (
        <div className={styles.galleryCard}>
            <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{title}</h2>
        </div>
    )
}
export default GalleryCard;