db = db.getSiblingDB('therapisttrack')

db.createCollection('PatientTemplate')

db.runCommand({
  collMod: 'PatientTemplate',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['lastUpdate', 'fields'],
      properties: {
        lastUpdate: {
          bsonType: 'date',
          description: 'Last time the doctor updated the template'
        },
        fields: {
          bsonType: 'array',
          description: 'Fields that a patient most have.',
          items: {
            bsonType: 'object',
            required: ['name', 'type', 'required'],
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
              options: {
                bsonType: 'array',
                description:
                  "if type propertie's = CHOICE, this field provides options that can be choosen",
                items: {
                  bsonType: 'string'
                }
              },
              required: {
                bsonType: 'bool',
                description: 'Orders if this field is required or not'
              },
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
