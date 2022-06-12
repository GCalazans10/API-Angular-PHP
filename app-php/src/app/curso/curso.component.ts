import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {

  //URL XAMPP
  url = "http://localhost/api/php/";

  //Vetor do Curso
  vetor: Curso[] | undefined;

  //Construtor
  constructor (private http:HttpClient){

  }


// Inicializador
  ngOnInit(): void {
    
  }
  //Cadastar
  cadastro():void{
    alert("CADASTRO");
  }

  //Seleção
  selecao():void{
    alert("SELEÇÃO");
  }

  //Alterar
  alterar():void{
    alert("ALTERAR");
  }

  //Remover
  remover():void{
    alert("REMOVER");
  }
}
