'use server';
import { DB } from '@/app/_utils/mongoDB';

export async function updateAbout(prevState, formData) {
  try {
    const updatedData = {
      firstPara: formData.get('firstPara'),
      secondPara: formData.get('secondPara'),
      thirdPara: formData.get('thirdPara')
    };

    const response = await fetch(
      'https://walid-hassan.vercel.app/api/miscellaneous-data'
    );
    const { aboutMe } = await response.json();

    if (!aboutMe) {
      throw new Error('Failed to get about me data');
    }

    const previousData = JSON.stringify(aboutMe);
    const currentData = JSON.stringify(updatedData);
    if (previousData === currentData) {
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
      $set: { aboutMe: updatedData }
    };

    const result = await miscellaneousCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'About Me page updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update about me page!'
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
