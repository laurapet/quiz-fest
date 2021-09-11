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

   ownQuizzes: QuizList[];
   categories: string[];

  constructor(public modalController: ModalController, public editQuizService: EditQuizService, public categoryService: CategoryService) {
    this.loadOwnQuizzes();
    this.getCategoryNames();
  }

  loadOwnQuizzes(){
    this.editQuizService.getOwnQuizzes()
      .subscribe(quizzes =>{
      this.ownQuizzes = quizzes;
      }
    );
    //this.ownQuizzes = this.editQuizService.getOwnQuizzes();
  }

  getCategoryNames(){
    this.categoryService.getAllCategorys().subscribe((categories)=>{
      this.categories = [];
      this.categories = categories;
      console.log(categories);
    });
  }

  async openQuizEditor(){
    const modal = await this.modalController.create({
      component: EditquizComponent,
      componentProps: {
        title: 'Create Quiz',
        categories: this.categories
      }
    });
    return await modal.present();
  }

}
