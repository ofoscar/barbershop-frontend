import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data.success === true) {
          // Save token to localStorage
          localStorage.setItem('token', data.token);
          // Navigate to dashboard
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form
        className='flex flex-col gap-4 w-full max-w-md'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <input
          value={values.email}
          placeholder='Email'
          name='email'
          onChange={handleChange}
          className='border border-gray-300 rounded-md p-2'
        />
        <input
          value={values.password}
          placeholder='Password'
          type='password'
          name='password'
          onChange={handleChange}
          className='border border-gray-300 rounded-md p-2'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
