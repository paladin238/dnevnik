import React, { useState, useEffect } from "react";
import axios from "axios";

export function ObjectList() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'https://my-json-server.typicode.com/kosipov/1425-iro-placeholder-api/disciplines';
                const response = await axios.get(apiUrl);
                setUserData(response.data);
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
                    <table>
                        {userData.map(item => (
                            <tr key={item.id}>
                                <th>{item.title} ({item.group})</th>
                            </tr>
                        ))}
                    </table>
                    <button>Добавить предмет</button>
                </>
            )}
        </th>
    );
}
