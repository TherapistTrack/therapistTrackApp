db = db.getSiblingDB('therapisttrack')

db.createCollection('FileTemplate')

db.runCommand({
  collMod: 'FileTemplate',
  validator: {
    $jsonSchema: {
      //bsonType: 'object', /*Aqui me da error, no entiendo el porque */
      required: ['doctor', 'lastUpdate', 'fields'],
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
            required: [
                "name", 
                "category", 
                "location", 
            ],
            properties: {
              name: {
                bsonType: 'string',
                description: 'Name of the field property'
              },
              category: {
                bsonType: {},
                description: "array of diferents categories that the file can be"
              },
              location: {},
              required: {
                bsonType: 'bool',
                description: 'Orders if this field is required or not'
              },
              required: {
                bsonType: 'bool',
                description: 'Orders if this field is required or not'
              },
            }
          }
        }
      }
    }
  },
  validationLevel: 'moderate'
})