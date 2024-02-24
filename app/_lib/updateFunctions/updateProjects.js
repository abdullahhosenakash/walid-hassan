'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function updateProjects(prevState, formData) {
  try {
    let keys = [];
    for (const key of formData.keys()) {
      keys = [...keys, key];
    }
    const projectTypes = keys?.filter(
      (key) => key.startsWith('projectType') && key
    );

    let projects = [];
    for (let i = 1; i <= projectTypes?.length; i++) {
      const projectNames = keys?.filter(
        (key) => key.startsWith('projectName' + i) && key
      );
      const role = keys?.filter((key) => key.startsWith('role' + i) && key);
      const technology = keys?.filter(
        (key) => key.startsWith('technology' + i) && key
      );
      const description = keys?.filter(
        (key) => key.startsWith('description' + i) && key
      );
      const link = keys?.filter((key) => key.startsWith('link' + i) && key);
      const imageLink = keys?.filter(
        (key) => key.startsWith('imageLink' + i) && key
      );
      const allFeatures = keys?.filter(
        (key) => key.startsWith('features' + i) && key
      );

      let features = [];
      for (let j = 1; j <= allFeatures?.length; j++) {
        const singleFeatures = keys?.filter(
          (key) => key.startsWith('features' + i + j) && key
        );
        features = [...features, singleFeatures];
      }

      const updatedProjects = projectNames?.map((projectName, index) => {
        const project = {
          projectName: formData.get(projectName),
          role: formData.get(role[index]),
          technology: formData.get(technology[index]),
          description: formData.get(description[index]),
          features: formData.get(features[index]),
          link: formData.get(link[index]),
          imageLink: formData.get(imageLink[index])
        };
        return project;
      });

      const projectSet = {
        projectType: formData.get(projectTypes[i - 1]),
        projects: updatedProjects
      };
      projects = [...projects, projectSet];
    }

    const response = await fetch(
      'https://walid-hassan.vercel.app/api/projects'
    );
    const storedProjects = await response.json();

    if (!storedProjects) {
      throw new Error('Failed to get projects data');
    }

    const previousData = JSON.stringify(storedProjects);
    const currentData = JSON.stringify(projects);

    if (currentData === previousData) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }

    const { projectCollection } = await DB();
    const filter = {};
    const updatedDoc = {
      $set: {
        updateTime: new Date().toDateString(),
        projectsDeveloped: projects
      }
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
    console.log(error);
    return JSON.parse(
      JSON.stringify({
        errorType: 'server',
        status: 'failed',
        message: 'Something went wrong!'
      })
    );
  }
}
