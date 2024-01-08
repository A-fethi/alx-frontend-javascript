import getListStudents from './0-get_list_students';

export default function getListStudentIds(args) {
  const Ids = getListStudents();
  if (!Array.isArray(args)) {
    return [];
  }
  return Ids.map((obj) => obj.id);
}
