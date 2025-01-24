// Interfaz donde las claves son los códigos de los departamentos y los valores son arreglos nombres de municipios
export interface iMunicipalityList {
    [department: string]: string[];
}

// Interfaz donde las claves son los códigos de los departamentos y los valores son los nombres de los departamentos
export interface iDepartmentList {
    [codDepto: string]: string
}

// Interfaz que representa el formulario de orden
export interface IOrderForm {
    collectionAddress: string;
    scheduledDate: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    recipientAddress: string;
    department: string;
    municipality: string;
    referencePoint: string;
    instructions: string;
    packages: iPackage[];
}

export interface iPackage {
    length: string;
    height: string;
    width: string;
    weightPounds: string;
    content: string;
}