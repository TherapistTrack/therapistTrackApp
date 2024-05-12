db = db.getSiblingDB('therapisttrack')

db.createCollection('File');

db.runCommand({
    collMod:"File",
    validator: { 
        $jsonSchema: {
        bsonType: "object",
        required: [ 
            "name", 
            "category", 
            "location", 
            "metadata", 
            "pages", 
            "created_at", 
            "labels"
        ],
        properties: {
            name: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            category: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            location: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            metadata: {
                bsonType: "array",
                items: {
                    bsonType: "object",
                    properties: {
                        name: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        value: {
                            bsonType: "object",
                            description: "must be a object and is required"
                        },
                        type: {
                            bsonType: 'string',
                            enum: ['SHORT_TEXT', 'TEXT', 'DATE', 'NUMBER', 'FLOAT'],
                            description: 'Type of data that will be stored on this property (string, date...)'
                        },
                        required: {
                            bsonType: 'bool',
                            description: 'Orders if this field is required or not'
                        },
                        description: {
                            bsonType: 'string',
                        }
                    }
                }
            },
            pages: {
                bsonType: "number",
                description: "must be a number and is required"
            },
            created_at: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            labels: {
                bsonType: "string",
                description: "must be a string and is required"
            },
        }
    } },
    validationLevel: "moderate"
});