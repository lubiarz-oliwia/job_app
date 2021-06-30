import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { getAllJobs } from '../actions/appliedJobs'
import { Link } from "react-router-dom";


function AllJobs() {
    const [details, setDetails] = useState([]);
    const [statusClass, setStatusClass] = useState(""); //toDo!!!!! zeby zmienalys sie kolory w zaleznosci od statusu!!!
    

    useEffect(() => {
        getAllJobs(setDetails);
    }, []);

    return (
        <div>
            <Navigation />
            <div>
            <table className="forTable">
                <tr>
                    <th>Nazwa firmy</th>
                    <th>Link</th>
                    <th>Data aplikacji</th>
                    <th>Komentarz</th>
                    <th>Status</th>
                </tr>
            {details.map((item, index) => {
                return (
                   
                    <tr>
                        <td>{item.companyName}</td>
                        <td><a href={item.link}>{item.link}</a></td>
                        <td>{item.date}</td>
                        <td>{item.comment == "" ? <strong>N/A</strong>: <strong>{item.comment}</strong>}</td>
                        <td>
                            <select name="statuses">
                            <option value="volvo">{item.status}</option>
                            <option value="rejected">Odrzucona</option>
                            <option value="onGoing">W trakcie</option>
                            </select>
                            </td>
                    </tr>
                )
            })}
            </table>
            </div>
        </div>
    )
}

export default AllJobs
