const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new Schema({
  adminName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  adminEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  adminPassword: {
    type: String,
    required: true,
    minlength: 5,
  },
});

adminSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.adminPassword = await bcrypt.hash(this.adminPassword, saltRounds);
  }

  next();
});

adminSchema.methods.isCorrectPassword = async function (adminPassword) {
  return bcrypt.compare(adminPassword, this.adminPassword);
};

const Admin = model('Admin', adminSchema);

module.exports = Admin;
