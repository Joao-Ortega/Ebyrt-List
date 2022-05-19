const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('senhaMod@ppTod0', salt);

console.log(hash);