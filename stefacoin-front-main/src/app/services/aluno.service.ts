import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //responsavel por fazer consulta em API

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  listar() {
    return ['Aluno Um', 'Aluno Dois']
  }
}
