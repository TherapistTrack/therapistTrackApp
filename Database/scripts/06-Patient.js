db = db.getSiblingDB('therapisttrack')

db.createCollection('Patient')

db.runCommand({
  collMod: 'Patient',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['record', 'names', 'lastNames', 'fields'],
      properties: {
        record: {
          bsonType: 'objectId',
          description: 'Reference to the record this file belongs to'
        },
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
        fields: {
          bsonType: 'array',
          description: 'Collection of fields, of a patient.',
          items: {
            bsonType: 'object',
            required: ['name', 'type', 'value', 'required'],
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
              }
            }
          }
        }
      }
    }
  },
  validationLevel: 'moderate'
})
