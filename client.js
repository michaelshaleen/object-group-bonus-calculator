const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
// employee in param will be object
function employeeBonusCalculator(employee) {
  const newEmployeeObject = {// object because we're going through an object
    name: '';
    bonusPercentage:'';
    totalCompensation:'';
    totalBonus:'';
  };

  //console.log('test');
  //loop through employee information
  for(let i = 0; i < employee.length; i++;){
    if(employee.reviewRating <= 2){
      //does not receive bonus
    }else if(employee.reviewRating = 3){
      //receives 4% bonus
    }else if(employee.reviewRating = 4){
      //receives 6% bonus
    }else if(employee.reviewRating = 5){

    //receives 10% bonus
    }else if(employees.employeeNumber.length > 4 && ){

    }
  }
}

employeeBonusCalculator();
