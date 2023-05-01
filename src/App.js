import EditorSharedWorker from "./EditorSharedWorker";
import EditorDedicatedWorker from "./EditorDedicatedWorker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      shared worker:
      <EditorSharedWorker />
      <EditorSharedWorker />
      <EditorSharedWorker />
      dedicated worker:
      <EditorDedicatedWorker />
      <EditorDedicatedWorker />
      <EditorDedicatedWorker />
    </div>
  );
}

export default App;
