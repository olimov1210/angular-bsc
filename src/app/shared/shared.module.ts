import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent, CourseCard, CoursesComponent, HeaderComponent, InfoComponent, Login, Registration } from './components'
const COMPONENTS = [CoursesComponent, CourseCard, Login, Registration,HeaderComponent,ButtonComponent,InfoComponent]
@NgModule({
  
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [COMPONENTS]
})

export class SharedModule{}