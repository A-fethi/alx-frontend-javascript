export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students)) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      throw Error('Invalid Input Types');
    }
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    if (typeof Name === 'string') {
      this._name = Name;
    } else {
      throw Error('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(Length) {
    if (typeof Length === 'number') {
      this._length = Length;
    } else {
      throw Error('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(Students) {
    if (Array.isArray(Students)) {
      this._students = Students;
    } else {
      throw Error('Students must be an array of Strings');
    }
  }
}
