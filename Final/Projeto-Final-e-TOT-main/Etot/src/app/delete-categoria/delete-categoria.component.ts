import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService,
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id:number = this.route.snapshot.params["id"];
    this.findByIdCategoria(id)

  }

  findByIdCategoria(id:number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    });
  }

  btnSim() {
    if (this.categoria.produto.length != 0) {
      alert('Essa categoria não pode ser excluida, pois já pertence a um produto.')
      this.router.navigate(['/manutencao'])
    } else {
      this.categoriaService.deleteCategoria(this.categoria.id).subscribe(() => {
        
        this.alert.showAlertSuccess('Categoria apagada com sucesso!')
        this.router.navigate(['/manutencao'])
      })
    }

  }

  btnNao() {
    this.router.navigate(['/manutencao'])
  }

}
