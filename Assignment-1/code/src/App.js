import AppComponentColor from "./components/AppComponentColor";
import Yellow from "./components/Yellow";
import Red from "./components/Red";

import Blue from "./components/Blue";

function App() {
  return (
    <div className="App">
      <AppComponentColor>
        <Yellow />
        <Yellow />
      </AppComponentColor>

      <AppComponentColor>
        <Red />
      </AppComponentColor>

      <AppComponentColor>
        <Blue />
        <Blue />
        <Blue />
      </AppComponentColor>
    </div>
  );
}

export default App;
