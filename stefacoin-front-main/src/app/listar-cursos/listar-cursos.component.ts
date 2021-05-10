import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  curso: any

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {

    this.curso = this.cursoService.listar()
  }

}
