import { Component } from '@angular/core';
import {IonButton, ModalController} from '@ionic/angular';
import { QuizList } from '../entitys/QuizList';
import { EditQuizService } from '../services/edit-quiz.service';
import {EditquizComponent} from '../editquiz/editquiz.component';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username: string;
   ownQuizzes: QuizList[];
   categories: string[];

  constructor(public modalController: ModalController, public editQuizService: EditQuizService, public categoryService: CategoryService) {
    this.username=localStorage.getItem('username');
    this.loadOwnQuizzes();
    this.getCategoryNames();

  }

  loadOwnQuizzes(){
    this.editQuizService.getOwnQuizzes().subscribe((quizzes) =>{
      this.ownQuizzes = quizzes;
      }
    );
  }

  getCategoryNames(){
    this.categoryService.getAllCategorys().subscribe((categories)=>{
      this.categories = [];
      this.categories = categories;
      console.log(categories);
    });
  }

  async openQuizEditor(pageTitle: string, link?: string){

    const modal = await this.modalController.create({
      component: EditquizComponent,
      componentProps: {
        pageTitle,
        categories: this.categories,
        link
      }
    });
    modal.onDidDismiss().then(()=>{
      this.loadOwnQuizzes();
      this.editQuizService.quizToEdit={categoryName:'', title:'',questions:[]};
    });
    return await modal.present();
  }

  deleteQuiz(quiz: QuizList, index: number) {
    //TODO: loadOwnQuizzes benutzen zum sofortigen neuladen FALLS löschen geklappt hat
    console.log(quiz);
    this.ownQuizzes.splice(index,1);
    this.editQuizService.deleteQuiz(quiz);
  }
}
