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
      required: ['name', 'permissions'],
      properties: {
        name: {
          bsonType: 'string',
          description: "Role's name"
        },
        permissions: {
          bsonType: 'array',
          items: {
            type: 'object',
            description: 'Representation of a permission on a collection',
            required: ['collection', 'operations'],
            properties: {
              collection: {
                bsonType: 'string',
                description:
                  'Name of the collection in which permissions are defined'
              },
              operations: {
                bsonType: 'array',
                items: {
                  bsonType: 'string',
                  enum: ['CREATE', 'READ', 'UPDATE', 'DELETE']
                }
              }
            }
          }
        }
      }
    }
  },
  validationLevel: 'moderate'
})

db.runCommand({
  collMod: 'User',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'username',
        'password',
        'salt',
        'name',
        'lastName',
        'phones',
        'rol',
        'mails'
      ],
      properties: {
        username: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        salt: {
          bsonType: 'string'
        },
        name: {
          bsonType: 'string',
          description: 'User names'
        },
        lastName: {
          bsonType: 'string',
          description: 'User lastnames'
        },
        phones: {
          bsonType: 'array',
          description: 'Phones to contact this user'
        },
        rol: {
          bsonType: 'objectId',
          description: "User's Rol on app"
        },
        mails: {
          bsonType: 'array',
          description: 'Mails to contact this user',
          items: {
            bsonType: 'string'
          }
        },
        // Doctor Data
        collegiateNumber: {
          bsonType: 'string',
          description: 'DPI equivalent for doctors'
        },
        specialty: {
          bsonType: 'string',
          description: "Doctor's Specialty"
        },
        // Assistant Data
        startDate: {
          bsonType: 'date',
          description: 'Date in which Assistant started to work'
        },
        endDate: {
          bsonType: 'date',
          description: 'Date in which Assistant end to work'
        },
        DPI: {
          bsonType: 'string',
          description: 'Assistant DPI'
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
