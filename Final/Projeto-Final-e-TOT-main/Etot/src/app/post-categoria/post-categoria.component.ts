import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertsService } from '../service/alerts.service';
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
    private router: Router,
    private alert: AlertsService,
  ) { }

  ngOnInit() {
    this.findAllCategorias()
    window.scroll(0,0)
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


