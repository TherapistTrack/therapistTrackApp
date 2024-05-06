db = db.getSiblingDB('therapisttrack')

db.createCollection('Rol')

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

// Para el rol "Admin"
db.Rol.insertMany([
  {
    name: 'Admin',
    permissions: [
      {
        collection: 'User',
        operations: ['CREATE', 'READ', 'UPDATE']
      },
      {
        collection: 'Rol',
        operations: ['READ', 'UPDATE']
      }
    ]
  },

  {
    name: 'Doctor',
    permissions: [
      {
        collection: 'Patient',
        operations: ['CREATE', 'READ', 'UPDATE', 'DELETE']
      },
      {
        collection: 'Expedient',
        operations: ['CREATE', 'READ', 'UPDATE', 'DELETE']
      },
      {
        collection: 'File',
        operations: ['CREATE', 'READ', 'UPDATE', 'DELETE']
      }
    ]
  },
  {
    name: 'Assistant',
    permissions: [
      {
        collection: 'Patient',
        operations: ['READ', 'UPDATE']
      },
      {
        collection: 'Expedient',
        operations: ['READ']
      },
      {
        collection: 'File',
        operations: ['READ']
      }
    ]
  }
])
