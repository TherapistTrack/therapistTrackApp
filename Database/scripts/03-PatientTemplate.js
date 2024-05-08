db = db.getSiblingDB('therapisttrack')

db.createCollection('PatientTemplate')

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
