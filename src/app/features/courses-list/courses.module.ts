import { NgModule} from '@angular/core'
import { CoursesComponent } from '../../shared/components'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  
  declarations: [
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CoursesComponent,
  ]
})

export class CoursesModule{}