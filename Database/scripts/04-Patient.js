db = db.getSiblingDB('therapisttrack')

db.createCollection('Patient')

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
          bsonType: 'array',
          description: 'collection of fields, of a patient.',
          items: {
            bsonType: 'object',
            required: ['name', 'type', 'value', 'required', 'description'],
            properties: {
              name: {
                bsonType: 'string',
                description: 'Name of the field property'
              },
              type: {
                bsonType: 'string',
                enum: [
                  'SHORT_TEXT',
                  'TEXT',
                  'DATE',
                  'NUMBER',
                  'FLOAT',
                  'CHOICE'
                ],
                description:
                  'Type of data that will be stored on this property (string, date...)'
              },
              // OPTIONAL
              options: {
                bsonType: 'array',
                description:
                  "if type propertie's = CHOICE, this field provides options that can be choosen",
                items: {
                  bsonType: 'string'
                }
              },
              value: {},
              required: {
                bsonType: 'bool',
                description: 'Orders if this field is required or not'
              },
              // OPTIONAL
              description: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  },
  validationLevel: 'moderate'
})
