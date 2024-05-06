db = db.getSiblingDB('therapisttrack');

db.createCollection("Rol");
db.createCollection("Usuario");


db.runCommand({
    collMod: "Rol",
    validator: { $jsonSchema: {
        bsonType: "object",
        required: [ "nombre", "permisos"],
        properties: {
            nombre: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            edad: {
                bsonType: "object",
                description: "must be a object and is required"
            },
        }
    } },
    validationLevel: "moderate"
} );

db.runCommand({
    collMod: "Usuario",
    validator: { $jsonSchema: {
        bsonType: "object",
        required: [ "usuario", "contraseña", "salt", "nombre", "apellidos", "telefonos", "rol"],
        properties: {
            usuario: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            contraseña: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            salt: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            telefonos: {
                bsonType: "array",
                description: "must be a array and is required"
            },
            rol: {
                bsonType: "object",
                description: "must be a object and is required"
            },
            Especialidad: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            Correos: {
                bsonType: "array",
                description: "must be a array and is required"
            },
            fechaInicio: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            fechaFinal: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            dpi: {
                bsonType: "string",
                description: "must be a string and is required"
            },
        }
    } },
    validationLevel: "moderate"
} );





/**
    db.createCollection('Paciente');
    db.createCollection('Hijos');
    db.createCollection('Escolaridad');
    db.createCollection('Doctor');
    db.createCollection('PDF');
    db.createCollection('metadata');
    db.createCollection('Expediente');
    db.createCollection('Categorias');
    db.createCollection('Etiquetas');
    db.createCollection('Documentos');
 */
