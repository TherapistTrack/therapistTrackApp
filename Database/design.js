// Paciente, expedientes, archivos

// ROL 
{
    nombre: "Admin";
    permisos : [
        {
            collecion : "usuario",
            permisos: ["CREATE", "READ", "UPDATE"]
        },
        {
            collecion : "rol",
            permisos: ["READ", "UPDATE"]
        }
    ]
    nombre: "Doctor";
    permisos : [
        {
            collecion : "paciente",
            permisos: ["CREATE", "READ", "UPDATE", "DELETE"]
        },
        {
            collecion : "expediente",
            permisos: ["CREATE", "READ", "UPDATE", "DELETE"]
        },
        {
            collecion : "archivo",
            permisos: ["CREATE", "READ", "UPDATE", "DELETE"]
        }
    ]
    nombre: "Asistente";
    permisos : [
        {
            collecion : "paciente",
            permisos: ["READ", "UPDATE"]
        },
        {
            collecion : "expediente",
            permisos: ["READ"]
        },
        {
            collecion : "archivo",
            permisos: ["READ"]
        }
    ]
}

// Usuario
{
    usuario: "",
    contraseña: "",
    salt: "", 
    nombre: "",
    apellidos: ""
    telefonos: [ "", "", ""]
    rol: Object.ID(),

    // Doctor:
    noColegiado: "",
    Especialidad: "",
    Correos: ["", ""],

    //asistente
    Correos: ['',''],
    fechaInicio: '',
    fechaFinal: '',
    dpi: '',    

}


