'use client';

import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function LoginPage() {

  let isLoggedIn = false;
  const router = useRouter();

  return (
    <div className="min-h-screen bg-red-400 flex flex-col items-center pt-10">
      <h1 className="text-4xl font-bold text-black mb-8">Account Creation</h1>

      <div className="bg-gray-300 border-2 border-slate-800 rounded-lg p-8 w-[90%] max-w-md">
        <form className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            router.push('/settings');
            isLoggedIn = true;
          }}
        >

          <div>
            <label className="block text-lg font-medium mb-1">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full p-2 border shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Retype Password:</label>
            <input
              type="password"
              placeholder="Retype Password"
              className="w-full p-2 border shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
            />
          </div>

          <button
            onClick={() => router.push('/auth')}
            type="submit"
            className="bg-gray-400 text-xl font-semibold py-2 rounded shadow hover:bg-gray-500 transition"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center">
          <Image src="/smallLogo.png" alt="Tender Logo" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
