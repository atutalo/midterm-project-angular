import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  listOfJobs: Job[] = [
    {
      id: 3243,
      title: 'Nurse',
      description: 'Help people heal',
      duration: '8 hours',
      employer: 'Vanderbilt Hospital',
    },
    {
      id: 2234,
      title: 'Lawyer',
      description: 'Help defent clients',
      duration: '12 hours',
      employer: 'ALT Law Services',
    },
    {
      id: 9973,
      title: 'Doctor',
      description: 'Help treat people',
      duration: '14 hours',
      employer: 'Carroll Hospital',
    },
  ];

  title: string = 'Work History';

  constructor() {}

  // aynchronous function to return list of contacts using observables
  getJobs(): Observable<Job[]> {
    return of(this.listOfJobs);
  }

  getJob(jobId: number): Observable<Job | undefined> {
    return of(this.listOfJobs.find(j => j.id == jobId));
  }
}
