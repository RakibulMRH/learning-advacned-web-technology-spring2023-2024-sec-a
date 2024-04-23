import { useState } from 'react';

interface EmployerFormProps {
  onSubmit: (employer: Employer) => void;
}

interface Employer {
  employerName: string;
  companyName: string;
  contactNo: string;
  username: string;
  password: string;
}

const EmployerForm = ({ onSubmit }: EmployerFormProps) => {
  const [employerName, setEmployerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ employerName, companyName, contactNo, username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="employerName" className="block">Employer Name</label>
        <input
          type="text"
          id="employerName"
          value={employerName}
          onChange={(e) => setEmployerName(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
      {/* Add similar input fields for companyName, contactNo, username, and password */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default EmployerForm;