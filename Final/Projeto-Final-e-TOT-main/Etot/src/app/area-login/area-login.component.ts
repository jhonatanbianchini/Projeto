import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { AlertsService } from '../service/alerts.service';

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

  
  nivel: string

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertsService

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


  publicar() {
    this.categoria.id = this.IdCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.professor == null || this.produto.categoria == null) {
      this.alert.showAlertDanger('Preencha todos os campos antes de cadastrar!')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.alert.showAlertSuccess('Curso cadastrado com sucesso!')
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



  escolhaNivel(event) {
    this.nivel = event.target.value
  }

//Categoria metodos


cadastrar(){
  if(this.categoria.titulo == null){
    this.alert.showAlertDanger('Preencha o campo corretamente')
  } else {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      this.router.navigate[('/area-login')]
      this.alert.showAlertSuccess("Categoria cadastrada com sucesso!")
    })
  }
}

}

