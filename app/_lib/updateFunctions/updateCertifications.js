'use server';

import { DB } from '@/app/_utils/mongoDB';
import { ObjectId } from 'mongodb';
import { revalidatePath } from 'next/cache';

export async function updateCertifications(prevState, formData) {
  try {
    const certificationType = formData.get('certificationType');

    const updatedCertification = {
      certificationId: formData.get('certificationId'),
      certificationName: formData.get('certificationName'),
      description: formData.get('description'),
      link: formData.get('link'),
      imageLink: formData.get('imageLink')
    };

    const filter = { certificationType };
    const { certificationCollection } = await DB();
    const storedCertificationSet = await certificationCollection.findOne(
      filter
    );

    if (!storedCertificationSet) {
      throw new Error('Failed to get certifications data');
    }

    const selectedCertification = storedCertificationSet?.certifications?.find(
      (certification) =>
        certification.certificationId === updatedCertification.certificationId
    );
    const selectedCertificationIndex =
      storedCertificationSet?.certifications?.indexOf(selectedCertification);

    const previousCertifications =
      storedCertificationSet?.certifications?.slice(
        0,
        selectedCertificationIndex
      );
    const nextCertifications = storedCertificationSet?.certifications?.slice(
      selectedCertificationIndex + 1
    );

    const updatedCertifications = [
      ...previousCertifications,
      updatedCertification,
      ...nextCertifications
    ];

    const updatedCertificationsSet = {
      certificationType,
      certifications: updatedCertifications
    };

    const { _id, ...storedCertificationSetWithoutId } = storedCertificationSet;
    const previousData = JSON.stringify(
      storedCertificationSetWithoutId.certifications
    );
    const currentData = JSON.stringify(updatedCertifications);

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
      $set: updatedCertificationsSet
    };

    const result = await certificationCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/certifications');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Certifications updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update certifications!'
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

export async function updateCertificationType(prevState, formData) {
  try {
    const _id = formData.get('_id');
    const certificationType = formData.get('certificationType');

    const objectId = { _id: new ObjectId(_id) };
    const { certificationCollection } = await DB();
    const selectedCertificationSet = await certificationCollection.findOne(
      objectId
    );

    if (selectedCertificationSet.certificationType === certificationType) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }

    selectedCertificationSet.certificationType = certificationType;

    const updatedDoc = {
      $set: selectedCertificationSet
    };
    const result = await certificationCollection.updateOne(
      objectId,
      updatedDoc
    );
    if (result.acknowledged) {
      revalidatePath('/certifications');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Certifications updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update certifications!'
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
