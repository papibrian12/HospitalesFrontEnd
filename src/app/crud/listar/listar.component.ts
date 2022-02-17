import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hospitales } from 'src/app/public/dtos/Hospitales.dto';
import { HospitalesserviceService } from 'src/app/public/services/hospitalesservice.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  hospitales: Hospitales[];

  hospitalrForm: FormGroup;

  constructor(private servicio: HospitalesserviceService, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listarHospitales();

    this.hospitalrForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.maxLength(50), Validators.required]],
      direccion: ['', [Validators.maxLength(50), Validators.required]],
      insumo: ['', [Validators.maxLength(50), Validators.required]],
    });
  }

  listarHospitales(): void{
    this.servicio.listarHospitales().subscribe( resultado => {
    this.hospitales = resultado;
    } );
  }

  eliminarHospital(id: number): void{
    this.servicio.eliminarHospital(id).subscribe(resp => {
      console.log("eliminado")
    }, error=>{
      console.log(error)
    })
  }

}
