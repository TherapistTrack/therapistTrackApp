db = db.getSiblingDB('therapisttrack')

db.createCollection('User')

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
