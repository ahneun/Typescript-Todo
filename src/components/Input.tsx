import React from "react";
import { useState } from "react";

const Input = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    return (
        <form>
             <div>
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>내용</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
          <button>추가하기</button>
        </form>
      );
    };
    
    export default Input;