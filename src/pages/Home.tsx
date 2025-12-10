import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Barbershop</h1>
        <p className='text-lg mb-8'>
          Your one-stop solution for barbershop management
        </p>
        <div className='flex gap-4 justify-center'>
          <Link
            to='/login'
            className='bg-blue-500 text-white rounded-md px-6 py-3 hover:bg-blue-600 transition'
          >
            Login
          </Link>
          <Link
            to='/dashboard'
            className='bg-gray-500 text-white rounded-md px-6 py-3 hover:bg-gray-600 transition'
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
