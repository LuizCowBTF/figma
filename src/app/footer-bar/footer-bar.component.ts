import { Component, OnInit } from '@angular/core';

import { faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {

  faEnvelope = faEnvelope;
  faHeadset = faHeadset;

  constructor() { }

  ngOnInit() {
  }

}
