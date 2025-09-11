import images from '@/utils/images.js';
import { useState } from 'react';
import { login, setToken } from '@/utils/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Username atau password wajib diisi');
      return;
    }
    try {
      setLoading(true);
      const data = await login({ username, password });
      const token = data?.token;
      if (!token) throw new Error('Token tidak ditemukan!');
      setToken(token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center mt-52 mx-auto flex-col max-w-[480px] gap-14'>
        <img
          src={images.LOGO.LOGO_CICICUIT}
          alt='logo brand'
          className='max-w-96'
        />
        <div className='flex self-start w-full'>
          <form
            onSubmit={handleSubmit}
            method='post'
            className='flex flex-col gap-4 w-full'
          >
            {error && (
              <div className='text-sm text-red-600 bg-red-50 border border-red-200 p-2 rounded'>
                {error}
              </div>
            )}

            <div className='text-sm w-full'>
              <input
                type='text'
                placeholder='Username'
                className='border-1 border-slate-400 p-3 rounded-md w-full'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='text-sm w-full'>
              <input
                type='password'
                placeholder='Password'
                className='border-1 border-slate-400 p-3 rounded-md w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='bg-black text-white py-3 rounded-md disabled:opacity-60'
            >
              {loading ? 'Memproses...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
