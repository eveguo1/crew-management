import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';

@Component({
    selector: 'app-crew',
    imports: [CrewDesignationsComponent],
    templateUrl: './crew.component.html',
    styleUrl: './crew.component.scss'
})
export class CrewComponent {
  message = "hello world";
  receivedMessage = "";

  receivingMessage(message: string): void {
    this.receivedMessage = message;
  }
}
