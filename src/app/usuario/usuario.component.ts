import { UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.usuarioService.consultar().subscribe(resposta => {
      this.usuarios = resposta as Usuario[];
      console.log(this.usuarios);
    }, error => alert('erro usuarios.'));
  }

}
