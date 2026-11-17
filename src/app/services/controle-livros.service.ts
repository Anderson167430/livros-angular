import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';

@Injectable()
export class ControleLivrosService {
  livros: Array<Livro> = [
    new Livro(
      1,
      3,
      'Use a Cabeça! Java',
      'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      ['Kathy Sierra', 'Bert Bates']
    ),
    new Livro(
      2,
      2,
      'Java, como Programar',
      'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.',
      ['Paul Deitel', 'Harvey Deitel']
    ),
    new Livro(
      3,
      1,
      'Lógica de Programação',
      'Um guia introdutório para aprender os fundamentos da lógica e da programação.',
      ['André Luiz Villar']
    )
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(item => item.codigo))
      : 0;
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
