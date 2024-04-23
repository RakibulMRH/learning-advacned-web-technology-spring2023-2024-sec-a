import EmployerForm from '../components/EmployerForm';

const UpdatePage = () => {
  const handleUpdate = (employer: Employer) => {
    // Make API call to update the employer
    console.log('Updating employer:', employer);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update Employer</h1>
      <EmployerForm onSubmit={handleUpdate} />
    </div>
  );
};

export default UpdatePage;