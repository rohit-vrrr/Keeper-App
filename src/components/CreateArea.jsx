import React from "react";

function CreateArea() {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" autoComplete="off" />
                <textarea name="content" placeholder="Take a note..." rows="3" autoComplete="off" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
