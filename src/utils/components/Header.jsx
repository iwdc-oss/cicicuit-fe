const Header = ({ username, onLogout }) => {
  return (
    <div className='mx-auto px-8 py-2 flex items-center justify-between'>
      <div className='text-lg font-semibold'>
        <img src="/LogoCicicuit.png" alt="Logo Cicicuit" className="h-20" />
      </div>
      <div className="flex gap-4 items-center">
        {username && <span className='text-sm text-slate-600'>{username}</span>}
        <button
          onClick={onLogout}
          className='text-sm bg-slate-900 text-white px-3 py-2 rounded'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;