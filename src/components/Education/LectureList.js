import React from 'react';
import LectureItem from './LectureItem';

const LectureList = () => (
  <ul className="lecture-container">
    <LectureItem
      id="1"
      content="Shameem Akhtar posed as a boy during her early childhood in Pakistan so she could enjoy the privileges Pakistani girls are rarely afforded: to play outside and attend school. In an eye-opening, personal talk, Akhtar recounts how the opportunity to get an education altered the course of her life -- and ultimately changed the culture of her village, where today every young girl goes to school."
    />
    <LectureItem
      id="2"
      content="Josh Kaufman is the author of the #1 international bestseller, 'The Personal MBA: Master the Art of Business', as well as the upcoming book 'The First 20 Hours: Mastering the Toughest Part of Learning Anything.' Josh specializes in teaching people from all walks of life how to master practical knowledge and skills. In his talk, he shares how having his first child inspired him to approach learning in a whole new way."
    />
    <LectureItem
      id="3"
      content="Adam Leipzig has overseen more than 25 movies as a producer, executive and distributor. and has produced more than 300 stage plays and live events, and he was one of the founders of the Los Angeles Theatre Center."
    />
    <LectureItem
      id="4"
      content="NBC News journalist Mariana Atencio has traveled the world from Haiti to Hong Kong. In her TEDx talk, Mariana tells us how the people she's met along the way and her own immigrant experience have taught her that the only thing we all have in common is being human. Get ready to 'get human' and embrace what makes you different! Take a stand to defend your race: the human race!"
    />
    <LectureItem
      id="5"
      content="It's about recognizing, understanding and owning your mistakes. She came from famous entertaining family and was raised almost 'on stage'. After her music career she start designing swimwear. What happened after was a great school and life experience."
    />
  </ul>
);

export default LectureList;
