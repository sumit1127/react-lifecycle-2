import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err) {
    console.log("Error", err);
    return {
      hasError: true,
    };
  }

  componentDidCathch(error, info) {
    console.log("Error - ComponentDidCatch", error);
    console.log("Error - desc", info);
  }

  render() {
    if (this.state.hasError) {
      return <h5>something went wrong</h5>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
