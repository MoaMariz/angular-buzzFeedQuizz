import { Component } from '@angular/core';
import { QuizzComponent } from "../../components/quizz/quizz.component"
@Component({
  selector: 'page-index',
  standalone: true,
  imports: [QuizzComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
