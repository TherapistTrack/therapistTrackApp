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
          bsonType: 'object',
          description: 'collection of fields, of a patient.'
        }
      }
    }
  },
  validationLevel: 'moderate'
})
