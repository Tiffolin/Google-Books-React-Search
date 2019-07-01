import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="title"></label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="title"
                    type="text"
                    placeholder="Search for a title"
                />
                <button className="btn" type="submit" onClick={props.handleFormSubmit}><i class="fas fa-search"></i></button>
            </div>
        </form>
    )
}

export default SearchForm;