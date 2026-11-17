import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../../models/editora';
import { Livro } from '../../models/livro';
import { ControleEditoraService } from '../../services/controle-editora.service';
import { ControleLivrosService } from '../../services/controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  autoresForm = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm
      .split('\n')
      .map(autor => autor.trim())
      .filter(autor => autor.length > 0);

    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
