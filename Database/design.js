/* eslint-disable no-unused-vars */
// Paciente, expedientes, archivos

// ROL
const rol = [
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
  specialty: '',

  // asistente
  startDate: '',
  endDate: '',
  DPI: ''
}

// A DOCTOR MUST HAVE JUST ONE PATIENT_TEMPLATE
const PatientTemplate = {
  doctor: Object.id(/* DOCTORS COLLECTION */),
  fields: [
    /* LIST OF COLLECTIONS OF FIELDS */
    /* with this format: */
    {
      name: '',
      type: '', // Can be on of these: ['SHORT_TEXT', 'TEXT', 'DATE', 'NUMBER', 'FLOAT'],
      value: '',
      required: '', // Boolean
      description: ''
    }
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

const FileTemplate = {
  doctor: Object.id(/* DOCTOR */),
  fields: [
    {
      name: '',
      category: {},
      location: '',
      required: '', // Boolean
    }
  ]
}

const File = {
  name: '',
  category: '',
  location: '',
  metadata: [
    {
      name: '',
      value: {},
      type: '',
      required: '', // Boolean
      description: ''
    }
  ],
  pages: 0,
  created_at: Date(),
  labels: []
}


const Record = {
  patient: Object.id(/* PATIENT */),
  doctor: Object.id(/* DOCTOR */),
  lastUpdated: Date(),
  inquiries_number: 0,  // Number of inquiries in the record, 0 is the default value
}