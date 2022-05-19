import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  listOfJobs: Job[] = [
    {
      id: 1,
      title: 'Master Marksman',
      description:
        "Jack can easily hit mobile targets, such as a falling barrel of gunpowder. He was also capable of shooting the Dead Man's Chest out of Davy Jones' hand during a maelstrom while swinging on a rope.",
      duration: '10 hours',
      employer: 'Self Employed',
    },
    {
      id: 2,
      title: 'Master Swordsman',
      description:
        'Jack was taught swordsmanship by an Italian fencing master after doing him a favor. He can keep up with multiple pirates at the same time and outmatched Davy Jones and Barbossa in a duel, as well as William Turner Junior.',
      duration: '7 hours',
      employer: 'Self Employed',
    },
    {
      id: 3,
      title: 'Master of Improvision',
      description:
        'Jack often improvises during and outside of battle, allowing him to perform unpredictable actions. He is also capable of using the environment and anything around him to his advantage and/or as a weapon.',
      duration: '8 hours',
      employer: 'Self Employed',
    },
    {
      id: 4,
      title: 'Master Escapee',
      description:
        'Capable of escaping situations normally unavoidable by just improvising.',
      duration: '9 hours',
      employer: 'Self Employed',
    },
    {
      id: 5,
      title: 'Master of Plans',
      description:
        "Jack is known for anticipating the plans of his enemies, so he can coordinate them with his own and play both sides. You never know what side he's on but it always seems to benefit him in the end.",
      duration: '4 hours',
      employer: 'Self Employed',
    },
  ];

  title: string = 'Work History';

  constructor() {}

  getJobs(): Observable<Job[]> {
    return of(this.listOfJobs);
  }

  getJob(jobId: number): Observable<Job | undefined> {
    return of(this.listOfJobs.find((j) => j.id == jobId));
  }
}
