import React from 'react';
import PropTypes from 'prop-types';

import styles from './PreviewCard.css';

import Image from 'components/ui/Atoms/Image';
import Desc from 'components/ui/Atoms/Desc';

const PreviewCard = ({preview}) => (
  <div className={styles.container} >
    <Image src={preview.src} className={styles.grid} />
    <div className={styles.grid}>
      <Desc text={preview.description} />
    </div>
  </div>
);

export default PreviewCard;
