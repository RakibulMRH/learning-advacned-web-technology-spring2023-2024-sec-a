'use client';

import React, { useState, useEffect } from 'react';

interface Employer {
  id: number;
  name: string;
  companyName: string;
  contactNo: string;
  userName: string;
}

const EmployerList: React.FC = () => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch employers from the backend API
    fetch('/api/employers')
      .then((res) => res.json())
      .then((data) => setEmployers(data));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployers = employers.filter(
    (employer) =>
      employer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employer.contactNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employer.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-4">
        <label htmlFor="search" className="block text-gray-700 font-bold mb-2">
          Search Employers
        </label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
          placeholder="Search by name, company, contact, or username"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredEmployers.map((employer) => (
          <div
            key={employer.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{employer.name}</h3>
              <p className="text-gray-600">{employer.companyName}</p>
              <p className="text-gray-600">{employer.contactNo}</p>
              <p className="text-gray-600">{employer.userName}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Update
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerList;