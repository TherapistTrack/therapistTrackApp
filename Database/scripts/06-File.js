db = db.getSiblingDB('therapisttrack')

db.createCollection('File')

db.runCommand({
  collMod: 'File',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'name',
        'category',
        'location',
        'pages',
        'created_at',
        'FILE_TEMPLATE',
        'metadata'
      ],
      properties: {
        name: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        category: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        location: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        pages: {
          bsonType: 'number',
          description: 'must be a number and is required'
        },
        created_at: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        FILE_TEMPLATE: {
          bsonType: 'objectId'
        },
        metadata: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['name', 'type', 'value', 'required', 'description'],
            properties: {
              name: {
                bsonType: 'string',
                description: 'must be a string and is required'
              },
              type: {
                bsonType: 'string',
                enum: ['SHORT_TEXT', 'TEXT', 'DATE', 'NUMBER', 'FLOAT'],
                description:
                  'Type of data that will be stored on this property (string, date...)'
              },
              options: {
                bsonType: 'array',
                items: {
                  bsonType: 'string'
                }
              },
              value: {},
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
