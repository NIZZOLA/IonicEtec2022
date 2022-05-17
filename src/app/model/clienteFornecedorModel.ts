import { BaseModel } from "./baseModel";

export interface ClienteFornecedorModel extends BaseModel {

    cliente:boolean;
    fornecedor: boolean;

    fisica: boolean;

    nome: string;
    cpf: string;
    dataDeNascimento: string | null;

    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    optanteDoSimples: boolean;
    observacoes: string;
}
