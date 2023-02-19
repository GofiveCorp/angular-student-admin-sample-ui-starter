import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://dev.tks.co.th/studentapi';

  constructor(private httpClient: HttpClient) { }

}
