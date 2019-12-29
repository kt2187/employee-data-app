const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err))

const employeeDataSchema = new mongoose.Schema({
  employeeName: String,
  department: String,
  dateOfBirth: String,
  startDate: String,
  startingSalary: Number,
  currentSalary: Number
});

const Employee = mongoose.model('Employee', employeeDataSchema);

async function addEmployee() {
  const employee = new Employee({
    employeeName: 'Smith, Kevin',
    department: '10006',
    dateOfBirth: '1967-05-19',
    startDate: '1994-10-21',
    startingSalary: 69748,
    currentSalary: 76895
  });

  const result = await employee.save();
  console.log(result);
}

async function getEmployees() {
  const employees = await Employee
    //.find({ department: '10005', });
    .find({ currentSalary: { $gt: 75000 } })
  console.log(employees);
}

getEmployees();
//addEmployee();