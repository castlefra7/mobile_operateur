import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  @Input() image: String;
  @Input() link: String;
  @Input() title: String;

  @Output() emitEvent: EventEmitter<String>
  constructor() {
    this.emitEvent = new EventEmitter();
  }

  ngOnInit() {}

  onClick(value: String): void {
    this.emitEvent.emit(value);
  }

}
