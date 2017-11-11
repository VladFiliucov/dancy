export const teacher = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Steffanina',
  avatar: 'mattStef.jpg',
  bio: `Matt Steffanina is a world-renowned hip-hop 
  dancer and choreographer from Los Angeles.`,
  styles: 'Commercial'
};

export const noImgTeacher = {
  id: 1,
  firstName: 'Lyle',
  lastName: 'Beniga',
  avatar: undefined,
  bio: 'Great Choreographer',
  styles: 'Popping'
};

export const tutorials = [
  {
    teacher,
    id: 1,
    teacherId: 1,
    title: 'Shape of you by Matt',
    language: 'eng',
    danceStyle: 'commercial',
    difficulty: 'intermidiate',
    preview: {
      id: 1,
      tutorialId: 1,
      thumbnail: 'shapeOfYou.jpg',
      description: 'Song: SHAPE OF YOU - Ed Sheeran',
      url: 'https://youtu.be/lq5oUOKh368'
    },
    mainVideo: {
      id: 1,
      tuotrialId: 1,
      url: 'https://youtu.be/3DzkXeMFLpw'
    }
  }
];

