import { BaseModel } from "./basemodel";

export interface PessoaJuridicaModel extends BaseModel {
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    optanteDoSimples: boolean;
    observacoes: string;
}