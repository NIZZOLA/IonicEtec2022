import { PessoaModel } from "./pessoaModel";
import { PessoaJuridicaModel } from "./pessoajuridicaModel";
import { ContatoModel } from "./contatoModel";
import { EnderecoModel } from "./enderecoModel";
import { BaseModel } from "./baseModel";

export interface ClienteFornecedorModel extends BaseModel {
    pessoaId: string | null;
    pessoaFisica: PessoaModel | null;
    pessoaJuridicaId: string | null;
    pessoaJuridica: PessoaJuridicaModel | null;
    cliente: boolean;
    fornecedor: boolean;
    contatos: ContatoModel[];
    enderecos: EnderecoModel[];
}



