import { Component, OnInit } from '@angular/core';
import { HttpClientCustom } from '../utill/http-client';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private httpClient: HttpClientCustom
  ) { }
  ngOnInit() {
    this.getAccessToken().subscribe((res: any) => {
      console.log('AccessToken Details', res);
      let tokenValue = res.access_token;
      localStorage.setItem('id_token', tokenValue);
    }, (err) => { })

    this.getCaseStudy().subscribe((res: any) => {
      console.log('Case Study Details', res);
    }, (err) => { })

  }

  getAccessToken() {
    let schema = 'grant_type=password&scope=user&client_id=4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5&client_secret=908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88&auth_token=azd4jXWWLagyb9KzgfDJ';
    return this.httpClient.post(environment.TOKEN_API_URL, schema).map((response: Response) => {
      return response;
    });
  }

  getCaseStudy() {
    let reqURL = environment.CASE_STUDY_API_URL + 'companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions';
    return this.httpClient.get(reqURL).map((response: Response) => {
      return response;
    });
  }

}
