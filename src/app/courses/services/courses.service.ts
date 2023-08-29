import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpCliente: HttpClient) {}

  list() {
    return this.httpCliente.get<Course[]>(this.API);
  }
}
