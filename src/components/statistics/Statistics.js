import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ state }) => {
  return (
    <ul className={styles.statisticsList}>
      {Object.keys(state).map((item) => (
        <li key={uuidv4()}>
          <p className={styles.option}>
            {item}: <span className={styles.value}>{state[item]}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Statistics;
