import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
    selector: 'app-crew-designations',
    imports: [],
    templateUrl: './crew-designations.component.html',
    styleUrl: './crew-designations.component.scss'
})
export class CrewDesignationsComponent {
  readonly message = input<string>('');

  @Output()
  messageEvent: EventEmitter<string> = new EventEmitter<string>();

  sendMessage(): void {
    this.messageEvent.emit("Hello from child to parent.")
  }
}
