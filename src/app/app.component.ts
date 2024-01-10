import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class4-component-binding';
  user = {
    website: 'https://www.google.com',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    comments: 'default',
    commentsnew:'empty',
  };

  onClick(message:string)
  {
    console.log(`You pressed the button ${message}`);
    window.alert('You pressed the button');
  }
  
  handleComments(event: Event) {
    this.user.commentsnew = (<HTMLInputElement>event.target).value;
  }
}
