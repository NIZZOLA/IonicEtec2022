import { BaseModel } from "./baseModel";

export interface TipoDeDespesaReceitaModel extends BaseModel {
    nome: string;
    receita: boolean;
    despesa: boolean;
}