// PeopleList.js
import React, { useEffect, useState } from "react";

const PeopleList = ({ onSelectPerson }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await fetch("http://localhost:3001/people");
        if (response.ok) {
          const data = await response.json();
          setPeople(data);
        } else {
          console.error("Failed to fetch people");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id} onClick={() => onSelectPerson(person)}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
