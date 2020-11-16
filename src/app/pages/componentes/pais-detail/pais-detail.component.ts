import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaísesService } from 'src/app/services/core/países.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.scss']
})
export class PaisDetailComponent implements OnInit {

  pais: any[] = [];

  constructor(private router: ActivatedRoute, private svcPaises: PaísesService) { 
    // Leer el parametro del códigp del país 
    this.router.params.subscribe((param:any) => {
      this.getPaisByCode(param['codigo']);
    });
  }

  ngOnInit(): void {
  }

  getPaisByCode(code: string) {
    this.svcPaises.getPaisByCode(code).subscribe((data:any[]) => {
      this.pais = data;
    });
  }
}
