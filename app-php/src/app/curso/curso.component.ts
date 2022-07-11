import { CursoService } from './curso.service';
import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  vetor!: Curso[];

  curso = new Curso();

  constructor(private curso_servico:CursoService) {}



  ngOnInit(): void {
    this.selecao();
  }
  //Cadastro
  cadastro():void{
    alert("Cadastro");
  }
  //Seceção
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) =>{
        this.vetor = res;
      }
    )
  }
  //Alterar
  alterar():void{
    alert("alterar");
  }
    //Cadastro
  remover():void{
    alert("remover");

  }
}
