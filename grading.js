function gradingStudents(grades) {
  let roundedGrades = [];
  grades.forEach((grade) => {
    let nextMultipleOfFive = Math.ceil(grade/5) * 5;
    if (grade < 38) {
      roundedGrades.push(grade)
    } else if (nextMultipleOfFive - grade < 3) {
      roundedGrades.push(nextMultipleOfFive)
    } else {
      roundedGrades.push(grade);
    }
  });

  return roundedGrades;
}

const grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));