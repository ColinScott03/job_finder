"use client";

import GalleryCard from "../../components/GalleryCard";

const Gallery = () => {
    return (
        <div className="p-6 min-h-screen">
            <div className="flex justify-center mb-6 relative">
                <h1 className="text-5xl font-bold">My Jobs</h1>
                <div className="absolute right-5">
                    <select className="bg-gray-300 p-2 border rounded">
                        <option disabled selected>Sort by:</option>
                        <option value="rating">Rating</option>
                        <option value="location">Location</option>
                        <option value="salary">Salary</option>
                    </select>
                </div>
            </div>  
            <div className="grid grid-cols-3">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />

            </div>
        </div>
    )
}
export default Gallery;