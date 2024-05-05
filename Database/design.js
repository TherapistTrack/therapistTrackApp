/* eslint-disable no-unused-vars */
// Paciente, expedientes, archivos

// ROL
const rol = [
  {
    name: 'Admin',
    permissions: [
      {
        collection: 'usuario',
        operations: ['CREATE', 'READ', 'UPDATE']
      },
      {
        collection: 'rol',
        operations: ['READ', 'UPDATE']
      }
    ]
  },
  {
    nombre: 'Doctor',
    permissions: [
      {
        collection: 'paciente',
        operations: ['CREATE', 'READ', 'UPDATE', 'DELETE']
      },
      {
        collection: 'expediente',
        operations: ['CREATE', 'READ', 'UPDATE', 'DELETE']
      },
      {
        collection: 'archivo',
        operations: ['CREATE', 'READ', 'UPDATE', 'DELETE']
      }
    ]
  },
  {
    nombre: 'Asistente',
    permissions: [
      {
        collection: 'paciente',
        operations: ['READ', 'UPDATE']
      },
      {
        collection: 'expediente',
        operations: ['READ']
      },
      {
        collection: 'archivo',
        operations: ['READ']
      }
    ]
  }
]

// User
const USER = {
  username: '',
  password: '',
  salt: '',
  name: '',
  lastName: '',
  phones: ['', '', ''],
  rol: Object.ID(),
  mails: ['', ''],

  // Doctor:
  collegiateNumber: '',
  Specialty: '',

  // asistente
  startDate: '',
  endDate: '',
  DPI: ''
}

const Field = {
  name: '',
  type: ['SHORT_TEXT', 'TEXT', 'DATE', 'NUMBER', 'FLOAT'],
  value: ''
}

// A DOCTOR MUST HAVE JUST ONE PATIENT_TEMPLATE
const PatientTemplate = {
  doctor: Object.id(/* DOCTORS COLLECTION */),
  fields: [
    /* FIELDS COLLECTION */
  ],
  lastUpdated: Date()
}

const Patient = {
  names: '',
  lastNames: '',
  lastUpdated: Date(),
  PATIENT_TEMPLATE: Object.id(/* PATIENT TEMPLATE */),
  fields: {
    // Containt fields defined in PATIENT_TEMPLATE
    Partner: '',
    Children: ''
  }
}
