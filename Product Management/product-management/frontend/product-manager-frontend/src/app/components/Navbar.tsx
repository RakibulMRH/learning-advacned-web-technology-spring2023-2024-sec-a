import Link from 'next/link';
import { useRouter } from 'next/router';
import { authService } from '../services/auth.service';

const Navbar: React.FC = () => {
  const router = useRouter();
  const isAuthenticated = authService.isAuthenticated();

  const handleLogout = async () => {
    await authService.logout();
    router.push('/auth/login');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;