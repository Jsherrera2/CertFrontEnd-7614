import { Component, OnInit } from '@angular/core';
import { Vinculacion } from 'src/app/models/vinculacion';
import { ActivatedRoute } from '@angular/router';
import { VinculacionService } from 'src/app/services/vinculacion.service';
import { faListAlt,faCalendarDay,faUser,faMapMarked,faListOl,faClock,faBuilding} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-vinculacion-card',
  templateUrl: './vinculacion-card.component.html',
  styleUrls: ['./vinculacion-card.component.css']
})
export class VinculacionCardComponent implements OnInit {

  
  faListAlt = faListAlt;
  faCalendarDay=faCalendarDay;
  faUser=faUser;
  faMapMarked=faMapMarked;
  faListOl=faListOl;
  faClock=faClock;
  faBuilding=faBuilding;
  

  vinculacion: Vinculacion;

  constructor(private vinculacionService : VinculacionService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.vinculacionService.retrieve(params['id']).subscribe(
            result => this.vinculacion = result
          )
        }
      }
    );
  }
}
