import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-area-do-professor',
  templateUrl: './area-do-professor.component.html',
  styleUrls: ['./area-do-professor.component.css']
})
export class AreaDoProfessorComponent implements OnInit {

  usuario: Usuario;
  
  constructor() { }

  ngOnInit(): void {
  }

}
