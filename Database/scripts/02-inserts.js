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

db.Usuario.insertOne({
   usuario: "Doctor",
   contraseña: "123",
   salt: "123",
   nombre: "Gerson",
   apellidos: "Kou",
   telefonos: ["123456789", "987654321"],
   rolId: db.Rol.findOne({ nombre: "Doctor" })._id,
   Especialidad: "Psiquiatria",
   Correos: ["ejemplo@correo.com", "ejemplo2@correo.com"],
   fechaInicio: "2024-01-01",
   fechaFinal: "2024-12-31",
   dpi: "1234567890101"
});


db.Archivo.insertOne({
   nombre: "Documento de ejemplo",
   categoria: "Documentos",
   localizacion: "/ruta/a/documento",
   metadata: {
      nombre:"nombre",
      valor:"any",
   },
   no_paginas: 10,
   fecha_creacion: "2024-05-01",
   fecha_sesion: "2024-05-01",
   etiquetas: "ejemplo"
});
