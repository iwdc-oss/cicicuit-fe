import Header from '@/utils/components/Header';
import TweetCard from '@/utils/components/TweetCard';
import MakeTweetCard from '@/utils/components/MakeTweetCard';
import { clearToken, logout, getMe, getAllTweets } from '@/utils/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getMe();
      console.log(response);
      setUser(response);
    }
    const fetchTweets = async () => {
      const response = await getAllTweets();
      console.log(response);
      setTweets(response);
    }
    fetchUser();
    fetchTweets();
  }, [navigate, setTweets]);

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

  return (
    <div className='h-full min-h-screen w-full'>
      <Header username={user?.username} onLogout={handleLogout} />;
      <MakeTweetCard />
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
};

export default Home;
