'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';
import crypto from 'crypto';

export async function addNewCertification(prevState, formData) {
  try {
    const certificationType = formData.get('certificationType');
    const certificationId = crypto.randomBytes(16).toString('hex');

    const newCertification = {
      certificationId,
      certificationName: formData.get('certificationName'),
      description: formData.get('description'),
      link: formData.get('link'),
      imageLink: formData.get('imageLink')
    };

    const filter = { certificationType };
    const { certificationCollection } = await DB();
    const selectedCertificationSet = await certificationCollection.findOne(
      filter
    );

    let certifications = [];

    if (selectedCertificationSet) {
      certifications = [
        ...selectedCertificationSet?.certifications,
        newCertification
      ];
    } else {
      certifications = [newCertification];
    }

    const updatedCertificationsSet = {
      $set: {
        certificationType,
        certifications
      }
    };

    const options = { upsert: true };

    const result = await certificationCollection.updateOne(
      filter,
      updatedCertificationsSet,
      options
    );

    if (result.acknowledged) {
      revalidatePath('/certifications');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Certification added successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to add certification!'
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
