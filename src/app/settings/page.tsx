"use client";

import { useRouter } from "next/navigation";
import Content from "../../components/Content";
import { useState } from 'react';

const Settings = () => {

    const router = useRouter();

    const initialFormState = {
        owner: 0,
        name: '',
        interests: '',
        location: '',
        industry: '',
        fullTime: false,
        partTime: false,
        inPerson: false,
        remote: false
    };

    const [formData, setFormData] = useState(initialFormState);

    const clearForm = () => {
        setFormData(initialFormState);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const jobTypes: string[] = [];
        if (formData.fullTime) jobTypes.push("Full-Time");
        if (formData.partTime) jobTypes.push("Part-Time");
        if (formData.inPerson) jobTypes.push("In Person");
        if (formData.remote) jobTypes.push("Remote");

        const jobTypeString = jobTypes.join(", ");

        try {
            const response = await fetch('/api/items/68068967eae6a7d2c14677f5', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    name: formData.name,
                    interests: formData.interests,
                    location: formData.location,
                    industry: formData.industry,
                    jobType: jobTypeString
                }),
            })
      
            if (response.status == 409) {
              const data = await response.json();
              alert('Username is already taken. Please try again.');
              return;
            }
          } catch (error) {
            console.error('Could not create user. Please try again.', error);
          }
        console.log(JSON.stringify(formData));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (name === 'owner' ? Number(value) : value),
        }));
    }

    return (
        <Content>
            <div className="flex flex-col items-center m-20 w-[40vw] h-210 bg-[#20262B] border-10">
                <h2 className="m-5 text-3xl text-neutral-300 block">Account Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4 w-[25vw] text-neutral-300 justify-end">
                    <h3 className="text-xl">Name</h3>
                    <input
                        name="name"
                        type="string"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full p-2 border bg-slate-900 border-gray-300 rounded"
                    />
                    <h3 className="text-xl">Interests</h3>
                    <input
                        name="interests"
                        type="string"
                        value={formData.interests}
                        onChange={handleChange}
                        placeholder="E.g. Gardening, Social, Computers"
                        required
                        className="w-full p-2 border bg-slate-900 border-gray-300 rounded"
                    />
                    <h3 className="text-xl">Location</h3>
                    <input
                        name="location"
                        type="string"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        required
                        className="w-full p-2 border bg-slate-900 border-gray-300 rounded"
                    />

                    <h3 className="text-xl">Industry</h3>
                    <select
                        name="industry"
                        //type="string"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border bg-slate-900 border-gray-300 rounded cursor-pointer"
                    >
                        <option value='' disabled selected>Select</option>
                        <option value='it'>I.T.</option>
                        <option value='research'>Research</option>
                        <option value='sales'>Sales</option>
                        <option value='engineering'>Engineering</option>
                    </select>

                    <h3 className="text-xl">Job Type</h3>
                    <div className="flex flex-col justify-between items-center w-full h-50 p-2 border bg-slate-900 border-gray-300 rounded">
                        <div className="">
                            <input type="checkbox" name="fullTime" checked={formData.fullTime} onChange={handleChange} id="fullTimeBox" className="h-4 w-4" />
                            <label className="text-2xl">Full-time</label>
                        </div>
                        <div>
                            <input type="checkbox" name="partTime" checked={formData.partTime} onChange={handleChange} id="partTimeBox" className="h-4 w-4" />
                            <label className="text-2xl">Part-time</label>
                        </div>
                        <div>
                            <input type="checkbox" name="inPerson" checked={formData.inPerson} onChange={handleChange} id="inPersonBox" className="h-4 w-4" />
                            <label className="text-2xl">In Person</label>
                        </div>
                        <div>
                            <input type="checkbox" name="remote" checked={formData.remote} onChange={handleChange} id="remoteBox" className="h-4 w-4" />
                            <label className="text-2xl">Remote</label>
                        </div>
                    </div>
                    <div className="flex justify-center gap-20">
                        <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-red-800 mt-4 cursor-pointer">Submit</button>
                        <button onClick={clearForm} className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-red-800 mt-4 cursor-pointer">Clear</button>
                    </div>
                </form>
            </div>
        </Content>
    )
};
export default Settings;