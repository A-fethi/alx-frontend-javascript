interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "hello",
  lastName: "hi",
  age: 26,
  location: "CityX",
};

const student2: Student = {
  firstName: "hi",
  lastName: "hello",
  age: 25,
  location: "CityY",
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");

  const headerRow = table.insertRow();
  const firstNameHeader = headerRow.insertCell(0);
  const locationHeader = headerRow.insertCell(1);
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
});
