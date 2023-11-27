import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

export const courseResolver: ResolveFn<Observable<Course>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  if (route.params?.['id']) {
    return inject(CoursesService).loadById(route.paramMap.get('id')!);
  }
  return of({ _id: '', name: '', category: '' });
};
