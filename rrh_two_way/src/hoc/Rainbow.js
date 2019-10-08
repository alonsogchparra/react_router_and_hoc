import React from 'react';

const rainbow = (WrappedComponent) => {

  const colours = ['pink', 'red', 'orange', 'blue', 'yellow', 'grey'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default rainbow;