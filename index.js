const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises.employees', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err))

const employeeDataSchema = new mongoose.Schema({
  employeeName: String,
  department: String,
  dateOfBirth: String,
  startDate: String,
  currentSalary: String
});

const Employee = mongoose.model('Employee', employeeDataSchema);

async function addEmployee() {
  const employee = new Employee({
    employeeName: 'Barriere, Katie',
    department: '10006',
    dateOfBirth: '1968-07-19',
    startDate: '1995-11-2',
    currentSalary: '56895'
  });

  const result = await employee.save();
  console.log(result);
}

addEmployee();