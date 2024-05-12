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
        'names',
        'lastNames',
        'phones',
        'rol',
        'roleDependentInfo'
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
        names: {
          bsonType: 'string',
          description: 'User names'
        },
        lastNames: {
          bsonType: 'string',
          description: 'User lastnames'
        },
        mails: {
          bsonType: 'array',
          description: 'Mails to contact this user',
          items: {
            bsonType: 'string'
          }
        },
        phones: {
          bsonType: 'array',
          description: 'Phones to contact this user',
          items: {
            bsonType: 'string'
          }
        },
        rol: {
          bsonType: 'objectId',
          description: "User's Rol on app"
        },
        roleDependentInfo: {
          bsonType: 'objectId',
          description: "Reference to user's info dependent of the role"
        }
      }
    }
  },
  validationLevel: 'moderate'
})
