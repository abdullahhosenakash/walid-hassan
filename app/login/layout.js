import { getUser } from '@/app/_lib/getUser';
import { redirect } from 'next/navigation';

const LoginLayout = async ({ children }) => {
  const { user } = await getUser();
  if (user) {
    redirect('/dashboard');
  }
  return <section>{children}</section>;
};

export default LoginLayout;
