import React from 'react';
import Image from 'next/image';
import styles from './ButtonBackground.module.css'

import cityIcon from "../../../../public/icons/cityIcon.png";
import forestIcon from "../../../../public/icons/forestIcon.png";
import teaIcon from "../../../../public/icons/teaIcon.png";

const ButtonBackground = () => {
  return (
    <div className={styles.buttonContainer}>
      <button>
        <Image
          width={80}
          height={80}
          src={teaIcon}
          alt="Rain Icon"
          className={styles.iconPng}
        />
      </button>
      <button>
        <Image
          width={80}
          height={80}
          src={forestIcon}
          alt="Forest Icon"
          className={styles.iconPng}
        />
      </button>
      <button>
        <Image
          width={80}
          height={80}
          src={cityIcon}
          alt="City Icon"
          className={styles.iconPng}
        />
      </button>
    </div>
  );
};

export default ButtonBackground;
