import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {
  
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  
  constructor(
    private categoriaService: CategoriaService,
    private router: Router

  ) { }

  ngOnInit() {
    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdTema(){
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }


  cadastrar(){
    if(this.categoria.titulo == null){
      alert('Preencha o campo corretamente')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.router.navigate[('/area-login')]
        alert ("Categoria cadastrada com sucesso!")
      })
    }
  }

}


