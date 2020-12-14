import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome  : string
  nomeOk: boolean

  email  : string
  emailOk: boolean

  senha  : String
  senhaOk: boolean

  tipo: string

  tipoOk: boolean

  user: User = new User()
  

  constructor
  (private authService: AuthService,
     private router: Router,
     private alert: AlertsService
  ) { }
  

  ngOnInit() {
    window.scroll(0,0)
    
  }
  conferirSenha(event: any) {
    this.senha = event.target.value

  }

  cadastrar() {
    this.user.tipo = this.tipo
      if(this.nomeOk == true && this.emailOk == true && this.senhaOk == true && this.senha === this.user.senha)
      {
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')

      })
    }
     else  if (this.nomeOk == true && this.emailOk == true && this.senhaOk == true && this.senha !== this.user.senha)
    {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
    else
    {
      this.alert.showAlertDanger('Preencha os campos corretamente.')
    }
       
  }

  validaNome()  {
    const txtNome = document.getElementById('txtNome')
    if (this.user.nome.length < 3)
    {
        txtNome.style.color = 'red'
        txtNome.innerHTML="Nome curto."
      
    }else{
        txtNome.style.color = 'green'
        txtNome.innerHTML='Nome válido.'
        this.nomeOk = true
    }
  }

  validaUsuario()  {
    const txtNome = document.getElementById('txtUsuario')
    if (this.user.usuario.length < 3)
    {
        txtNome.style.color = 'red'
        txtNome.innerHTML="Nome de usuário curto."
      
    }else{
        txtNome.style.color = 'green'
        txtNome.innerHTML='Nome de usuário válido.'
        this.nomeOk = true
    }
  }

  validaEmail()  {
      const txtEmail = document.getElementById('txtEmail')
  
      if (this.user.email.indexOf('@') == -1 || this.user.email.indexOf('.') == -1) 
      {
          txtEmail.style.color = 'red'
          txtEmail.innerHTML = "Email inválido."
          this.emailOk = false
          
      }
      else
      {
          txtEmail.innerHTML = "Email válido."
          txtEmail.style.color = 'green'
          this.emailOk = true
          
      }
  }

  confirmaSenha()  {
    const txtSenhaConf = document.getElementById('txtSenhaConf')

    if (this.senha !== this.user.senha)
    {
      this.alert.showAlertDanger("Suas senhas não conferem.")
    }
  }

  validaSenha()  {
    const txtSenha = document.getElementById('txtSenha')
    
    
    if (this.senha.length < 6)
    {
        txtSenha.style.color = 'red'
        txtSenha.innerHTML = "Senha fraca. Caracteres mínimos é 6."
        this.senhaOk = false
        
    }
    else if(this.senha.length >= 6 && this.senha.length <= 8)
    {
        txtSenha.style.color = 'yellow'
        txtSenha.innerHTML = "Senha média."
        this.senhaOk = true
        
    }
    else if (this.senha.length > 8)
      {
        txtSenha.style.color = 'green'
        txtSenha.innerHTML = "Senha forte."
        this.senhaOk = true
        
    }
  }


  escolhaTipo(event) {
    this.tipo = event.target.value
  }


}
