'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function deleteCertification(prevState, formData) {
  try {
    const certificationType = formData.get('certificationType');
    const certificationId = formData.get('certificationId');

    const { certificationCollection } = await DB();
    const filter = { certificationType };
    const selectedCertificationSet = await certificationCollection.findOne(
      filter
    );

    let result;

    if (certificationId) {
      const restCertifications =
        selectedCertificationSet?.certifications?.filter(
          (certification) => certification.certificationId !== certificationId
        );
      if (restCertifications.length) {
        const updatedData = {
          $set: {
            certificationType,
            certifications: restCertifications
          }
        };
        result = await certificationCollection.updateOne(filter, updatedData);
      } else {
        result = await certificationCollection.deleteOne(filter);
      }
    } else {
      result = await certificationCollection.deleteOne(filter);
    }

    if (result.acknowledged) {
      revalidatePath('/certifications');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Certification(s) deleted successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to delete certifications(s)!'
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
