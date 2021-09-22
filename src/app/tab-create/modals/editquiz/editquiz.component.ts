import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CategoryService} from '../../../services/category.service';
import {EditQuizService} from '../../../services/edit-quiz.service';
import {QuizEdit} from '../../../entitys/QuizEdit';
import {Question} from '../../../entitys/Question';
import {EditquestionComponent} from '../editquestion/editquestion.component';
import {Answer} from '../../../entitys/Answer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionEditorTooltipsComponent} from "../editquestion/question-editor-tooltips/question-editor-tooltips.component";


@Component({
  selector: 'app-editquiz',
  templateUrl: './editquiz.component.html',
  styleUrls: ['./editquiz.component.scss'],
})
export class EditquizComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() categories: string[];
  @Input() link: string;

  private quizForm: FormGroup;

  constructor(public modalController: ModalController, public editQuizService: EditQuizService, private formBuilder: FormBuilder) {
    this.quizForm = this.formBuilder.group({
      quizTitle: ['', Validators.required],
      categoryName: ['', Validators.required]
    });
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
    console.log(questionText);
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
    this.initQuizToEdit();
    this.editQuizService.createQuiz(this.editQuizService.quizToEdit).subscribe((quiz)=>{
      this.dismiss();
    });
  }

  questionExists(): boolean{
    return this.editQuizService.quizToEdit.questions.length>=1;
  }


  getQuiz() {
     this.editQuizService.getQuizToEdiz(this.link).subscribe((quiz)=>{
      this.editQuizService.quizToEdit=quiz;
      const category: any = quiz.categoryName;
      this.editQuizService.quizToEdit.categoryName = category.name;
    });
  }

  updateQuiz(): void {
    this.initQuizToEdit();
    this.editQuizService.updateQuiz(this.editQuizService.quizToEdit, this.link).subscribe((quiz)=>{
      this.dismiss();
    });
  }

  initQuizToEdit(){
    const formResult = this.quizForm.value;
    this.editQuizService.quizToEdit.title = formResult.quizTitle;
    this.editQuizService.quizToEdit.categoryName = formResult.categoryName;
  }


}
