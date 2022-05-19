import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  job?: Job;
  jobList: Job[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, private jobService: JobService
  ) {}
  ngOnInit(): void {
    const jobId = this.activatedRoute.snapshot.params['jobId'];
    this.jobService.getJob(jobId).subscribe(result => {
      this.job = result;
    })
  }
}
