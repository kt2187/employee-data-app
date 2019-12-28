const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeedata', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err))

const employeeDataSchema = new mongoose.Schema({
  employeeName: String,
  employeeId: String,
  dateOfBirth: String,
  startDate: String,
  currentSalary: String
});

const Employee = mongoose.model('Employee', employeeDataSchema);