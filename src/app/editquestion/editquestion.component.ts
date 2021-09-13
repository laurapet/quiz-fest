import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Question} from '../entitys/Question';
import {EditQuizService} from '../services/edit-quiz.service';
import {Answer} from '../entitys/Answer';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.scss'],
})
export class EditquestionComponent implements OnInit {

  @Input() questionText='';
  @Input() answers: Answer[];
  //to differ between editing an existing Question and creating a new one
  @Input() questionIndex: number;

  constructor(public modalController: ModalController, public editQuizService: EditQuizService) { }

  ngOnInit() {}

  closeQuestionEditor(){
    this.modalController.dismiss();
  }

  submitQuestion() {
    if(typeof this.questionText!='undefined' && this.questionText){
      const question = {
        text: this.questionText,
        answers: this.answers
      };

      if(this.questionIndex!==undefined){
        this.editQuizService.quizToEdit.questions[this.questionIndex] = question;
      }else{
        this.editQuizService.quizToEdit.questions.push(question);
      }
      this.closeQuestionEditor();
    }
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
}
