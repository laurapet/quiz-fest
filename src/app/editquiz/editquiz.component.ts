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
  @Input() link: string;

  constructor(public modalController: ModalController, public editQuizService: EditQuizService) {
  }

  ngOnInit() {
    if(this.link!== undefined){
      this.getQuiz();
    }
  }

  dismiss() {
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

  submitQuiz() {
    if(this.quizIsValid()) {
      this.editQuizService.createQuiz(this.editQuizService.quizToEdit).subscribe((quiz)=>{
        this.dismiss();
      });
    }
  }


  getQuiz() {
    this.editQuizService.getQuizToEdiz(this.link).subscribe((quiz)=>{
      this.editQuizService.quizToEdit=quiz;
      const category: any = quiz.categoryName;
      this.editQuizService.quizToEdit.categoryName = category.name;
    });
  }

  updateQuiz(): void {
    if(this.quizIsValid()){
      this.editQuizService.updateQuiz(this.editQuizService.quizToEdit, this.link).subscribe((quiz)=>{
        this.dismiss();
      });
    }
  }

  private quizIsValid() {

    if (this.editQuizService.quizToEdit.title !== null && this.editQuizService.quizToEdit.title !== '') {
      if (this.editQuizService.quizToEdit.categoryName !== null && this.editQuizService.quizToEdit.categoryName !== '') {
        if(this.editQuizService.quizToEdit.questions.length>=1){
          return true;
        }
        this.editQuizService.showBadRequestToast('Quizzes must contain at least one Question.');
        return false;
      }
      this.editQuizService.showBadRequestToast('You have to choose Category.');
      return false;
    }
    this.editQuizService.showBadRequestToast('Quiz titles can\'t be blank.');
    return false;
  }
}
