import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(){
    return this.http.get('https://e-tot.herokuapp.com/produto')
  }

  getByIdProduto(id: number) {
    return this.http.get(`https://e-tot.herokuapp.com/produto/${id}`, this.token)
  }

  postProduto(produto: Produto){
    return this.http.post('https://e-tot.herokuapp.com/produto', produto, this.token)
  }

  putProduto(produto: Produto){
    return this.http.put('https://e-tot.herokuapp.com/produto',produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`https://e-tot.herokuapp.com/produto/${id}`, this.token) 
  }

}
