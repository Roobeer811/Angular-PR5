import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onSearch(value: Event) {
    const data = (value.target as HTMLInputElement).value;
    this.searchTextChange.emit(data);

  }
}
