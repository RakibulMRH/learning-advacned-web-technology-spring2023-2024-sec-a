const DeletePage = () => {
    const handleDelete = (employerId: string) => {
      // Make API call to delete the employer
      console.log('Deleting employer with ID:', employerId);
    };
  
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Delete Employer</h1>
        {/* Add a list or table of employers with delete buttons */}
        <button
          onClick={() => handleDelete('employer-id')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default DeletePage;