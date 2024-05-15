import { UserList } from "./UserList";

export function Scroll({ attendanceData }) {
  return (
    <div>
      {attendanceData.map((attendance, index) => (
        <div key={index}>
          <h2>Лист отметки от {attendance[0].date}</h2>
          <table>
            {attendance.map((student) => (
              <tr key={student.id}>
                <th>{student.firstName} {student.lastName}</th>
                <th>{student.isChecked ? 'Присутствует' : 'Отсутствует'}</th>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
}