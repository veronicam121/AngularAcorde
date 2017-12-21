export interface Ipersona {
    nombre: string;
    apellido: string;
    fechanac: Date;
    pais?: string;
    email?: string;
    sexo: 'Femenino'|'Masculino';
    calcularEdad: (fecha: Date) => number;
}




