import EmployerForm from '../components/EmployerForm';

const RegisterPage = () => {
  const handleRegister = (employer: Employer) => {
    // Make API call to register the employer
    console.log('Registering employer:', employer);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register Employer</h1>
      <EmployerForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;