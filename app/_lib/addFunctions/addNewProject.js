'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto';

export async function addNewProject(prevState, formData) {
  try {
    const projectType = formData.get('projectType');

    const givenFeatures = formData.get('features');
    const allFeatures = givenFeatures.split('+');
    const features = allFeatures.map((feature) => feature.trim());

    const projectId = crypto.randomBytes(16).toString('hex');

    const newProject = {
      projectId,
      projectName: formData.get('projectName'),
      role: formData.get('role'),
      technology: formData.get('technology'),
      description: formData.get('description'),
      features,
      link: formData.get('link'),
      imageLink: formData.get('imageLink')
    };

    const filter = { projectType };
    const { projectCollection } = await DB();
    const selectedProjectSet = await projectCollection.findOne(filter);

    let projects = [];

    if (selectedProjectSet) {
      projects = [...selectedProjectSet?.projects, newProject];
    } else {
      projects = [newProject];
    }

    const updatedProjectSet = {
      $set: {
        projectType,
        projects
      }
    };

    const options = { upsert: true };

    const result = await projectCollection.updateOne(
      filter,
      updatedProjectSet,
      options
    );

    if (result.acknowledged) {
      revalidatePath('/projects');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Project added successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to add project!'
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
