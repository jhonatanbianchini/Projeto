import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


logar(userLogin: UserLogin){
  return this.http.post('http://localhost:8080/usuario/login', userLogin)
}

cadastrar(user: User) {
  return this.http.post('http://localhost:8080/usuario/cadastro', user)
}

// Método para mostrar o botão Sair apenas quando houver um token, ou seja, usuário logado
btnSair(){
  let ok = false
  let token = localStorage.getItem('token')

  if (token != null) {
    ok = true
  }
  return ok
}
// Método para mostrar o botão Cadastrar e Login, para quando nao houver usuario logado
btnLogin(){
  let ok = false
  let token = localStorage.getItem('token')
  
  if (token == null) {
    ok = true
  }
  return ok
  }
instrutor(){
  let ok = false
  let usuario = localStorage.getItem('usuario')
  
  if (usuario.indexOf('instrutor') != -1) {
    ok = true
  }
  return ok
}



}