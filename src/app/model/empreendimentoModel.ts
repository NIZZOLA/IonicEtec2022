import { ClienteFornecedorModel } from "./clienteFornecedorModel";
import { EnderecoModel } from "./enderecoModel";
import { BaseModel } from "./baseModel";

export interface EmpreendimentoModel extends BaseModel {
    nome: string;
    clienteId: string | null;
    cliente: ClienteFornecedorModel;
    dataOrcamento: string;
    dataInicio: string;
    dataPrevistaTermino: string;
    dataTermino: string | null;
    enderecos: EnderecoModel[];
}