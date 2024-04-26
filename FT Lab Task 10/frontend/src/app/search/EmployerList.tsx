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
  <div className="form-container">
  <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
    <h2 className="text-2xl font-bold text-center mb-5">Employer List</h2>
    <div className="mb-4">
      <label htmlFor="search" className="block text-gray-700">Search Employers</label>
      <div className="mt-2 flex">
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name, company, contact, or username"
          className="p-2 w-full border rounded-l-md"
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6">
      {filteredEmployers.map((employer) => (
        <div
          key={employer.id}
          className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-bold mb-2">{employer.name}</h3>
            <p className="text-gray-600">{employer.companyName}</p>
            <p className="text-gray-600">{employer.contactNo}</p>
            <p className="text-gray-600">{employer.userName}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div></div>
);
};

export default EmployerList;