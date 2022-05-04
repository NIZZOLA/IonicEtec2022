import { EmpreendimentoModel } from "./empreendimentoModel";
import { TipoDeDespesaReceitaModel } from "./tipoDeDespesaReceitaModel";
import { TipoDePagamentoModel } from "./tipoDePagamentoModel";
import { BaseModel } from "./baseModel";

export interface ContaModel extends BaseModel {
    empreendimentoId: string | null;
    empreendimento: EmpreendimentoModel;
    vencimento: string;
    dataDoPagamento: string | null;
    dataDaCompra: string | null;
    valor: number;
    valorPago: number;
    numeroDoDocumento: string;
    observacoes: string;
    tipoDeDespesaId: string | null;
    tipoDeDespesaReceita: TipoDeDespesaReceitaModel;
    tipoDePagamentoId: string | null;
    tipoDePagamento: TipoDePagamentoModel;
}