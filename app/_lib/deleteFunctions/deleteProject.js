'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function deleteProject(prevState, formData) {
  try {
    const projectType = formData.get('projectType');
    const projectId = formData.get('projectId');

    const { projectCollection } = await DB();
    const filter = { projectType };
    const selectedProjectSet = await projectCollection.findOne(filter);

    let result;

    if (projectId) {
      const restProjects = selectedProjectSet?.projects?.filter(
        (project) => project.projectId !== projectId
      );
      if (restProjects.length) {
        const updatedData = {
          $set: {
            projectType,
            projects: restProjects
          }
        };
        result = await projectCollection.updateOne(filter, updatedData);
      } else {
        result = await projectCollection.deleteOne(filter);
      }
    } else {
      result = await projectCollection.deleteOne(filter);
    }

    if (result.acknowledged) {
      revalidatePath('/projects');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Project(s) deleted successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to delete project(s)!'
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
