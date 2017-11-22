import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { specs, describe, it, beforeEach } from 'storybook-addon-specifications';

import ButtonStories from './components/ui/Atoms/Button';
import ImageStories from './components/ui/Atoms/Image';
import ProfileImageStories from './components/ui/Atoms/ProfileImage';
import NavbarStories from './components/ui/shared/Navbar';
import DescriptionStories from './components/ui/Atoms/Description';
import DescStories from './components/ui/Atoms/Desc';
import TeacherCardStories from './components/ui/Molecules/TeacherCard';
import PreviewCardStories from './components/ui/Molecules/PreviewCard';
import TutorialCardStories from './components/ui/Organisms/TutorialCard';
import TutorialList from './components/ui/Templates/TutorialList';

addDecorator(withKnobs);

