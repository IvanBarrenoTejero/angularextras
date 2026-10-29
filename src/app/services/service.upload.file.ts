import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceUploadFile {
  private url = environment.apiUploadFile;

  constructor(private http: HttpClient) {}

  async uploadFile(datos: any): Promise<any> {
    let request = 'api/testingfiles';
    return this.http.post(this.url, datos).toPromise();
  }
}
