import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit {

  @Input()
  color: 'red' | 'blue' | 'green' = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  get classes() {
    return [`badge-${this.color}`];
  }

}
