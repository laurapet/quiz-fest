import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-question-editor-tooltips',
  templateUrl: './question-editor-tooltips.component.html',
  styleUrls: ['./question-editor-tooltips.component.scss'],
})
export class QuestionEditorTooltipsComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  dismissPopover() {
    this.popoverController.dismiss();
  }
}
