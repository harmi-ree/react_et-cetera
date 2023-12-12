import { useState, useEffect } from "react";
import "./Mynotepad.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function MyNotepad() {
  const [noteValue, setNoteValue] = useState(
    localStorage.getItem("mynotevalue") ?? ""
  );

  useEffect(() => {
    localStorage.setItem("mynotevalue", noteValue);
  }, [noteValue]);

  return (
    <>
      <div className="Notepad">
        <CKEditor
          editor={ClassicEditor}
          className="textarea"
          data={noteValue}
          onChange={(e, editor) => {
            setNoteValue(editor.getData());
          }}
        />
        <div className="footer">
          <button
            className="clear"
            onClick={(e) => {
              setNoteValue("");
            }}
          >
            clear
          </button>
        </div>
      </div>
    </>
  );
}
