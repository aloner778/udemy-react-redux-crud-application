import React from 'react';
import PropTypes from 'prop-types'

function App() {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "ken", age: 5 },
    { name: "jon", age: 3 },
    { age: 2 }
  ]

  return (
    <>
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />
      })}
    </>
  );
}

const User = (props) => {
  return <div>i'm {props.name} {props.age}歳</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
