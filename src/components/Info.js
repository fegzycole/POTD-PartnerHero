import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Info = ({
  title, imageUrl, description, handleClick, handleSelect,
}) => (
  <div>
    <h3>{title}</h3>
    <img src={imageUrl} alt={title} />
    <div>
      <Button text="Set Favorite" handleClick={handleClick} />
      <input type="date" onChange={handleSelect} />
    </div>
    <p>{description}</p>
  </div>
);

Info.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  handleClick: PropTypes.func,
  handleSelect: PropTypes.func,
};

Info.defaultProps = {
  title: null,
  imageUrl: null,
  description: null,
  handleClick: () => null,
  handleSelect: () => null,
};

export default Info;
