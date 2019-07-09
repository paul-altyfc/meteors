import React from "react";

function MeteorList({ meteors }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Mass</th>
          <th>Year</th>
          <th>Fall</th>
          <th>Lattitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {meteors.map(meteor => {
          return (
            <tr key={meteor.id}>
              <td>{meteor.id}</td>
              <td>{meteor.name}</td>
              <td>{meteor.mass}</td>
              <td>{meteor.year}</td>
              <td>{meteor.fall}</td>
              <td>{meteor.reclat}</td>
              <td>{meteor.reclong}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MeteorList;
