import React, { Component } from 'react';
import { Button } from 'components/ui/Atoms/Button';
import Image from 'components/ui/Atoms/Image';
import ProfileImage from 'components/ui/Atoms/ProfileImage';
import TeacherCard from 'components/ui/Molecules/TeacherCard';

const teacher = {
  "id": 1,
  "firstName": "Matt",
  "lastName": "Steffanina",
  "avatar": "mattStef.jpg",
  "bio": "Matt Steffanina is a world-renowned hip hop dancer and choreographer from Los Angeles.",
  "styles": "Commercial"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicked")
  }

  render() {
    return (
      <div>
        <h1>This is working now</h1>
        <div>
          <Button disabled={true} onClick={this.handleClick} />
          <Image />
          <TeacherCard teacher={teacher} />
          <Button className='danger big' />
        </div>
      </div>
    );
  }
}
