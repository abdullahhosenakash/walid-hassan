import { getUser } from '@/app/_lib/getFunctions/getUser';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Login - Walid Hassan',
  description: "This is Walid Hassan's login page of the portfolio website"
};

const LoginLayout = async ({ children }) => {
  const { user } = await getUser();
  if (user) {
    redirect('/dashboard');
  }
  return <section>{children}</section>;
};

export default LoginLayout;
