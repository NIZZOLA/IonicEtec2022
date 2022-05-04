import { ClienteFornecedorModel } from "./clienteFornecedorModel";
import { EmpreendimentoModel } from "./empreendimentoModel";
import { CidadeModel } from "./cidadeModel";
import { BaseModel } from "./baseModel";

export interface EnderecoModel extends BaseModel {
    clienteFornecedorId: string | null;
    clienteFornecedor: ClienteFornecedorModel;
    empreendimentoId: string | null;
    empreendimento: EmpreendimentoModel | null;
    logradouro: string;
    numero: number;
    bairro: string;
    cidadeId: string | null;
    cidade: CidadeModel;
    cep: string;
    tipo: string;
    latitude: number;
    longitude: number;
}