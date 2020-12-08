import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onFeedbackCounter }) => (
    
        
    <ul className={s.list}>
        {options.map(option => (
      <button
        className={s.item}
        type="button"
        data-action={option}
        onClick={onFeedbackCounter}
        key={option}
      >
        {option}
      </button>
    ))}
                    </ul>
                
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onFeedbackCounter: PropTypes.func.isRequired,
};

export default FeedbackOptions;