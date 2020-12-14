import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertsService } from '../service/alerts.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  IdCategoria: number

  nivel: string

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService,
    
   
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.idProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProduto)
    this.findAllCategorias()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  salvar(){
    this.categoria.id = this.IdCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/area-instrutor'])
      this.alert.showAlertSuccess('Curso alterado com sucesso')
    }, err => {
      if (err.status == '500'){
            this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

 findByIdCategoria() {
   this.categoriaService.getByIdCategoria(this.IdCategoria).subscribe((resp: Categoria) => {
     this.categoria = resp;
   })
 }


 escolhaNivel(event) {
  this.nivel = event.target.value
}
}
