db = db.getSiblingDB('therapisttrack')

db.createCollection('Rol')
db.createCollection('User')
db.createCollection('PatientTemplate')
db.createCollection('Patient')

db.runCommand({
  collMod: 'Rol',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'permisos'],
      properties: {
        nombre: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        edad: {
          bsonType: 'object',
          description: 'must be a object and is required'
        }
      }
    }
  },
  validationLevel: 'moderate'
})

db.runCommand({
  collMod: 'Usuario',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'usuario',
        'contraseña',
        'salt',
        'nombre',
        'apellidos',
        'telefonos',
        'rol'
      ],
      properties: {
        usuario: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        contraseña: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        salt: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        telefonos: {
          bsonType: 'array',
          description: 'must be a array and is required'
        },
        rol: {
          bsonType: 'object',
          description: 'must be a object and is required'
        },
        Especialidad: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        Correos: {
          bsonType: 'array',
          description: 'must be a array and is required'
        },
        fechaInicio: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        fechaFinal: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        dpi: {
          bsonType: 'string',
          description: 'must be a string and is required'
        }
      }
    }
  },
  validationLevel: 'moderate'
})

db.runCommand({
  collMod: 'PatientTemplate',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['doctor', 'lastUpdatd', 'fields'],
      properties: {
        doctor: {
          bsonType: 'objectId',
          description: 'The Doctor who owns this template'
        },
        lastUpdate: {
          bsonType: 'date',
          description: 'Last time the doctor updated the template'
        },
        fields: {
          bsonType: 'array',
          description: 'Fields that a patient most have.',
          items: {
            bsonType: 'object',
            required: ['name', 'type', 'value'],
            properties: {
              name: {
                bsonType: 'string',
                description: 'Name of the field property'
              },
              type: {
                bsonType: 'string',
                enum: ['SHORT_TEXT', 'TEXT', 'DATE', 'NUMBER', 'FLOAT'],
                description:
                  'Type of data that will be stored on this property (string, date...)'
              },
              value: {}
            }
          }
        }
      }
    }
  },
  validationLevel: 'moderate'
})

db.runCommand({
  collMod: 'Patient',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'names',
        'lastNames',
        'lastUpdated',
        'PATIENT_TEMPLATE',
        'fields'
      ],
      properties: {
        names: {
          bsonType: 'string',
          description: "Patient's names"
        },
        lastNames: {
          bsonType: 'string',
          description: "Patient's lastNames"
        },
        lastUpdated: {
          bsonType: 'date',
          description: 'Last time the data of this patient was updated'
        },
        PATIENT_TEMPLATE: {
          bsonType: 'objectId',
          description: 'References PatientTemplate Id'
        },
        fields: {
          bsonType: 'object',
          description: 'collection of fields, of a patient.'
        }
      }
    }
  },
  validationLevel: 'moderate'
})
