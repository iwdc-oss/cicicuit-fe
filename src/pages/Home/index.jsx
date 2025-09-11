import Header from '@/utils/components/Header';
import { clearToken, logout, getMe } from '@/utils/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getMe();
      console.log(response);
      setUser(response);
    }
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      // setError(e.message || 'Gagal Logout');
      console.log(e.message);
    } finally {
      clearToken();
      navigate('/login');
    }
  };

  return <Header username={user?.username} onLogout={handleLogout} />;
};

export default Home;
