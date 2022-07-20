import { Component } from '@angular/core';
import { mockedCourseList } from 'src/app/mockdata/mocks';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mockedCourselist = mockedCourseList
}
