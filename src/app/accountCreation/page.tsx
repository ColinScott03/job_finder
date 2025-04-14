'use client';

import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState } from "react";

export default function accountCreation() {

  let isLoggedIn = false;
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (username == '' || password == '') {
      alert("Please enter username and password");
      return;
    }

    isLoggedIn = true;
    // normally, we would store the user information in the database, but we have not had to set up database yet
    setUsername('');
    setPassword('');
    router.push('/settings');
  };


  return (
    <div className="min-h-screen bg-red-400 flex flex-col items-center pt-10">
      <h1 className="text-4xl font-bold text-black mb-8">Account Creation</h1>

      <div className="bg-gray-300 border-2 border-slate-800 rounded-lg p-8 w-[90%] max-w-md">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

          <div>
            <label className="block text-lg font-medium mb-1">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full p-2 border shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Retype Password:</label>
            <input
              type="password"
              placeholder="Retype Password"
              className="w-full p-2 border shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-gray-400 text-xl font-semibold py-2 rounded shadow hover:bg-gray-500 transition cursor-pointer"
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
