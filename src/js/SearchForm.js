import React, { useState } from "react";

function SearchForm(props) {
    const [name, setUserName] = useState("");
  
    const onSubmitValue = (event) => {
      event.preventDefault();
      console.log(name);
    }
  
    return (
        <form onSubmit={onSubmitValue}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name"
              value={name}
              onChange= { event => setUserName(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
    );
  }

  export default SearchForm;