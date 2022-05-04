import { BaseModel } from "./baseModel";


export interface CidadeModel extends BaseModel {
    nomeCidade: string;
    estado: string;
}