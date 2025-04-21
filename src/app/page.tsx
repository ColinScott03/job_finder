'use client';

import { useRouter } from "next/navigation";
import connectMongoDB from "../../config/mongodb";
import Image from 'next/image';


export default function Home() {

  connectMongoDB();

  const router = useRouter();

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
    </div>
  );
}