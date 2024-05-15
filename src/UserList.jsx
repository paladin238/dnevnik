import React, { useState, useEffect } from "react";
import axios from "axios";

export function UserList() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'https://my-json-server.typicode.com/kosipov/1425-iro-placeholder-api/disciplines';
                const response = await axios.get(apiUrl);
                setUserData(response.data[0].students);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <th>
            {userData && (
                <>
                <form>
                <h1>Студенты</h1>
                <input type="date" id="date" name="date"/>
                    <table>
                        {userData.map(student => (
                            <tr key={student.id}>
                                <th>{student.firstName} {student.lastName}</th>
                                <th><input type="checkbox" name="" id="" /></th>
                                <button>Сохранить</button>
                            </tr>
                        ))}
                    </table>
                    </form>
                </>
            )}
        </th>
    );
}