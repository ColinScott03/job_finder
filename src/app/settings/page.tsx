"use client";

import { useRouter } from "next/navigation";
import Content from "../../components/Content";
import { useState, useContext, createContext } from 'react';
import { useUser } from '../context/userContext';


const Settings = () => {
    const { id } = useUser();

    const router = useRouter();

    const initialFormState = {
        owner: 0,
        name: '',
        interests: '',
        location: '',
        industry: '',
        employmentType: '',
        contractType: '',
    };

    const [formData, setFormData] = useState(initialFormState);

    const clearForm = () => {
        setFormData(initialFormState);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const jobTypes: string[] = [];
        if (formData.employmentType === 'fullTime') jobTypes.push("Full-Time");
        if (formData.employmentType === 'partTime') jobTypes.push("Part-Time");
        if (formData.contractType === 'permanent') jobTypes.push("Permanent");
        if (formData.contractType === 'contract') jobTypes.push("Contract");

        const jobTypeString = jobTypes.join(", ");

        try {
            const response = await fetch(`/api/items/${id}`, {
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
        const target = e.target as HTMLInputElement;
        const { name, type, value } = target;
        const checked = target.checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (name === 'owner' ? Number(value) : value),
        }));
    }

    return (
        <Content>
            <div className="flex flex-col items-center m-20 w-[40vw] h-210 bg-[#20262B] border-10">
                <h2 className="m-5 text-3xl text-neutral-300 block">Account Details</h2>
                <form className="space-y-4 w-[25vw] text-neutral-300 justify-end"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                        router.push('/auth');
                    }}
                >
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
                    <h3 className="text-xl">Desired Position(s)</h3>
                    <input
                        name="interests"
                        type="string"
                        value={formData.interests}
                        onChange={handleChange}
                        placeholder="E.g. Developer, Nurse, Manager"
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
                        <option value='it-jobs'>I.T.</option>
                        <option value='admin-jobs'>Admin</option>
                        <option value='sales-jobs'>Sales</option>
                        <option value='engineering-jobs'>Engineering</option>
                    </select>

                    <h3 className="text-xl">Employment Type</h3>
                    <div className="flex flex-col w-full p-2 border bg-slate-900 border-gray-300 rounded">
                        <label className="text-2xl">
                            <input type="radio" name="employmentType" value="fullTime" 
                                checked={formData.employmentType === 'fullTime'} onChange={handleChange} className="h-4 w-4 mr-2" />
                            Full-time
                        </label>
                        <label className="text-2xl">
        <                   input type="radio" name="employmentType" value="partTime" 
                                checked={formData.employmentType === 'partTime'} onChange={handleChange} className="h-4 w-4 mr-2" />
                            Part-time
                        </label>
                    </div>

                    <h3 className="text-xl mt-4">Contract Type</h3>
                    <div className="flex flex-col w-full p-2 border bg-slate-900 border-gray-300 rounded">
                        <label className="text-2xl">
                            <input type="radio" name="contractType" value="permanent" 
                                checked={formData.contractType === 'permanent'} onChange={handleChange} className="h-4 w-4 mr-2" />
                            Permanent
                        </label>
                        <label className="text-2xl">
                            <input type="radio" name="contractType" value="contract" 
                                checked={formData.contractType === 'contract'} onChange={handleChange} className="h-4 w-4 mr-2" />
                            Contract
                        </label>
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