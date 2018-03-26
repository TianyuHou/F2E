import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ChatBox from './ChatBox';
import Lecture from './Lecture';
import LectureList from './LectureList';
import CommentList from './CommentList';
import MentorProfile from './MentorProfile';
import ProgressBar from '../ProgressBar';
import AddComment from './AddComment';

const Education = () => (
  <div className="education-container">
    <Header />
    <div className="education">
      <ProgressBar name="Education" />
      <div className="education-frame">
        <div className="education-content">
          <Lecture videoSrc="https://www.youtube.com/embed/tgbNymZ7vqY" />
          <AddComment />
          <CommentList />
        </div>
        <div className="education-list">
          <MentorProfile />
          <LectureList />
        </div>
      </div>
    </div>
    <Footer />
    <ChatBox />
  </div>
);

export default Education;
