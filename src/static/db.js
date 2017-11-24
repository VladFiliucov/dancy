export const teacher = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Steffanina',
  avatar: 'mattStef.jpg',
  bio: `Matt Steffanina is a world-renowned hip-hop 
  dancer and choreographer from Los Angeles.`,
  styles: 'Commercial'
};

const teacher2 = {
  id: 2,
  firstName: 'Brian',
  lastName: 'Friedman',
  avatar: 'BrianFriedman.jpg',
  bio: `Brian Friedman is choreographer of
  Britney Spears and Janet Jackson.`,
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

export const preview = {
  id: 1,
  tutorialId: 1,
  src: 'shapeOfYou.jpg',
  description: 'Song: SHAPE OF YOU - Ed Sheeran',
  url: 'https://youtu.be/lq5oUOKh368'
};

const preview2 = {
  id: 2,
  tutorialId: 2,
  src: 'BFpreview.jpg',
  description: 'Brian Friedman s X FACTOR Masterclass Routine',
  url: 'https://www.youtube.com/watch?v=kQsaCw9pAKI'
};

const mainVideo2 = {
  id: 2,
  tuotrialId: 1,
  url: 'https://www.youtube.com/watch?v=7b4YXdQbVYc'
};

export const tutorial = {
  teacher: teacher,
  preview: preview,
  id: 1,
  teacherId: 1,
  title: 'Shape of you by Matt',
  language: 'eng',
  danceStyle: 'commercial',
  difficulty: 'intermidiate',
  mainVideo: {
    id: 1,
    tuotrialId: 1,
    url: 'https://youtu.be/3DzkXeMFLpw'
  }
};

export const tutorialNoTeacher = {
  teacher: noImgTeacher,
  preview: preview,
  id: 1,
  teacherId: 1,
  title: 'Shape of you by Matt',
  language: 'eng',
  danceStyle: 'commercial',
  difficulty: 'intermidiate',
  mainVideo: {
    id: 1,
    tuotrialId: 1,
    url: 'https://youtu.be/3DzkXeMFLpw'
  }
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
      src: 'shapeOfYou.jpg',
      description: 'Song: SHAPE OF YOU - Ed Sheeran',
      url: 'https://youtu.be/lq5oUOKh368'
    },
    mainVideo: {
      id: 1,
      tuotrialId: 1,
      url: 'https://youtu.be/3DzkXeMFLpw'
    }
  },
  {
    teacher: teacher2,
    preview: preview2,
    mainVideo: mainVideo2,
    id: 2,
    teacherId: teacher2.id,
    title: 'X-Factor masterclass routine',
    language: 'eng',
    danceStyle: 'commercial',
    difficulty: 'intermidiate'
  }
];

