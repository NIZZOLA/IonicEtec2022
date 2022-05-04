import { BaseModel } from "./baseModel";

export interface PessoaModel extends BaseModel {
    nome: string;
    cpf: string;
    dataDeNascimento: string | null;
}
