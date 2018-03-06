import {Professor} from "./professor.model";

export class Disciplina {
  nome: string;
  descricao: string;
  codigo;
  professor: Professor;

  constructor(codigo, nome: string, professor: Professor, descricao?: string) {
    this.codigo=codigo;
    this.professor=professor;
    this.nome = nome;
    this.descricao = descricao;
  }
}
