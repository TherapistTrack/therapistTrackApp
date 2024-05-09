
db = db.getSiblingDB('therapisttrack')

db.createCollection('Record');

db.runCommand({
    collMod:"Record",
    validator: { $jsonSchema: {
        bsonType: "object",
        required: [ "patient", "doctor", "created_at", "inquiries_number"],
        properties: {
            patient: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            doctor: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            created_at: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            inquiries_number: {
                bsonType: "number",
                description: "must be a number and is required"
            },
        }
    } },
    validationLevel: "moderate"
});
