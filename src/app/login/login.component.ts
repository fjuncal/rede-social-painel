import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  preparaCadastrar(event){
    this.cadastrando = true;

  }

  cancelaCadastro(){
    this.cadastrando = false;

  }

  cadastrarUsuario(){

  }

  onSubmit(){
    this.router.navigate(['/home'])
  }

}
