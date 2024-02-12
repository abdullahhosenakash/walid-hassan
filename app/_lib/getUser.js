import { USER_COOKIE } from '@/app/_constants';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const getUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(USER_COOKIE);
  if (!token) {
    return {
      user: null,
      error: 'Unauthorized'
    };
  }

  const secret = process.env.JWT_SECRET || '';

  try {
    verify(token.value, secret);

    return {
      user: token.value,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: 'something went wrong'
    };
  }
};

export default getUser;

// const getUser = async () => {
//   try {
//     const response = await import('../api/auth/user/route');
//     const { user, message } = await (await response.GET()).json();

//     if (user) {
//       return {
//         user,
//         error: null
//       };
//     } else if (message) {
//       return {
//         user: null,
//         error: message
//       };
//     }
//   } catch (error) {
//     return {
//       user: null,
//       error: 'not found'
//     };
//   }
// };

// export default getUser;
