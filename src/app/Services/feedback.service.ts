import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFeedback } from '../Component/Shared_Interfces/IFeedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedback(): Observable<IFeedback[]>
  {
    console.log('in');
    return this.http.get<IFeedback[]>(`${environment.API_URL}/Feedback`).pipe();
  }

  addNewFeedback(feedback: IFeedback): Observable<IFeedback>{
    console.log("feedService",feedback)
    return this.http.post<IFeedback>(`${environment.API_URL}/Feedback`,feedback).pipe();
  }
}
