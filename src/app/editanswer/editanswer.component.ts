import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editanswer',
  templateUrl: './editanswer.component.html',
  styleUrls: ['./editanswer.component.scss'],
})
export class EditanswerComponent implements OnInit {

  @Input() answerText: string;
  @Input() isCorrect: boolean;
  @Input() disposable: boolean;

  constructor() { }

  ngOnInit() {}

}
