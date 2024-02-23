'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function updateResume(prevState, formData) {
  try {
    const updatedData = {
      resumeLink: formData.get('resumeLink'),
      description: formData.get('description'),
      projects: [
        {
          link: formData.get('link1'),
          projectName: formData.get('projectName1'),
          shortDescription: [
            formData.get('shortDescription11'),
            formData.get('shortDescription12')
          ],
          technology: formData.get('technology1')
        },
        {
          link: formData.get('link2'),
          projectName: formData.get('projectName2'),
          shortDescription: [
            formData.get('shortDescription21'),
            formData.get('shortDescription22')
          ],
          technology: formData.get('technology2')
        }
      ]
    };

    const response = await fetch(
      'http://localhost:3000/api/miscellaneous-data'
    );
    const { resume } = await response.json();

    if (!resume) {
      throw new Error('Failed to get resume data');
    }

    const previousData = JSON.stringify(resume);
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
      $set: { resume: updatedData }
    };

    const result = await miscellaneousCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/resume');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Resume updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update resume!'
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
