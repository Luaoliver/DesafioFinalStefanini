import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service'

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  aluno: any

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {

    this.aluno = this.alunoService.listar()
    
  }

}
