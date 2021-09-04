import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CategoryService} from "../services/category.service";
import {QuizList} from "../entitys/QuizList";
import {PlayQuizComponent} from "../play-quiz/play-quiz.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  currentCategory = 'Natur';
  quizzes: QuizList[];
  categories: string[];

  constructor(public modalController: ModalController, public categoryService: CategoryService) {
    this.loadEntries();
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
    //console.log(this.currentCategory);
    if(this.currentCategory!= null && this.currentCategory !== ''){
      this.categoryService.getQuizzesFromCategory(this.currentCategory)
        .subscribe(quizzes =>{
         // console.log(quizzes);
          this.quizzes = quizzes;
          //console.log(this.quizzes);
        });
    }
  }

  getCategoryNames(){
    this.categoryService.getAllCategorys().subscribe((categories)=>{
      //console.log(categories);
      this.categories = categories;
    });
  }

}
