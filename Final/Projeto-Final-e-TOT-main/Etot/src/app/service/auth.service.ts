import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
   headers: new HttpHeaders().set('Authorization', environment.token)
  }

logar(userLogin: UserLogin){
  return this.http.post('https://e-tot.herokuapp.com/usuario/login', userLogin)
}

cadastrar(user: User) {
  return this.http.post('https://e-tot.herokuapp.com/usuario/cadastro', user)
}

getAllUsuarios() {
  return this.http.get('https://e-tot.herokuapp.com/usuario') 
}

comprar (produto: Produto){
  return this.http.put('https://e-tot.herokuapp.com/usuario', produto) 
}



// Método para mostrar o botão Sair apenas quando houver um token, ou seja, usuário logado
btnSair(){
  let ok = false
  let token = environment.token
  if (token != '') {
    ok = true
  }
  return ok
}
btnLogin() {
  let ok = false
  let token = environment.token
  if (token == '') {
    ok = true
  }
  return ok
}


  professor(){
    let ok = false
    let tipo = localStorage.getItem('tipo')
        
   if (tipo == 'professor'){ 
      ok = true
    }
    return ok
  }
  aluno(){
    let ok = false
    let tipo = localStorage.getItem('tipo')
        
   if (tipo == 'aluno'){ 
      ok = true
    }
    return ok
  }
}