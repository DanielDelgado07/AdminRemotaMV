import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  frmUsuario!: FormGroup;
  usuarioLabel: string="Auxiliar";

  constructor(private  frm:FormBuilder) { }

  ngOnInit(){
    this.frmUsuario = this.frm.group({
      userNameColaborador: ['',[Validators.required, Validators.minLength(3),]],
      passwordUser: ['', Validators.required, Validators.minLength(3)],
      rolUsuario:['aux']
   
    });
  }
  
  selectRolUsuario(rol: string){
    console.log(rol);
    if(rol=='adm'){
     this.usuarioLabel="Administrador";
    }else{
      this.usuarioLabel="Auxiliar";
    }
  }

  crearUsuario(){
    console.log(this.frmUsuario);
  }

}
