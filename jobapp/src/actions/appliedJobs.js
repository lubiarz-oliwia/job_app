
import { API_URL } from "./constants"

export const addJob = (values) => {
    return fetch(`${API_URL}/applied`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(values),
    })
      .catch(err => console.log(err));
  };

export const getAllJobs = (successCallback) => {
    fetch(`${API_URL}/applied`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        successCallback(data);
      })
      .catch(err => console.log(err));
  };