'use server';

import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import { getSkills } from '@/app/_lib/getFunctions/getSkills';
import { DB } from '@/app/_utils/mongoDB';

export async function updateSkills(prevState, formData) {
  try {
    let keys = [];
    for (const key of formData.keys()) {
      keys = [...keys, key];
    }
    const skillTypes = keys?.filter(
      (key) => key.startsWith('skillType') && key
    );

    let skillsDeveloped = [];
    for (let i = 1; i <= skillTypes?.length; i++) {
      const skillNames = keys?.filter(
        (key) => key.startsWith('skillName' + i) && key
      );
      const percentages = keys?.filter(
        (key) => key.startsWith('percentage' + i) && key
      );
      const skills = skillNames?.map((skillName, index) => {
        const skill = {
          skillName: formData.get(skillName),
          percentage: formData.get(percentages[index])
        };
        return skill;
      });
      const skillSet = {
        skillType: formData.get(skillTypes[i - 1]),
        skills
      };
      skillsDeveloped = [...skillsDeveloped, skillSet];
    }

    const updatedData = {
      updateTime: new Date().toDateString(),
      skillsDeveloped
    };

    const skills = await getSkills();

    if (!skills) {
      throw new Error('Failed to get skills data');
    }

    const previousData = JSON.stringify(skills.skillsDeveloped);
    const currentData = JSON.stringify(updatedData.skillsDeveloped);

    if (currentData === previousData) {
      return JSON.parse(
        JSON.stringify({
          errorType: 'data',
          status: 'failed',
          message: 'Please modify data first!'
        })
      );
    }

    const { skillCollection } = await DB();
    const filter = {};
    const updatedDoc = {
      $set: updatedData
    };

    const result = await skillCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Skills updated successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to update skills!'
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
