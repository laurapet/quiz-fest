import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CategoryService} from '../services/category.service';
import {QuizList} from '../entitys/QuizList';
import {PlayQuizComponent} from '../play-quiz/play-quiz.component';

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss']
})
export class PlayPage {

  currentCategory = '';
  quizzes: QuizList[];
  categories: string[];

  constructor(public modalController: ModalController, public categoryService: CategoryService) {
    this.getCategoryNames();
  }

  async openQuiz(quiz: QuizList){
    const modal = await this.modalController.create({
      component: PlayQuizComponent,
      componentProps: {
        title: quiz.title,
        link : quiz.linkToQuiz
      }
    });
    return await modal.present();
  }

  loadEntries(){
    if(this.currentCategory!= null && this.currentCategory !== ''){
      this.categoryService.getQuizzesFromCategory(this.currentCategory)
        .subscribe(quizzes =>{
          this.quizzes = quizzes;
          console.log(this.quizzes);
        });
    }
  }

  getCategoryNames(){
    this.categoryService.getAllCategorys().subscribe((categories)=>{
      this.categories = categories;
      console.log(this.categories);
      if(this.currentCategory == null || this.currentCategory === ''){
        this.currentCategory = this.categories[0];
        this.loadEntries();
      }
    });
  }

}
