'use server';

import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import { DB } from '@/app/_utils/mongoDB';

async function getFormData(formData) {
  const passion = formData.get('passion');

  const designation1 = formData.get('designation1');
  const designation2 = formData.get('designation2');
  const designation3 = formData.get('designation3');

  const designations = [designation1, designation2, designation3];

  const facebookLink = formData.get('facebook');
  const linkedInLink = formData.get('linkedIn');
  const githubLink = formData.get('github');
  const googleScholarLink = formData.get('googleScholar');

  const socialLinks = {
    facebookLink,
    linkedInLink,
    githubLink,
    googleScholarLink
  };

  const highlightedSkillsGiven = formData.get('highlightedSkills');
  const unformattedHighlightedSkills = highlightedSkillsGiven.split(',');
  const highlightedSkills = unformattedHighlightedSkills.map((skill) =>
    skill.trim()
  );

  const cardTitle1 = formData.get('title1');
  const description1 = formData.get('description1');
  const linkText1 = formData.get('linkText1');
  const link1 = formData.get('link1');
  const card1 = {
    title: cardTitle1,
    description: description1,
    linkText: linkText1,
    link: link1
  };

  const cardTitle2 = formData.get('title2');
  const description2 = formData.get('description2');
  const linkText2 = formData.get('linkText2');
  const link2 = formData.get('link2');
  const card2 = {
    title: cardTitle2,
    description: description2,
    linkText: linkText2,
    link: link2
  };

  const cardTitle3 = formData.get('title3');
  const description3 = formData.get('description3');
  const linkText3 = formData.get('linkText3');
  const link3 = formData.get('link3');
  const card3 = {
    title: cardTitle3,
    description: description3,
    linkText: linkText3,
    link: link3
  };

  const cardTitle4 = formData.get('title4');
  const description4 = formData.get('description4');
  const linkText4 = formData.get('linkText4');
  const link4 = formData.get('link4');
  const card4 = {
    title: cardTitle4,
    description: description4,
    linkText: linkText4,
    link: link4
  };

  const homepageCards = [card1, card2, card3, card4];

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
    const { homepage } = await getMiscellaneousData();
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
