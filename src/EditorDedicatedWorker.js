import { useState } from "react";
import useValidationWorker from "./useValidationDedicatedWorker";
const EditorDedicatedWorker = () => {
  var [editorValue, setEditorValue] = useState("");
  const { validate, validationResult } = useValidationWorker();
  const handleChange = async (e) => {
    setEditorValue(e.target.value);
    validate(e.target.value);
  };
  return (
    <div>
      <input value={editorValue} onChange={handleChange} />
      {validationResult}
    </div>
  );
};
export default EditorDedicatedWorker;
