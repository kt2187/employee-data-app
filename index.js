const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true, useUnifiedTopology: true })
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
    employeeName: 'Barriere, David',
    department: '10006',
    dateOfBirth: '1967-05-19',
    startDate: '1994-10-21',
    currentSalary: '76895'
  });

  const result = await employee.save();
  console.log(result);
}

async function getEmployees() {
  const employees = await Employee.find({ department: '10005', });
  console.log(employees);
}

getEmployees();
//addEmployee();