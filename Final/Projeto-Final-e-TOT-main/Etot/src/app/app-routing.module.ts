import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoCursosComponent } from './aluno-cursos/aluno-cursos.component';
import { ApoiadoresComponent } from './apoiadores/apoiadores.component';
import { AreaLoginComponent } from './area-login/area-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CursosComponent } from './cursos/cursos.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'faleconosco', component: FaleConoscoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'area-instrutor', component: AreaLoginComponent},
  {path: 'cadastro-categoria', component: PostCategoriaComponent},
  {path: 'editar-categoria/:id', component: PutCategoriaComponent},
  {path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
  {path: 'editar-produto/:id', component: PutProdutoComponent},
  {path: 'delete-produto/:id', component: DeleteProdutoComponent},
  {path: 'aluno-cursos', component: AlunoCursosComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'social', component: SocialComponent},
  {path: 'apoiadores', component: ApoiadoresComponent},
  {path: 'manutencao', component: ManutencaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
