import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const MyTimeline = () =>{
  return(
    <div>
    <p>Education</p>
      <Timeline lineColor={'#5188B5'} animate={true}>
      <TimelineItem key="001" dateText="2019 – 2020" dateInnerStyle={{ background: '#E41F20', color:"#FFFFFF" }} bodyContainerStyle={{color: "#dddddd"}}>
      <h3>Software & Information Systems Testing</h3>
      <h4>Fanshawe College</h4>
      <h5>3.7 GPA</h5>
      <p>
      In this program I learned design, run and review tests on software and information systems. Throughout the program I was tought how to make documents like a Test Strategy, Test Cases, Test Scripts and many more.
      Well also learning how to run these tests, with the test types being, but not limited; Automatied, Capacity, Load and Functional testing. And I took all this lessons, and incorrperated it in a group setting with the capstone
      project, which I and 6 others in my group, had to create all the test documents and run the tests for a website developed for this course. We then had to submit a report to the teacher at the end, documenting all of our documents
      and results from the testing, as well as recommendations with the system being launched or not.
      </p>
      </TimelineItem>

      <TimelineItem key="001" dateText="2012 – 2017" dateInnerStyle={{ background: '#0077BE', color:"#FFFFFF" }} bodyContainerStyle={{color: "#dddddd"}}>
      <h3>Game Development</h3>
      <h4>Niagara College</h4>
      <h5>3.0 GPA</h5>
      <p>
      In this program I learned how to develop a game, and not just from the programming side, but from also the artistical side of it, as well as docements potraying to the development of games. I however mostly focused on the programming
      side of it, learning how to do networking for games, AI for games and physics for games, just to name a few.
      </p>
      <p>
      With this program, I had helped to develop two games with the course. The first one being a side-scroller developed by a group of 4, with me being the main programmer and assistant 3D modeller. But the main game I developed for was
      in the capstone project, in which I with a group of 6 others, had between 3 and 4 months to create a game from scratch, and showcase it to the public. We had two showcase, one for the college itself, and another at the Level Up Showcase
      in Toronto, where we competted against 80+ different teams from differenet post-secondary schools in Ontario. And in that, our game Balls To The Wall, came in the top 5.
      </p>
      </TimelineItem>
      </Timeline>
      </div>
  );
}

export default MyTimeline;
