export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((students) => students.location === city);
}
