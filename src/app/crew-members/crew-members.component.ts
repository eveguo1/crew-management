import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-crew-members',
    imports: [MatButtonModule], // modules
    providers: [], //components or services
    templateUrl: './crew-members.component.html',
    styleUrl: './crew-members.component.scss'
})
export class CrewMembersComponent {
}
