import React from 'react';
import PropTypes from 'prop-types';

import ProfileImage from 'components/ui/Atoms/ProfileImage.js';

import './TeacherCard.css';

const TeacherCard = ({teacher}) => {
  if (!teacher)
    return <p>This tutorial has no teacher attached to it</p>;

  const fullName = `${teacher.firstName} ${teacher.lastName}`;

  return (
    <div className="card">
      <ProfileImage src={teacher.avatar} alt={fullName} />
      <div className="container">
        <h4><b>{fullName}</b></h4> 
        <p>{teacher.styles}</p> 
      </div>
    </div>
  );
};

TeacherCard.propTypes = {
  teacher: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    bio: PropTypes.string
  })
};

export default TeacherCard;
