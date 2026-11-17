import { Component, OnInit } from '@angular/core';
import { Editora } from '../../models/editora';
import { Livro } from '../../models/livro';
import { ControleEditoraService } from '../../services/controle-editora.service';
import { ControleLivrosService } from '../../services/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    if (confirm('Deseja realmente excluir este livro?')) {
      this.servLivros.excluir(codigo);
      this.livros = this.servLivros.obterLivros();
    }
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
