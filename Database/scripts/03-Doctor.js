db = db.getSiblingDB('therapisttrack')

db.createCollection('Doctor')

db.runCommand({
  collMod: 'Doctor',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'user',
        'collegiateNumber',
        'specialty',
        'patientTemplate',
        'fileTemplate'
      ],
      properties: {
        user: {
          bsonType: 'objectId',
          description:
            'Reference to User collection this doctor has credential into'
        },
        collegiateNumber: {
          bsonType: 'string'
        },
        specialty: {
          bsonType: 'string'
        },
        patientTemplate: {
          bsonType: 'objectId',
          description:
            'Reference to the template of fileds a Patient should have'
        },
        fileTemplate: {
          bsonType: 'objectId',
          description: 'Reference to the template of fileds a file should have'
        }
      }
    }
  },
  validationLevel: 'moderate'
})
