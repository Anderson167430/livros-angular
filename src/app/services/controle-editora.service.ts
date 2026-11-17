import { Injectable } from '@angular/core';
import { Editora } from '../models/editora';

@Injectable()
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Addison Wesley' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Alta Books' },
    { codEditora: 4, nome: 'Bookman' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.filter(
      editora => editora.codEditora === codEditora
    );
    return editoraEncontrada.length > 0 ? editoraEncontrada[0].nome : 'Editora não encontrada';
  }
}
