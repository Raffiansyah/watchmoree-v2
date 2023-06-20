import React from 'react';
import PropTypes from 'prop-types';

export default function SwitchTab({
  endpont1,
  endpoint2,
  onTabsChange,
  endPoint,
  title1,
  title2,
}) {
  return (
    <div className="flex justify-between items-center bg-white rounded-full md:w-56 md:h-10 md:p-2">
      <button
        type="button"
        className={
          endPoint === endpont1
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-24 h-9 text-white'
            : 'w-24 h-9 rounded-full'
        }
        onClick={() => onTabsChange(endpont1)}
      >
        {title1}
      </button>
      <button
        type="button"
        className={
          endPoint === endpoint2
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-24 h-9 text-white'
            : 'w-24 h-9 rounded-full'
        }
        onClick={() => onTabsChange(endpoint2)}
      >
        {title2}
      </button>
    </div>
  );
}

SwitchTab.propTypes = {
  endpont1: PropTypes.string.isRequired,
  endpoint2: PropTypes.string.isRequired,
  onTabsChange: PropTypes.func.isRequired,
  endPoint: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};