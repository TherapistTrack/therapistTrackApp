db = db.getSiblingDB('therapisttrack')

db.createUser({
  user: 'admin',
  pwd: '1234',
  roles: [{ role: 'dbOwner', db: 'therapisttrack' }]
})
