
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

export interface IVeiculos {
  id?: number;
  rota?: string;
  descricao: string;
  placa: string;
  assento: string;
}

export interface IUsuarios {
  id?: number;
  nome: string;
  cpf: string;
  endereco: string;
  email: string;
  telefone: string;
  login: string;
  senha: string;
}