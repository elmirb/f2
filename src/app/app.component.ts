import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, RouterModule],
})
export class AppComponent implements OnInit {
  title = 'friendlychat';

  constructor(private mm: ChatService){}
  ngOnInit(): void {
    this.mm.requestNotificationsPermissions();
     
  }
}
