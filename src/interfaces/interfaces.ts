
export interface IRotas {
  id?: number;
  transportadora?: string;
  descricao: string;
  localPartida: string;
  destino: string;
  saida: string;
  chegada: string;
}

export interface ITransportadora {
  id?: number;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  sitio: string;
}