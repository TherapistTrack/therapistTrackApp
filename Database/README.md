<h1 align="center">📦 Database </h1>

The App uses Mongo DB as database. Following is the squema design and relation between documents. But first some notation convantions:

## Notation

1. **Required Fields** : When an field is obligatory, is preceded by ` • `. Ex: `• name`

2. **Foreign Keys**: Are references to documents of other collections. Are denoted as `<<CollectionName>>`. Ex: `<<Rol>>`

3. **Embed Document and Arrays of Documents**: Are denoted as :
   
   ```javascript
   <fieldName> : object
   {
      childAttribute : type
   }
   
   // EXAMPLE : 
   family : object
   {
      dad : string,
      mother : string
   }
   ```

# DB Schema Diagram

![](./DB_Diagram.png)

# Fields Dictionary

Below is a a list of examples of the JSON that is expected to be stored in each collection

### Rol

```javascript
{
    _id : ObjectId("1111"),
    name: "Admin",
    permissions: [
        {
            collection: "Record"        
            operations :["CREATE", "READ","UPDATE", "DELETE"]
        },
        {
            collection: "File"        
            operations :["CREATE", "DELETE"]
        }
    ]
}
```

### User

```javascript
{
    _id : ObjectId("1234")
    username: "Drayo",
    password: "kdfd8943#3adsf/v..asdf3", // Encripted
    salt : "SDFk3k3lsdfv", // Encripted
    names: "Johan Rodrigo",
    lastNames: "Rodriguez Rando",
    mails: ["email1@gmail.com", "hotmail2@hotmail.com"],
    phones: ["32232334", "44442222"],
    rol: ObjectId("dfd32cak32..54?123/") 
    // Reference to the _id Rol of Document.
    roleDependentInfo: ObjectId("asdfsv32;lk") 
    // Reference to the _id of a Doctor or Assistant Document.
}
```

### Doctor

```javascript
{
    user: ObjectId("dsafsdaf"),
    collegiateNumber: "41234",
    specialty: "family",
    patientTemplate: ObjectId(),
    fileTemplate: ObjectId()
}
```

### Assistant

```javascript
{
    user: ObjectId("dsafsdaf"),
    startDate: "2020-05-11",
    endDate: "2024-04-11",
    DPI: "421322004221"
}
```

### Record

```javascript
{
    patient: ObjectId("32kljv093l..ad"),
    doctor: ObjectId("dk32lv..32//asd"),
    createdAt: "2023-1-2"
}
```

### FileTemplate

```javascript
{
    lastUpdated: "2023-1-2"
    categories: ["test", "sessions", "legal Documents"],
    metadata: [
        {
            name: "Difficulty",
            type: "CHOICE",
            /* 'type' only accept the values:
                  'SHORT_TEXT',
                  'TEXT',
                  'DATE',
                  'NUMBER',
                  'FLOAT',
                  'CHOICE' */
            options: ["easy", "medium", "hard"],
            required: true,
            description: "How hard this sessions has to the patient."
        },
        {
            name: "Key Words",
            type: "SHORT_TEXT",
            required: false,
        },
    ]
}
```

### File

```javascript
{
    record: ObjectId("dfasdf"),
    name: "test1",
    category: "test",
    location: "./route/to/file/in/disk.pdf",
    pages: 3
    created_at: "2023-1-2"
    metadata: [
        {
            name: "Difficulty",
            type: "CHOICE",
            options: ["easy", "medium", "hard"],
            value: "easy"
            required: true,
            description: "How hard this sessions has to the patient."
        },
        {
            name: "Key Words",
            type: "SHORT_TEXT",
            value: "depression, ADHD"
            required: false,
        },
    ]
}
```

### PatientTemplate

```javascript
{
    lastUpdated: "2023-1-2"
    fields: [
        {
            name: "Children",
            type: "NUMBER",
            required: false,
            description: "Number of children the Patient has"
        },
        {
            name: "civil status",
            type: "CHOICE",
            options: ["single", "married", "separate"],
            required: true,
        },
    ]
}
```

### Patient

```javascript
{    
    record: ObjectId("dfasdf"),
    names: "Shinji",
    lastNames: "Sakamoto",    
    fields: [
        {
            name: "Children",
            type: "NUMBER",
            value : 3,
            required: false,
            description: "Number of children the Patient has"
        },
        {
            name: "civil status",
            type: "CHOICE",
            options: ["single", "married", "separate"],
            value : "single",
            required: true,
        },
    ]
}
```
