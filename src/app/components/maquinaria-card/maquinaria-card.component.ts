import { Component, OnInit } from '@angular/core';
import { Maquinaria } from 'src/app/models/maquinaria';
import { faListAlt,faCalendarDay, faBarcode,faMoneyCheckAlt,faPercent} from '@fortawesome/free-solid-svg-icons';
import { MaquinariaService } from 'src/app/services/maquinaria.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-maquinaria-card',
  templateUrl: './maquinaria-card.component.html',
  styleUrls: ['./maquinaria-card.component.css']
})
export class MaquinariaCardComponent implements OnInit {

  faListAlt = faListAlt;
  faBarcode=faBarcode;
  faCalendarDay=faCalendarDay;
  faMoneyCheckAlt=faMoneyCheckAlt;
  faPercent=faPercent;
  
  maquinaria : Maquinaria;

  constructor(private maquinariaService : MaquinariaService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.maquinariaService.retrieve(params['id']).subscribe(
            result => this.maquinaria = result
          )
        }
      }
    );
  }

}
