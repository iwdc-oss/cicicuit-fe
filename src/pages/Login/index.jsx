import images from '@/utils/images.js';

const LoginPage = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-52 mx-auto flex-col max-w-[480px] gap-14'>
        <img
          src={images.LOGO.LOGO_CICICUIT}
          alt='logo brand'
          className='max-w-96'
        />
        <div className='flex self-start w-full'>
          <form action='' method='post' className='flex flex-col gap-4 w-full'>
            <div className='text-sm w-full'>
              <input
                type='text'
                placeholder='Username'
                className='border-1 border-slate-400 p-3 rounded-md w-full'
              />
            </div>
            <div className='text-sm w-full'>
              <input
                type='password'
                placeholder='Password'
                className='border-1 border-slate-400 p-3 rounded-md w-full'
              />
            </div>
            <button
              type='submit'
              className='bg-black text-white py-3 rounded-md disabled:opacity-60'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
