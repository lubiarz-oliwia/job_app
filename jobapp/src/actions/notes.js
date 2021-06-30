import { API_URL } from "./constants"

export const addNote = (values) => {
    return fetch(`${API_URL}/notes`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(values),
    })
      .catch(err => console.log(err));
  };

export const getAllNotes = (successCallback) => {
    fetch(`${API_URL}/notes`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        successCallback(data);
      })
      .catch(err => console.log(err));
  };