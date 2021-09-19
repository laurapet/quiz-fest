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
    if(this.questionIsValid()) {
        const question = {
          text: this.questionText,
          answers: this.answers
        };

        if (this.questionIndex !== undefined) {
          this.editQuizService.quizToEdit.questions[this.questionIndex] = question;
        } else {
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

  private questionIsValid() {
    if(this.questionText!==undefined&&this.questionText!==''){
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
        this.editQuizService.showBadRequestToast('Answers must contain at least one correct and one incorrect answer');
        return false;
    }
    this.editQuizService.showBadRequestToast('Questiontext can\'t be blank.');
    return false;
  }
}
