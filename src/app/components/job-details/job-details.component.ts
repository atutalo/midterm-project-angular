import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job-service.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  jobList: Job[] = [];

  constructor(private myJobService: JobService) {
    this.jobList = this.myJobService.listOfJobs;
  }
  ngOnInit(): void {}
}
