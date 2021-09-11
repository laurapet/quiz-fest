import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CategoryService} from '../services/category.service';
import {EditQuizService} from '../services/edit-quiz.service';
import {QuizEdit} from '../entitys/QuizEdit';
import {Question} from '../entitys/Question';


@Component({
  selector: 'app-editquiz',
  templateUrl: './editquiz.component.html',
  styleUrls: ['./editquiz.component.scss'],
})
export class EditquizComponent implements OnInit {

  @Input() title: string;
  @Input() categories: string[];

  chosenCategory: '';
  quizToEdit: QuizEdit;
  questions: Question[];

  constructor(public modalController: ModalController, public editQuizService: EditQuizService) {

  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async openQuizEditor(){}


}
