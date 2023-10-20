import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import './App.css';
import CourseOfferings from './course-offerings';

const GET_COURSE_OFFERING = gql`{
  searchCourseOffering(termId:"kuali.atp.FA2022-2023", contextInfo: {principalId: "123"}) {
    id
    name
    courseCode
    courseInfo {
      id
      name
    }
  }
}`;

const App = () => (
  <Query query={GET_COURSE_OFFERING}>
    {({ data: { searchCourseOffering }, loading }) => {
      if (loading || !searchCourseOffering) {
        return <div>Loading ...</div>;
      }

      return (
        <CourseOfferings courseOfferings={searchCourseOffering} />
      );
    }}
  </Query>
);


export default App;
