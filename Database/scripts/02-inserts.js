// Para el rol "Admin"
db.Rol.insertOne({
   nombre: "Admin",
   permisos: [
      {
         colleccion: "usuario",
         permisos: ["CREATE", "READ", "UPDATE"]
      },
      {
         colleccion: "rol",
         permisos: ["READ", "UPDATE"]
      }
   ]
});

// Para el rol "Doctor"
db.Rol.insertOne({
   nombre: "Doctor",
   permisos: [
      {
         colleccion: "paciente",
         permisos: ["CREATE", "READ", "UPDATE", "DELETE"]
      },
      {
         colleccion: "expediente",
         permisos: ["CREATE", "READ", "UPDATE", "DELETE"]
      },
      {
         colleccion: "archivo",
         permisos: ["CREATE", "READ", "UPDATE", "DELETE"]
      }
   ]
});

// Para el rol "Asistente"
db.Rol.insertOne({
   nombre: "Asistente",
   permisos: [
      {
         colleccion: "paciente",
         permisos: ["READ", "UPDATE"]
      },
      {
         colleccion: "expediente",
         permisos: ["READ"]
      },
      {
         colleccion: "archivo",
         permisos: ["READ"]
      }
   ]
});





/**
 * 
db = db.getSiblingDB('therapisttrack')
db.runCommand( {
   collMod: "Paciente",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre", "apellido", "fecha_nacimiento", "edad_primerConsulta", "estadoCivil", "tiempo", "hijos", "vivenJuntos", "referido", "telefonos" ],
      properties: {
         nombre: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         apellido: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         nombre_pareja: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         fecha_nacimiento: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         edad_primerConsulta: {
            bsonType: int,
            description: "must be a int and is required"
         },
         estadoCivil: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         tiempo: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         vivenJuntos: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         referido: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         telefonos: {
            bsonType: [int],
            description: "must be a int and is required"
         },
         nombre_tutor: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         apellidos_tutor: {
            bsonType: ["string"],
            description: "must be a string and is required"
         },
         telefonos_tutor: {
            bsonType: [int],
            description: "must be a int and is required"
         },
         edades_tutor: {
            bsonType: [int],
            description: "must be a int and is required"
         },
         escolaridad_tutor: {
            bsonType: ["string"],
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Hijos",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre", "edad", "escolaridad"],
      properties: {
         nombre: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         edad: {
            bsonType: int,
            description: "must be a int and is required"
         },
         escolaridad: {
            bsonType: "string",
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Escolaridad",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "año", "colegio/universidad", "licenciatura"],
      properties: {
         año: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         colegio/universidad: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         licenciatura: {
            bsonType: "string",
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Doctor",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "no_colegiado", "nombres", "apellidos", "telefonos", "especialdiad", "correos"],
      properties: {
         no_colegiado: {
            bsonType: int,
            description: "must be a int and is required"
         },
         nombres: {
            bsonType: ["string"],
            description: "must be a string and is required"
         },
         apellidos: {
            bsonType: ["string"],
            description: "must be a string and is required"
         },
         telefonos: {
            bsonType: ["int"],
            description: "must be a int and is required"
         },
         especialidad: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         correos: {
            bsonType: ["string"],
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "PDF",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre_archivo", "categoria", "localizacion", "metadata", "no_paginas", "fecha_creacion", "no_sesion", "fecha_sesion", "etiquetas"],
      properties: {
         nombre_archivo: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         categoria: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         nombre_pareja: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         localizacion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         metadata: {
            db.runCommand( {
                collMod: "metadata",
                validator: { $jsonSchema: {
                    bsonType: "object",
                    required: [ "nombre", "valor"],
                    properties: {
                        nombre: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        valor: {
                            bsonType: "any",
                            description: "must be a any and is required"
                        },
                    }
                } },
                validationLevel: "moderate"
            } );

         },
         no_paginas: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         fecha_creacion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         no_sesion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         fecha_sesion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         etiquetas: {
            bsonType: [int],
            description: "must be a int and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Paciente",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre", "apellido", "fecha_nacimiento", "edad_primerConsulta", "estadoCivil", "tiempo", "no_sesion", "fecha_sesion", "etiquetas"],
      properties: {
         nombre: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         apellido: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         nombre_pareja: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         fecha_nacimiento: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         edad_primerConsulta: {
            bsonType: int,
            description: "must be a int and is required"
         },
         estadoCivil: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         no_sesion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         fecha_sesion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         etiquetas: {
            bsonType: "string",
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Expediente",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "paciente", "doctor", "fecha_creacion", "cantidad_consultas"],
      properties: {
         paciente: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         doctor: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         nombre_pareja: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         fecha_creacion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         cantidad_consultas: {
            bsonType: int,
            description: "must be a int and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Categorias",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "sesion", "resultado_pruebas", "informes"],
      properties: {
         sesion: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         resultado_pruebas: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         informes: {
            bsonType: "string",
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Etiquetas",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "nombre" ],
      properties: {
         nombre: {
            bsonType: "string",
            description: "must be a string and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );

db.runCommand( {
   collMod: "Documentos",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "categoria", "adultos", "niños", "parejas"],
      properties: {
         categorias: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         adultos: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         nombre_pareja: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         niños: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         parejas: {
            bsonType: int,
            description: "must be a int and is required"
         },
      }
   } },
   validationLevel: "moderate"
} );
 */
