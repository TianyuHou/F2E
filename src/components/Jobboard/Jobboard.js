import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import JobboardItem from './JobboardItem';
import Page from '../Page';

const Jobboard = () => (
  <div className="jobboard-container">
    <Header />
    <div className="jobboard">
      <div className="table-container">
        <div className="table-title table-title-jobboard">
          <h3>Company Name</h3>
          <h3>Job Title</h3>
          <h3>Apply</h3>
          <h3>Post Date</h3>
        </div>
        <ul>
          <JobboardItem
            companyName="Amazon"
            position="Software Development Engineer"
            date="12 Nov, 2017"
            detail="At Amazon, we hire the best minds in technology to innovate, build and break things for the benefit of our customers. That intense focus on customers is why we are one of the world’s most beloved brands – it’s part of our company DNA.
Our challenges are big - impacting millions of customers, sellers and developers, and countless products – and our path is not always easy. Doing the right thing rarely is. So we’re selective about who joins us on this journey. There’s a certain kind of person who takes on the challenges of software development at Amazon – someone excited by the idea of owning; people who like to build new platforms, features and services from scratch, developers who can manage the ambiguity and pace of a company whose ship cycles are measured in weeks, not years.
Amazon is a place where builders build."
          />
          <JobboardItem
            companyName="Microsoft"
            position="Software Development Engineer"
            date="8 Nov, 2017"
            detail="The Surface Team creates premium devices that our customers love. A fundamental part of our strategy is having desirable and powerful devices that enable the experiences people want, and elicit their excitement. Creating these devices involves a close partnership between hardware and software engineers, designers, and manufacturing. The Surface post-launch engineering team is committed to improving the Surface experience for our customers. Through a variety of listening systems, we measure our customer’s greatest needs and collaborate across various teams to identify and implement software solutions for delivery."
          />
          <JobboardItem
            companyName="Facebook"
            position="Software Engineer"
            date="29 Oct, 2017"
            detail="Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together. Whether we're creating new products or helping a small business expand its reach, people at Facebook are builders at heart. Our global teams are constantly iterating, solving problems, and working together to empower people around the world to build community and connect in meaningful ways. Together, we can help people build stronger communities — we're just getting started."
          />
          <JobboardItem
            companyName="Costco"
            position="Software Developer"
            date="21 Oct, 2017"
            detail="The Tools Integration Developer is responsible for developing, implementing, administering and supporting multiple industry-standard and custom QA tools.
The role includes providing direct technical support, training and mentoring to our large community of geographically distributed end-users.
Successful candidates will implement, support and administer geographically distributed infrastructure supporting test automation with the support of the Costco infrastructure teams.
The EQA Tools Integration Developer role is to plan, develop, coordinate and support tools integration to support the QA needs of the division. This role requires a mix of development and support activities. The qualified candidate will display a passion for delivering a high level of end user support, the ability to debug code, and create high quality development deliverables."
          />
          <JobboardItem
            companyName="REI"
            position="Software Engineer"
            date="15 Oct, 2017"
            detail="We are looking for a Java Software Engineer to contribute to REI's success by designing, developing, implementing and supporting critical business applications for our digital retail division, building the next generation of features for rei.com."
          />
        </ul>
      </div>
    </div>
    <Page />
    <Footer />
  </div>
);

export default Jobboard;
