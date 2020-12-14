import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  user: User = new User()
  userList: User[]
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertsService,
  ) { }

  ngOnInit() {
   this.findAllUsuarios()
   window.scroll(0,0)
   
  }
findAllUsuarios(){
  this.authService.getAllUsuarios().subscribe((resp: User[]) =>{
    this.userList = resp
    
  })
}


  entrar() {

    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {

     this.userLogin = resp 
     environment.token = this.userLogin.token     
     localStorage.setItem('tipo', this.userLogin.tipo)
      if(this.userLogin.tipo == 'professor'){
        this.router.navigate(['/area-instrutor'])
      } else{
        this.router.navigate(['/aluno-cursos'])
      }

     
     
    },erro =>{
      if(erro.status == "500"){
        this.userList.forEach(user => {
          this.alert.showAlertDanger('Usuário ou Senha inválidos!')
        })
      }      

    })
  }
}