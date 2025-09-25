const Header = ({ username, onLogout }) => {
  return (
    <div className='max-w-3xl mx-auto px-4 py-2 flex items-center justify-between'>
      <div className='text-lg font-semibold'>ciciuit</div>
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