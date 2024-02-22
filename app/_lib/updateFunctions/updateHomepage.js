'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath, revalidateTag } from 'next/cache';

async function getFormData(formData) {
  const passion = formData.get('passion');

  const designations = [
    formData.get('designation1'),
    formData.get('designation2'),
    formData.get('designation3')
  ];

  const socialLinks = {
    facebookLink: formData.get('facebook'),
    linkedInLink: formData.get('linkedIn'),
    githubLink: formData.get('github'),
    googleScholarLink: formData.get('googleScholar')
  };

  const highlightedSkillsGiven = formData.get('highlightedSkills');
  const unformattedHighlightedSkills = highlightedSkillsGiven.split(',');
  const highlightedSkills = unformattedHighlightedSkills.map((skill) =>
    skill.trim()
  );

  let homepageCards = [];

  for (let i = 1; i <= 4; i++) {
    homepageCards = [
      ...homepageCards,
      {
        title: formData.get(`title${i}`),
        description: formData.get(`description${i}`),
        linkText: formData.get(`linkText${i}`),
        link: formData.get(`link${i}`)
      }
    ];
  }

  const updatedData = {
    passion,
    designations,
    socialLinks,
    highlightedSkills,
    homepageCards
  };
  return updatedData;
}

export async function updateHomepage(prevState, formData) {
  try {
    const updatedData = await getFormData(formData);

    // const response = await fetch(
    //   'https://walid-hassan.vercel.app/api/miscellaneous-data',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ time: new Date().toISOString() })
    //   }
    // );

    const response = await fetch(
      'https://walid-hassan.vercel.app/api/miscellaneous-data'
    );
    const { homepage } = await response.json();

    if (!homepage) {
      throw new Error('Failed to get homepage data');
    }

    const previousData = JSON.stringify(homepage);
    const currentData = JSON.stringify(updatedData);
    if (previousData === currentData) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }
    const { miscellaneousCollection } = await DB();
    const filter = {};
    const updatedDoc = {
      $set: { homepage: updatedData }
    };

    const result = await miscellaneousCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Homepage updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update homepage info!'
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
