import { useState } from "react";
import ProgressBar from "../Common/ProgressBar";

export default function UploadForm(){
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        e.preventDefault()
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <>
        <h1>Upload</h1>
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
        </>
    )
}