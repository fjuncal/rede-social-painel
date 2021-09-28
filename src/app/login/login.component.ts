import { AutenticacaoService } from './../servicos/autenticacao.service';
import { Usuario } from './models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nome: string;
  senha: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  error: string;
  usuarios: Usuario[] = [];

  podeEntrar: boolean;

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.autenticacaoService.getAll().subscribe(response => {
      this.usuarios = response;
    })
  }

  preparaCadastrar(event){
    this.cadastrando = true;
    this.nome = '';
    this.senha = '';
    this.mensagemSucesso = '';
    this.error = '';

  }

  cancelaCadastro(){
    this.cadastrando = false;
    this.nome = '';
    this.senha = '';
    this.mensagemSucesso = '';
    this.error = '';
  }

  cadastrarUsuario(){
    const usuario: Usuario = new Usuario();
    usuario.nome = this.nome;
    usuario.senha = this.senha;

    if(usuario.nome === undefined || usuario.nome === '' || usuario.senha === '' || usuario.senha === undefined){
      this.error = 'Nome e Senha devem ser preenchidos'
      this.mensagemSucesso = '';
      console.log(this.usuarios);
    } else{
    this.autenticacaoService.salvar(usuario).subscribe(response => {
      this.mensagemSucesso = "Cadastro realizado com sucesso. Efetue o login";
      this.cadastrando = false;
      this.error = null;
      this.nome = "";
      this.senha = "";
    }, errorResponse => {
      this.mensagemSucesso = null;
      this.error = errorResponse.error;
    })
  }

  }

  onSubmit(){
    this.podeEntrar = false;
    const usuario: Usuario = new Usuario();
    usuario.nome = this.nome;
    usuario.senha = this.senha
    this.autenticacaoService.getAll().subscribe(response => {
      this.usuarios = response;
    })

    this.usuarios.forEach(element => {
      if(usuario.nome == element.nome && usuario.senha == element.senha){
        this.podeEntrar = true;
      }
    });

    if(this.podeEntrar){
      this.router.navigate(['/home'])
    } else {
      this.error = 'Nome e/ou senha inválidos'
    }
  }

}
