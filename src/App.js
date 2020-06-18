import React from 'react';

function App() {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "ken", age: 5 },
    { name: "jon" },
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

User.defaultProps = {
  name: "shun",
  age: 1
}

export default App;
