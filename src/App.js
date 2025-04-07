import React from "react";
import GetDerivedStateFromProps from "./Lifecycle/GetDerivedStateFromProps";
import Mount from "./Lifecycle/Mount";
import Update from "./Lifecycle/Update";
import ComponentA from "./Lifecycle/ComponentA";
import ComponentB from "./Lifecycle/ComponentB";
import Hero from "./Lifecycle/Hero";
import ErrorBoundary from "./Lifecycle/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Mount /> */}
        {/* <Update /> */}
        {/* <GetDerivedStateFromProps />
        <ComponentA />
        <ComponentB /> */}
        <Update />
        <ErrorBoundary>
          <Hero heroName={"superman"} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName={"Batman"} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName={"Joker"} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
