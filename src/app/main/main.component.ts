import * as Parallax from 'parallax-js';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const scene = document.getElementById('mainScene');
    if (scene) {
      const parallaxInstance = new Parallax(scene);
    }
  }
}
