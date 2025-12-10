import { Link, useNavigate } from 'react-router-dom';

const AppBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <header className='bg-gray-800 text-white shadow-md'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link
          to='/'
          className='text-2xl font-bold hover:text-gray-300 transition'
        >
          Barbershop
        </Link>

        <div className='flex items-center gap-6'>
          <Link to='/' className='hover:text-gray-300 transition'>
            Home
          </Link>

          {isAuthenticated ? (
            <>
              <Link to='/dashboard' className='hover:text-gray-300 transition'>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition'
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition'
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
