export interface IPaisRead {
  id: number;
  nombre: string;
  descripcion?: string;
}

export interface IPaisRequest {
  nombre: string;
  descripcion?: string;
}

export interface IPaisDelete {
  id: number;
}
