import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job-service.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  title: string = '';
  jobList: Job[] = [];

  constructor(private myJobService: JobService) {}

  ngOnInit(): void {
    this.title = this.myJobService.title;
    this.myJobService.getJobs().subscribe(response => this.jobList = response);
  }

}
