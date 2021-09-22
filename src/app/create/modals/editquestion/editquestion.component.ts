import {Component, Input, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {Question} from '../../../entitys/Question';
import {EditQuizService} from '../../../services/edit-quiz.service';
import {Answer} from '../../../entitys/Answer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionEditorTooltipsComponent} from './question-editor-tooltips/question-editor-tooltips.component';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.scss'],
})
export class EditquestionComponent implements OnInit {

  @Input() questionText: string;
  @Input() answers: Answer[];
  //to differ between editing an existing Question and creating a new one
  @Input() questionIndex: number;

  private questionForm: FormGroup;

  constructor(public modalController: ModalController, public editQuizService: EditQuizService,
              private formBuilder: FormBuilder, public popoverController: PopoverController) {
    console.log(this.questionText);
    this.questionForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit() {}

  closeQuestionEditor(){
    this.modalController.dismiss();
  }

  submitQuestion() {
    const formResult = this.questionForm.value;
    const question = {
      text: formResult.text,
      answers: this.answers
    };

    if (this.questionIndex !== undefined) {
      this.editQuizService.quizToEdit.questions[this.questionIndex] = question;
    } else {
      this.editQuizService.quizToEdit.questions.push(question);
    }
    this.closeQuestionEditor();
  }

  selectColor(correct: boolean): string{
    if(correct===true){
      return 'success';
    }
    if(correct===false){
      return 'danger';
    }
  }

  deleteAnswer(index: number) {
    this.answers.splice(index,1);
  }

  addNewAnswer() {
    if(this.answers.length < 6){
      this.answers.push({text: 'new answer', isCorrect: false});
    }
  }

  answersExist(): boolean{
    let inCorrectProvided = false;
    let correctProvided = false;
    for(const answer of this.answers){
      if(answer.isCorrect){
        correctProvided=true;
      }
      else{
        inCorrectProvided=true;
      }
    }
    if(correctProvided&&inCorrectProvided){
      return true;
    }
    return false;
  }

  async openHelpPopover() {
    const popover = await this.popoverController.create({
      component: QuestionEditorTooltipsComponent,
      translucent: true
    });
    return await popover.present();
  }
}
