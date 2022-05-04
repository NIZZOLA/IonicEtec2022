import { ClienteFornecedorModel } from "./clienteFornecedorModel";
import { BaseModel } from "./baseModel";

export interface ContatoModel extends BaseModel {
    clienteId: string;
    clienteFornecedor: ClienteFornecedorModel;
    nome: string;
    funcao: string;
    email: string;
    telefone: string;
}