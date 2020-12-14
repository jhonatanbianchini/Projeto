import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  produto: Produto = new Produto ()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  IdCategoria: number

  user: User = new User()
  
  

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
   }
  

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertsService,
    private userService: AuthService   

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategorias()
    

    }
  

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp;
    })
  }


  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp;
    })
  }

  findByIdCategoria (){
    this.categoriaService.getByIdCategoria(this.IdCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }

  comprar() {
    let ok = false
    let token = environment.token
    
    if (token == '') {
      ok = true
      this.alert.showAlertDanger("Para comprar este curso, faça o login.")
    }else {
      this.alert.showAlertSuccess("Curso comprado com sucesso e enviado para seu e-mail!")
     }
     return ok
    
    }
    
  }

