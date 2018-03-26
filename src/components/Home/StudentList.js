import React from 'react';
import StudentItem from './StudentItem';

const StudentList = () => (
  <div className="student-list">
    <StudentItem
      id="s1"
      name="Lester Riley"
      school="Northeastern University"
      date="06/30/2017"
      comment={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam"`}
    />
    <StudentItem
      id="s2"
      name="Everett Shaw"
      school="Harvard University"
      date="05/15/2016"
      comment={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam"`}
    />
    <StudentItem
      id="s3"
      name="Bob Walters"
      school="Stanford University"
      date="05/30/2017"
      comment={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam"`}
    />
    <StudentItem
      id="s4"
      name="Kristen Alvarez"
      school="Cornell University"
      date="06/30/2016"
      comment={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam"`}
    />
  </div>
);

export default StudentList;
