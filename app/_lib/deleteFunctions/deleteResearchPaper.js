'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function deleteResearchPaper(prevState, formData) {
  try {
    const paperType = formData.get('paperType');
    const paperId = formData.get('paperId');

    const { researchPaperCollection } = await DB();
    const filter = { paperType };
    const selectedResearchPaperSet = await researchPaperCollection.findOne(
      filter
    );

    let result;

    if (paperId) {
      const restPapers = selectedResearchPaperSet?.papers?.filter(
        (paper) => paper.paperId !== paperId
      );
      if (restPapers.length) {
        const updatedData = {
          $set: {
            paperType: paperType,
            papers: restPapers
          }
        };
        result = await researchPaperCollection.updateOne(filter, updatedData);
      } else {
        result = await researchPaperCollection.deleteOne(filter);
      }
    } else {
      result = await researchPaperCollection.deleteOne(filter);
    }

    if (result.acknowledged) {
      revalidatePath('/research-papers');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Research paper(s) deleted successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to delete research paper(s)!'
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
