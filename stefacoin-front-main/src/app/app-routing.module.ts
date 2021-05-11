import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './pages/private/home/home.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PaginaNaoEncontradaComponent } from './pages/public/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { AreaDoProfessorComponent } from './area-do-professor/area-do-professor.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component'
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component'
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component'



const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent,
  },
  {
    path: 'listar-alunos',
    component: ListarAlunosComponent,
  },
  {
    path: 'listar-professores',
    component: ListarProfessoresComponent,
  },
  {
    path: 'listar-cursos',
    component: ListarCursosComponent,
  },
  {
    path:'area-do-professor',
    canActivate: [AuthGuardService],
    component: AreaDoProfessorComponent,
  },
  {
    path: 'nova-conta',
    component: CadastroComponent,
  },
  {
    path: 'nova-conta/professor',
    component: CadastrarProfessorComponent,
  },
  {
    path: 'nova-conta/aluno',
    component: CadastrarAlunoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
