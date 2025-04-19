import React from "react";
// import "./About.css";
import "./Pdf.css"

const Pdf = (props) => {
  return (
    <div className="container">
    <div style={{ margin:"10px",
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    color: "#333"}}>
      <div className="row " style={{ margin:"10px"}}>
        <div style={{}} className="col ">
          <h4 style={{textAlign:"left"}}>{props.topic}</h4>
        </div>
        <div style={{}} className="col ">
          <div className="d-flex justify-content-center justify-content-md-end">
            <a href={props.link}>
              <button className="buttondownload btn btn-info" style={{ margin: "5px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  class="bi bi-cloud-arrow-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
                </svg>{" "}
                {/* <span>Download</span> */}
              </button>
              <div className="desired-text1">
 Download
</div>
            </a>
            <a href={props.link}>
              <button className="buttonaddnote btn btn-success" style={{ margin: "5px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-file-earmark-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
                </svg>{" "}
                {/* <span>Add Note</span> */}
              </button>
              <div className="desired-text2" >
  Add Note
</div>

            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="desired-text1">
 Download
</div> */}
{/* <div className="desired-text2" >
  Add Note
</div> */}
    </div>
    
  );
};

export default Pdf;
