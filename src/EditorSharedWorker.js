import { useState } from "react";
import useValidationSharedWorker from "./useValidationSharedWorker";
const EditorSharedWorker = () => {
  var [editorValue, setEditorValue] = useState("");
  const { validate, validationResult } = useValidationSharedWorker();
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
export default EditorSharedWorker;
