import React from 'react';

function CourseOfferings({ courseOfferings }) {
  return (
    <div className="container m-5">
        <table className="table table-striped">
        <thead className="table-dark">
          <tr>
              <th>#</th>
              <th>Id</th>
              <th>Name</th>
              <th>Course Code</th>
              <th>Course Id</th>
              <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
        {courseOfferings.map((course, index) => (
            <tr key={index}>
              <td></td>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.courseCode}</td>
              <td>{course.courseInfo.id}</td>
              <td>{course.courseInfo.name}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
}

export default CourseOfferings;
