import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircleRating({ rating, customClass, textColor }) {
  return (
    <div className={customClass}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
          textSize: '34px',
          textColor: textColor,
          backgroundColor: textColor,
        })}
      />
    </div>
  );
}

CircleRating.propTypes = {
  rating: PropTypes.string,
  customClass: PropTypes.string,
  textColor: PropTypes.string
};