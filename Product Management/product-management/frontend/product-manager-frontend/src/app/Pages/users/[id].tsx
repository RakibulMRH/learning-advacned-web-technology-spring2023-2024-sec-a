import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { usersService } from '../../services/users.service';
import { User } from '../../types/user.types';

const UserDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await usersService.getUserById(id as string);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add other user details */}
    </div>
  );
};

export default UserDetailPage;