'use server';

import { DB } from '@/app/_utils/mongoDB';
import { ObjectId } from 'mongodb';
import { revalidatePath } from 'next/cache';

export async function updateResearchPaper(prevState, formData) {
  try {
    const paperType = formData.get('paperType');
    const status = formData.get('status');
    let DOI = '';

    if (status === 'Published') {
      DOI = formData.get('DOI');
    }

    const updatedResearchPaper = {
      paperId: formData.get('paperId'),
      paperName: formData.get('paperName'),
      authorName: formData.get('authorName'),
      description: formData.get('description'),
      status,
      DOI
    };

    const filter = { paperType };
    const { researchPaperCollection } = await DB();
    const storedResearchPaperSet = await researchPaperCollection.findOne(
      filter
    );

    if (!storedResearchPaperSet) {
      throw new Error('Failed to get research paper data');
    }

    const selectedResearchPaper = storedResearchPaperSet?.papers?.find(
      (paper) => paper.paperId === updatedResearchPaper.paperId
    );
    const selectedResearchPaperIndex = storedResearchPaperSet?.papers?.indexOf(
      selectedResearchPaper
    );

    const previousPapers = storedResearchPaperSet?.papers?.slice(
      0,
      selectedResearchPaperIndex
    );
    const nextPapers = storedResearchPaperSet?.papers?.slice(
      selectedResearchPaperIndex + 1
    );

    const updatedPapers = [
      ...previousPapers,
      updatedResearchPaper,
      ...nextPapers
    ];

    const updatedResearchPaperSet = { paperType, papers: updatedPapers };

    const { _id, ...storedResearchPaperSetWithoutId } = storedResearchPaperSet;
    const previousData = JSON.stringify(storedResearchPaperSetWithoutId.papers);
    const currentData = JSON.stringify(updatedPapers);

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
      $set: updatedResearchPaperSet
    };

    const result = await researchPaperCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/research-papers');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Research papers updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update research papers!'
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

export async function updateResearchPaperType(prevState, formData) {
  try {
    console.log(formData);
    return;
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
