import { useState } from "react";
import axios from "axios";



function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);



  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("Uploaded Successfully!!!");

    }
  };
  
  return (
    <div className="App" style={{marginTop:"150px"}}>
      <form style={{width:"30%",height:"500px",marginTop:"100px",textAlign:"center",fontSize:"30px",margin:"auto",border:"2px solid black"}} onSubmit={submitImage}>
        <h4>Upload Pdf in React</h4>
        <br />
        <input
          type="text"
          style={{width:"75%",margin:"auto",height:"30px",fontSize:"20px",borderRadius:"10px",border:"1px solid black",padding:"10px",marginBottom:"10px",marginTop:"10px",display:"block",textAlign:"center",backgroundColor:"lightgray",color:"black",fontWeight:"bold",boxShadow:"0 0 10px 0 rgba(0,0,0,0.1)"}}
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          style={{width:"70%",margin:"auto",height:"30px",fontSize:"20px",padding:"10px",marginBottom:"10px",marginTop:"10px",display:"block",textAlign:"center",color:"black",fontWeight:"bold",cursor:"pointer",paddingLeft:"30px",paddingTop:"15px"}}
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button style={{width:"30%",height:"50px", padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"20px",fontWeight:"bold" }} type="submit">
          Submit
        </button>
      </form>

    </div>
  );
}

export default App;