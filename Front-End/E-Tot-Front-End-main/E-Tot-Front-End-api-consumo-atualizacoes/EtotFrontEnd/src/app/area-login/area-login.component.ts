import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-area-login',
  templateUrl: './area-login.component.html',
  styleUrls: ['./area-login.component.css']
})
export class AreaLoginComponent implements OnInit {

  produto: Produto = new Produto ()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  IdCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategorias()
    let usuario = localStorage.getItem("usuario")
    if(usuario.indexOf('instrutor') == -1){
      alert('Você não tem permissão para acessar essa rota!')
      this.router.navigate(['/home'])
    }
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp;
    })
  }


  publicar() {
    this.categoria.id = this.IdCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.professor == null || this.produto.categoria == null) {
      alert('Preencha todos os campos antes de cadastrar!')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        alert('Postagem realizada com sucesso!')
        this.findAllProdutos()
      })
    }
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


}
