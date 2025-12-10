import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
        <p className='mb-4'>Welcome! You are logged in.</p>
        <button
          onClick={handleLogout}
          className='bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
