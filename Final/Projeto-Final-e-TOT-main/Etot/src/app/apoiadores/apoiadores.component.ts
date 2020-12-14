import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-apoiadores',
  templateUrl: './apoiadores.component.html',
  styleUrls: ['./apoiadores.component.css']
})
export class ApoiadoresComponent implements OnInit {

  email     : string
  emailOk   : boolean = false

  nome      : string
  nomeOk    : boolean = false

 

  constructor(
    private authService: AuthService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
  }

  validaEmail(){
    const txtEmail = document.getElementById('txtEmail')

    if (this.email.indexOf('@') == -1 || this.email.indexOf('.') == -1) 
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

  validaNome()
  {
    const txtNome = document.getElementById('txtNome')

    if(this.nome.length < 3)
    {
      txtNome.innerHTML   = "Nome inválido."
      txtNome.style.color = 'red'
    }
    else
    {
      txtNome.innerHTML = "Nome válido."
      txtNome.style.color = 'green'
      this.nomeOk = true
    }
  }

  enviar()
  {
    if(this.emailOk == true && this.nomeOk == true)
    {
      this.alert.showAlertSuccess("Dados enviados com sucesso. Formulário para nos apoiar entregue no email. Agradecemos desde já!")
    }
    else if(this.nomeOk == true && this.emailOk == false)
    {
      this.alert.showAlertDanger("Email inválido.")
    }
    else if (this.nomeOk == false && this.emailOk == true)
    {
      this.alert.showAlertDanger("Nome inválido.")
    }
    else if (this.nomeOk == false && this.emailOk == false)
    {
      this.alert.showAlertDanger("Preencha corretamente os campos!")
    }
  }

}
