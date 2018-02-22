import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  title = 'Jingle Bell';
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  showAnswer() {
    this.showSpinner = true;

    setTimeout(()=> {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }

  constructor() { }

  ngOnInit() {
  }

}
