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
      type: '', // Can be on of these: ['SHORT_TEXT', 'TEXT', 'DATE', 'NUMBER', 'FLOAT', 'CHOICE'],
      option: [], // JUST IF TYPE = CHOICE
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
  fields: [
    // Containt fields defined in PATIENT_TEMPLATE
    {
      name: '',
      type: '',
      options: [''], // if type = CHOICE options must be an array of options,
      // And value must be a value within the options list.
      value: '', // The value for this property, can be any type
      required: '',
      description: ''
    }
  ]
}

const FileTemplate = {
  doctor: Object.id(/* DOCTOR */),
  categories: ['', ''],
  lastUpdated: Date(),
  metadata: [
    {
      name: '',
      type: {},
      required: '',
      description: '' // Boolean
    }
  ]
}

const File = {
  name: '',
  category: '',
  location: '',
  pages: 0,
  created_at: Date(),
  FILE_TEMPLATE: Object.id(/* PATIENT TEMPLATE */),
  metadata: [
    {
      name: '',
      type: '',
      options: [''], // if type = CHOICE options must be an array of options,
      // And value must be a value within the options list.
      value: '', // The value for this property, can be any type
      required: '',
      description: ''
    }
  ]
}

const Record = {
  patient: Object.id(/* PATIENT */),
  doctor: Object.id(/* DOCTOR */),
  lastUpdated: Date(),
  inquiries_number: 0 // Number of inquiries in the record, 0 is the default value
}
