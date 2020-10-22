import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-spin',
  templateUrl: './loader-spin.component.html',
  styleUrls: ['./loader-spin.component.css']
})
export class LoaderSpinComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  public hideLoader() {

    document.getElementById('loading')
      .style.display = 'none';
  }

  public showLoader() {

    document.getElementById('loading')
      .style.display = '';
  }

}
