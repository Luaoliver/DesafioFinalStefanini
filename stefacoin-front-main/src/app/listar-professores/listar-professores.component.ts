import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service'

@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.css']
})
export class ListarProfessoresComponent implements OnInit {

  professor: any

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {

    this.professor = this.professorService.listar()
  }

}
