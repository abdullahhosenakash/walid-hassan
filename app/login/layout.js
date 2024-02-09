import { redirect } from 'next/navigation';
import getUser from '@/app/_lib/getUser';

const LoginLayout = async ({ children }) => {
  const { user } = await getUser();
  if (user) {
    redirect('/dashboard');
  }

  return <section>{children}</section>;
};

export default LoginLayout;
