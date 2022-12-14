import Status from '../constants/characters/status';
import Job from '../constants/characters/job';

export default function getPoseConfig(job: Job): {[key: number]: Array<string>}{
  return {
    [Status.READY]: [
      `/assets/character/${job}/Poses/${job}_hold1.png`,
      `/assets/character/${job}/Poses/${job}_hold2.png`,
    ],
    [Status.WALK]: [
      `/assets/character/${job}/Poses/${job}_walk1.png`,
      `/assets/character/${job}/Poses/${job}_walk2.png`,
    ],
    [Status.WIN]: [
      `/assets/character/${job}/Poses/${job}_cheer1.png`,
      `/assets/character/${job}/Poses/${job}_cheer2.png`,
    ],
  };
};