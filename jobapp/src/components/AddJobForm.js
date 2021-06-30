import React, {useState} from 'react'
import Navigation from './Navigation'
import { addJob } from '../actions/appliedJobs'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function AddJobForm() {
    const [form, setForm] = useState({companyName: '', link: '', comment: ''})
    const [error, setError] = useState({companyName: '', link: ''})
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const addJobsApplied = (values) => {
        const date = new Date().toLocaleDateString();
        const status = "Wybierz";
        const data = { ...values, date, status};
        addJob(data);
    };

    const handleSubmit = (e) => {
        const { companyName, link, comment } = form;
        e.preventDefault();
        setError({});
        let isError = false
        if (!companyName.length) {
            setError(prevState => {
                return {
                    ...prevState,
                    companyName: "Podaj nazwę firmy.",
                }
            });
            isError = true;
        }

        if (link.length < 10) {
            setError(prevState => {
                return {
                    ...prevState,
                    link: "Wklej poprawny link."
                }
            })
            isError = true;
        }
           
        if (!isError) {
            setSuccess(true)
            addJobsApplied(form)
        }
    }

    return (
        <>
        <Navigation/>
        <form onSubmit={handleSubmit}>
            <label>
                Nazwa firmy
            </label>
            <input 
            type="text" 
            name="companyName" 
            value={form.companyName} 
            onChange={handleChange}
            />
            {error.companyName && <p className="error">{error.companyName}</p>}
            <label>
                Link   
                </label>
         
            <input 
            type="url" 
            name="link" 
            value={form.link} 
            onChange={handleChange}
            />
            {error.link && <p className='error'>{error.link}</p>}
            <label>
                Komentarz
                </label>
            <textarea 
            type="text" 
            name="comment" 
            value={form.comment} 
            onChange={handleChange}
            />
            <button className='save_btn'>Zapisz!</button>
            {success ? <p>Super, zaaplikowałeśna kolejną pracę!</p> : <p>Wypełnij formularz!</p>}
        </form>
        </>
    )
}

export default AddJobForm
