import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  ngOnInit(): void {
  }

  public uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    const uploadUrl = `${environment.API_URL}/Upload`;
    const fileToUpload = files[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post(uploadUrl, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        console.log('jjjj' , uploadUrl );
        if (event.type === HttpEventType.UploadProgress)
        {
          if (event.total === undefined) {
          return;
          }
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }




}
