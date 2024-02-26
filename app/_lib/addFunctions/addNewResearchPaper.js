'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto';

export async function addNewResearchPaper(prevState, formData) {
  try {
    const paperType = formData.get('paperType');
    const paperId = crypto.randomBytes(16).toString('hex');

    const newPaper = {
      paperId,
      paperName: formData.get('paperName'),
      authorName: formData.get('authorName'),
      description: formData.get('description'),
      status: formData.get('status'),
      DOI: formData.get('DOI')
    };

    const filter = { paperType };
    const { researchPaperCollection } = await DB();
    const selectedResearchPaperSet = await researchPaperCollection.findOne(
      filter
    );

    let papers = [];

    if (selectedResearchPaperSet) {
      papers = [...selectedResearchPaperSet?.papers, newPaper];
    } else {
      papers = [newPaper];
    }

    const updatedResearchPaperSet = {
      $set: {
        paperType,
        papers
      }
    };

    const options = { upsert: true };

    const result = await researchPaperCollection.updateOne(
      filter,
      updatedResearchPaperSet,
      options
    );

    if (result.acknowledged) {
      revalidatePath('/research-papers');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Research paper added successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to add research paper!'
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
