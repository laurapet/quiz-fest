import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { IonList } from '@ionic/angular';
import { IonItem } from '@ionic/angular';
import { IonIcon } from '@ionic/angular';
import { QuizList } from '../entitys/QuizList';
import { EditQuizService } from '../services/edit-quiz.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

   ownQuizzes: QuizList[];

  constructor(public editQuizService: EditQuizService) {
    this.loadOwnQuizzes();
  }

  loadOwnQuizzes(){
    this.editQuizService.getOwnQuizzes()
      .subscribe(quizzes =>{
      this.ownQuizzes = quizzes;
      }
    );
    //this.ownQuizzes = this.editQuizService.getOwnQuizzes();
  }

}
