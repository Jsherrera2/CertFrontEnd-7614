import { Component, OnInit } from '@angular/core';
import { faPlus, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Vinculacion } from 'src/app/models/vinculacion';
import { VinculacionService } from 'src/app/services/vinculacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vinculacion-list',
  templateUrl: './vinculacion-list.component.html',
  styleUrls: ['./vinculacion-list.component.css']
})
export class VinculacionListComponent implements OnInit {
  faEye = faEye;
  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  vinculaciones :Vinculacion[];

  constructor(private vinculacionService : VinculacionService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void {
    this.vinculacionService.list().subscribe(result => this.vinculaciones = result);
  }


  delete(a:Vinculacion) :void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro del proyecto " + a.nombre_proyecto + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.vinculacionService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        )
      }
    })
  }





}
