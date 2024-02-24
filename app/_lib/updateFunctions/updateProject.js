'use server';

import { DB } from '@/app/_utils/mongoDB';
import { ObjectId } from 'mongodb';
import { revalidatePath } from 'next/cache';

export async function updateProject(prevState, formData) {
  try {
    const projectType = formData.get('projectType');
    const projectId = formData.get('projectId');

    let keys = [];
    for (const key of formData.keys()) {
      keys = [...keys, key];
    }

    const featureKeys = keys?.filter((key) => key.startsWith('feature') && key);

    const features = featureKeys?.map((featureKey) => formData.get(featureKey));

    const updatedProject = {
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
    const storedProject = await projectCollection.findOne(filter);

    if (!storedProject) {
      throw new Error('Failed to get project data');
    }

    const selectedProject = storedProject?.projects?.find(
      (project) => project.projectId === projectId
    );

    const selectedProjectIndex =
      storedProject?.projects?.indexOf(selectedProject);

    const previousProjects = storedProject?.projects?.slice(
      0,
      selectedProjectIndex
    );
    const nextProjects = storedProject?.projects?.slice(
      selectedProjectIndex + 1
    );
    const updatedProjects = [
      ...previousProjects,
      updatedProject,
      ...nextProjects
    ];
    const updatedProjectSet = { projectType, projects: updatedProjects };

    const { _id, ...storedProjectWithoutId } = storedProject;
    const previousData = JSON.stringify(storedProjectWithoutId);
    const currentData = JSON.stringify(updatedProjectSet);

    if (currentData === previousData) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }

    const updatedDoc = {
      $set: updatedProjectSet
    };

    const result = await projectCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/projects');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Projects updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update projects!'
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

export async function updateProjectType(prevState, formData) {
  try {
    const _id = formData.get('_id');
    const projectType = formData.get('projectType');

    const objectId = { _id: new ObjectId(_id) };
    const { projectCollection } = await DB();
    const selectedProjectSet = await projectCollection.findOne(objectId);

    if (selectedProjectSet.projectType === projectType) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }

    selectedProjectSet.projectType = projectType;

    const updatedDoc = {
      $set: selectedProjectSet
    };
    const result = await projectCollection.updateOne(objectId, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/projects');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Projects updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update projects!'
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
