import { authService } from '../services/auth.service';

const HomePage: React.FC = () => {
  const isAuthenticated = authService.isAuthenticated();

  return (
    <div>
      <h1>Welcome to the Product Management App</h1>
      {isAuthenticated ? (
        <p>You are logged in.</p>
      ) : (
        <p>Please login to continue.</p>
      )}
    </div>
  );
};

export default HomePage;