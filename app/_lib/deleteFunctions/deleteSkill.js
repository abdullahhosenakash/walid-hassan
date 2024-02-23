'use server';

import { DB } from '@/app/_utils/mongoDB';
import { revalidatePath } from 'next/cache';

export async function deleteSkill(prevState, formData) {
  try {
    const skillType = formData.get('skillType');
    const skillName = formData.get('skillName');

    const response = await fetch('https://walid-hassan.vercel.app/api/skills');
    const skills = await response.json();

    if (!skills) {
      throw new Error('Failed to get skills data');
    }

    const availableSkillSet = skills?.skillsDeveloped?.find(
      (skillSet) => skillSet.skillType === skillType
    );

    const availableSkillSetIndex =
      skills?.skillsDeveloped?.indexOf(availableSkillSet);
    const previousSkillSets = skills?.skillsDeveloped?.slice(
      0,
      availableSkillSetIndex
    );
    const nextSkillSets = skills?.skillsDeveloped?.slice(
      availableSkillSetIndex + 1
    );

    let skillsDeveloped = [];

    if (skillName) {
      const availableSkills = availableSkillSet.skills;
      const updatedSkills = availableSkills?.filter(
        (skill) => skill.skillName !== skillName
      );

      if (updatedSkills.length) {
        skillsDeveloped = [
          ...previousSkillSets,
          { skillType, skills: updatedSkills },
          ...nextSkillSets
        ];
      } else {
        skillsDeveloped = [...previousSkillSets, ...nextSkillSets];
      }
    } else {
      skillsDeveloped = [...previousSkillSets, ...nextSkillSets];
    }

    const updatedData = {
      updateTime: new Date().toDateString(),
      skillsDeveloped
    };

    const { skillCollection } = await DB();
    const filter = {};
    const updatedDoc = {
      $set: updatedData
    };

    const result = await skillCollection.updateOne(filter, updatedDoc);
    if (result.acknowledged) {
      revalidatePath('/skills');
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Skill(s) deleted successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to delete skill!'
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
