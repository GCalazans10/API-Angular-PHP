import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  vetor: Curso[];
constructor(private curso_servico: CursoService){}
 
ngOnInit() {  
  this.selecao();
  
}
 
selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res:Curso[]) =>{
        this.vetor = res;
      }  )

}
cadastro(){
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
       (res: Curso[])=> {
        //Adiciona dados ao vetor
        this.vetor = res;
        //Limpa os atributos
        this.curso.nomeCurso = null
        this.curso.valorCurso = null

        //Atualizar a listagem
        this.selecao();

       }
    )
  }
remover(){
      this.curso_servico.removerCurso(this.curso).subscribe(
          (res : Curso[]) =>{
       this.vetor = res;
       this.curso.nomeCurso = null;
       this.curso.valorCurso = null;
      }
    )
  }
selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

    alterar(){
    this.curso_servico.atualizarCurso(this.curso).subscribe(
      (res) => {
        //Atualizar Vetor
        this.vetor =res;
        //Limpar os valores do objeto
        this.curso.nomeCurso= null;
        this.curso.valorCurso= null;
        //Atualiza a Listagem
        this.selecao();
      }
    )
  }
  }


 