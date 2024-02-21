'use server';

import { getSkills } from '@/app/_lib/getFunctions/getSkills';
import { DB } from '@/app/_utils/mongoDB';

export async function addNewSkill(prevState, formData) {
  try {
    const skillType = formData.get('skillType');
    const newSkill = {
      skillName: formData.get('skillName'),
      percentage: formData.get('percentage')
    };

    const skills = await getSkills();
    const availableSkillSet = skills?.skillsDeveloped?.find(
      (skillSet) => skillSet.skillType === skillType
    );

    const restSkillSet = skills?.skillsDeveloped?.filter(
      (skillSet) => skillSet.skillType !== availableSkillSet?.skillType
    );

    let updatedSkills = [];
    let skillsDeveloped = [];

    if (availableSkillSet) {
      const availableSkillSetIndex =
        skills?.skillsDeveloped?.indexOf(availableSkillSet);

      const previousSkillSets = skills?.skillsDeveloped?.slice(
        0,
        availableSkillSetIndex
      );
      const nextSkillSets = skills?.skillsDeveloped?.slice(
        availableSkillSetIndex + 1
      );

      const availableSkills = availableSkillSet.skills;
      updatedSkills = [...availableSkills, newSkill];
      skillsDeveloped = [
        ...previousSkillSets,
        { skillType, skills: updatedSkills },
        ...nextSkillSets
      ];
    } else {
      updatedSkills = [newSkill];
      skillsDeveloped = [
        ...skills?.skillsDeveloped,
        { skillType, skills: updatedSkills }
      ];
    }

    const filter = {};
    const updatedDoc = {
      $set: {
        updateTime: new Date().toDateString(),
        skillsDeveloped
      }
    };

    const { skillCollection } = await DB();
    const result = await skillCollection.updateOne(filter, updatedDoc);

    if (result.acknowledged) {
      return JSON.parse(
        JSON.stringify({
          errorType: null,
          status: 'success',
          message: 'Skill added successfully!'
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          errorType: 'database',
          status: 'failed',
          message: 'Failed to add skill!'
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
