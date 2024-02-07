import { redirect } from 'next/navigation';

const login = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    redirect('/dashboard');
  }
  return <section>Login</section>;
};

export default login;
