import React from 'react';
import EmployerForm from '../components/EmployerForm';
import EmployerList from '../components/EmployerList';


const HomePage: React.FC = () => {
  return (
    <div>
      <EmployerForm />
      <EmployerList />
    </div>
  );
};

export default HomePage;