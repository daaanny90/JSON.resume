export type CvConfig = {
  name: string;
  profession: string;
  contacts: {
    email: string;
    telephone: string;
    website: string;
  },
  experiences: Array<JobExperience>
}

export type JobExperience = {
  title: string;
  type: string;
  company: string;
  from: string;
  to: string;
  summary: string;
}