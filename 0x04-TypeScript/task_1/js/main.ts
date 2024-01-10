interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  yearsOfExperience?: number;
  contract: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: PrintTeacherFunction = (firstName, lastName): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));

interface StudentClassConstructor {
  new (firstName: string, lastName: string); StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
