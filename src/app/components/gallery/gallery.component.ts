import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=500&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=750&h=600' },
    { url: 'https://api.lorem.space/image/game?w=500&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
    { url: 'https://api.lorem.space/image/game?w=600&h=750' },
  ];
  opened = false;

  ngOnInit(): void {}

  openImage(image: any) {
    this.opened = true;
    image.target.classList.add('opened');
    image.target.nextElementSibling.classList.add('show');
  }
  closeImage() {
    this.opened = false;
    document.getElementsByClassName('opened')[0].classList.remove('opened');
    document.getElementsByClassName('show')[0].classList.remove('show');
  }
}
