import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseCard {
  @Input() title: String
  @Input() description: String
  @Input() creationDate: Date
  @Input() duration: number
  @Input() authors: String[]
  time_convert(duration)
 { 
  var hours = Math.floor(duration / 60);  
  var minutes = duration % 60;
  return hours + ":" + minutes + " hours";         
}
}