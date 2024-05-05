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
        permissions: ['READ', 'UPDATE']
      },
      {
        collection: 'Expedient',
        permissions: ['READ']
      },
      {
        collection: 'File',
        permissions: ['READ']
      }
    ]
  }
])
