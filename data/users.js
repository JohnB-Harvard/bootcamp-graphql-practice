const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  password: "$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy",
}))

const users = []

for (let i = 0; i < 20; ++i) {
  users.push(casual.user)
}

module.exports = users
