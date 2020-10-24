import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';
import { MainSidebarMenuService } from './services/core/main-sidebar-menu.service';


declare var App: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private menuSVc:MainTopBarMenuService, private sideSVc:MainSidebarMenuService) {

  }

  title = 'app-real-timee';

  miEmpresa: string = "Grupo Flecha amarilla";
  periodo: number = 2020;

  menuItems: any[] = [];//menu topbar
  sidebarItems: any[] = [];//menu sidebar

  ngOnInit() {
    //load side bar
    App.init();
    this.getData();//menu topbar load
  }
  getData(){
      this.menuSVc.getItemMenu().subscribe((data:any)=>{
        //Async
        this.menuItems=data;
      });

      this.sideSVc.getItemSidebarMenu().subscribe((data2:any)=>{
        //Async
        this.sidebarItems=data2;
      });
  }
  listenChildMenuEvent(eventArgs:any){
    console.log('El indice selecionado es es el papa: ',eventArgs);
    console.log('El indice selecionado es es el papa: ',eventArgs.index),
    console.log('El item selecionado es en el papa: ',eventArgs.name);
  }

};
