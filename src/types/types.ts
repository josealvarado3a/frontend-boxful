// Interfaz donde las claves son los códigos de los departamentos y los valores son arreglos nombres de municipios
export interface iMunicipalityList {
    [department: string]: string[];
}

export interface iDepartmentList {
    [codDepto: string]: string
}