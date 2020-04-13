import { Component, OnInit } from '@angular/core';

import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
