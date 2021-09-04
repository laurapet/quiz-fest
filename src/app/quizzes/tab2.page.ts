import { Component } from '@angular/core';
import {ActionSheetController, ModalController} from "@ionic/angular";
import {CategoryService} from "../services/category.service";
import {QuizList} from "../entitys/QuizList";
import {PlayQuizComponent} from "../play-quiz/play-quiz.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  currentCategory = 'cat';

  constructor(public modalController: ModalController, public categoryService: CategoryService) {}

  async openQuiz(quiz: QuizList){
    const modal = await this.modalController.create({
      component: PlayQuizComponent,
      componentProps: {
        title: quiz.title,
        link : quiz.linkToPlay
      }
    });
    return await modal.present();
  }

}
