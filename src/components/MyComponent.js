import React from "react";

// kế thừa tất cả tính năng có thể có của component vào trong MyComponent của mình
class MyComponent extends React.Component {
  // JSX - đang code HTML trong JS
  render() {
    return (
      <div>
        my first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
