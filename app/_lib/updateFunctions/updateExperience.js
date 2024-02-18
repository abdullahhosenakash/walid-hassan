'use server';

import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import { DB } from '@/app/_utils/mongoDB';

export async function updateExperience(prevState, formData) {
  try {
    let updatedData = [];
    for (let i = 1; i <= 3; i++) {
      updatedData = [
        ...updatedData,
        {
          experienceName: formData.get(`experienceName${i}`),
          experienceLink: formData.get(`experienceLink${i}`),
          description: formData.get(`description${i}`)
        }
      ];
    }
    const { experience } = await getMiscellaneousData();
    const previousData = JSON.stringify(experience);
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
      $set: { experience: updatedData }
    };

    const result = await miscellaneousCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Experience updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update experience!'
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
