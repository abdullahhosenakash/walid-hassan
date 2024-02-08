import collection from '@/app/_utils/mongoDB';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req, res) {
  const { userCollection } = collection;
  const { userEmail, userPassword: up } = await req.json();
  const user = await userCollection.findOne({ userEmail, userPassword: up });

  if (!user) {
    return NextResponse.json({ message: 'User not found' });
  }
  const { userPassword, ...userInfo } = user || {};
  return NextResponse.json(userInfo);
}
