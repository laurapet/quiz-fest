import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CategoryService} from '../services/category.service';
import {EditQuizService} from '../services/edit-quiz.service';
import {QuizEdit} from '../entitys/QuizEdit';
import {Question} from '../entitys/Question';
import {EditquestionComponent} from '../editquestion/editquestion.component';
import {Answer} from '../entitys/Answer';


@Component({
  selector: 'app-editquiz',
  templateUrl: './editquiz.component.html',
  styleUrls: ['./editquiz.component.scss'],
})
export class EditquizComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() categories: string[];

  chosenCategory: '';

  constructor(public modalController: ModalController, public editQuizService: EditQuizService) {

  }

  ngOnInit() {}

  dismiss() {
    console.log(this.editQuizService.quizToEdit.questions);
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async openQuestionEditor(questionText: string, answers: Answer[], questionIndex?: number){
    console.log(questionIndex);
    const modal = await this.modalController.create({
      component: EditquestionComponent,
      componentProps: {
        questionText,
        answers,
        questionIndex
      }
    });
    return await modal.present();
  }


  deleteQuestion(index: number) {
    this.editQuizService.quizToEdit.questions.splice(index,1);
  }
}
