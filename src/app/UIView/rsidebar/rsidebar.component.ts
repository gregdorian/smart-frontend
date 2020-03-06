import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsidebar',
  templateUrl: './rsidebar.component.html',
  styleUrls: ['./rsidebar.component.css']
})
export class RsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
        openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
      
        closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
}