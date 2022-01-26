import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  /**
   * The title of the card
   */
  @Input()
  title!: string;

  /**
   * The skills which will be used as a badged
   */
  @Input()
  skills: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
