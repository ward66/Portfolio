import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  ngAfterViewInit(): void {}

  @HostListener('wheel', ['$event'])
  onMouseScroll(event: any) {
    //event.preventDefault();
    // if (event.deltaY < 0) {
    //   console.log('scrolling up');
    // } else {
    //   console.log('scrolling down');
    // }
  }
}
