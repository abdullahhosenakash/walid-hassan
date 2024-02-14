// import collection from '@/app/_utils/mongoDB';
// import { USER_COOKIE, USER_COOKIE_MAX_AGE } from '@/app/_constants';
// import { sign } from 'jsonwebtoken';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   const cookieStore = cookies();
//   const { userCollection } = collection;
//   const { userEmail, userPassword: userPass } = await request.json();
//   const user = await userCollection.findOne({
//     userEmail,
//     userPassword: userPass
//   });

//   if (!user) {
//     return NextResponse.json(
//       { message: 'Unauthorized Access' },
//       { status: 401 }
//     );
//   }

//   const secret = process.env.JWT_SECRET || '';
//   const token = sign(
//     {
//       userEmail
//     },
//     secret,
//     { expiresIn: USER_COOKIE_MAX_AGE }
//   );

//   cookieStore.set(USER_COOKIE, token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: USER_COOKIE_MAX_AGE,
//     path: '/'
//   });

//   const response = { message: 'Authenticated successfully!' };
//   return NextResponse.json(response, {
//     status: 200
//   });
// }
