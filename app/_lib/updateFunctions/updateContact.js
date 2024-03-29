'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function updateContact(prevState, formData) {
  try {
    const updatedData = {
      email: formData.get('email'),
      phone: formData.get('phone'),
      whatsApp: formData.get('whatsApp'),
      address: formData.get('address')
    };

    const response = await fetch(
      'https://walid-hassan.vercel.app/api/miscellaneous-data'
    );
    const { contact } = await response.json();

    if (!contact) {
      throw new Error('Failed to get contact data');
    }

    const previousData = JSON.stringify(contact);
    const currentData = JSON.stringify(updatedData);

    if (currentData === previousData) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }

    const { miscellaneousCollection } = await DB();
    const filter = {};
    const updatedDoc = {
      $set: { contact: updatedData }
    };

    const result = await miscellaneousCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/contact');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Contact updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update contact!'
        })
      );
    }
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        errorType: 'server',
        status: 'failed',
        message: 'Something went wrong!'
      })
    );
  }
}
