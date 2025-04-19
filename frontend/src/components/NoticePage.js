import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './noticepage.css';

const ImportantNoticePage = () => {
  const [topNotices, setTopNotices] = useState([]);
  const [allNotices, setAllNotices] = useState([]);
  const scrollingDivRef = useRef(null);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const fetchTopNotices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:800/api/notices/top"
        );
        setTopNotices(response.data);
      } catch (error) {
        console.error("Error fetching top notices:", error);
      }
    };

    const fetchAllNotices = async () => {
      try {
        const response = await axios.get("http://localhost:800/api/notices");
        setAllNotices(response.data);
      } catch (error) {
        console.error("Error fetching all notices:", error);
      }
    };

    fetchTopNotices();
    fetchAllNotices();
  }, []);

  useEffect(() => {
    const scrollToNextNotice = () => {
      if (scrollingDivRef.current) {
        scrollingDivRef.current.scrollTop += 50; 
      }
    };

    const intervalId = setInterval(scrollToNextNotice, 2000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="notice-page row">
      <div
        className="top-notices-container col"
        style={{ textAlign: "center", margin: "auto" ,marginLeft:"20px"}}
      >
        <h2 style={{ color: "white" }}>Top Notices</h2>
        <div className="notice-cards">
          {topNotices.map((notice) => (
            <div key={notice.id} className="notice-card">
              <li className="nav-item mx-3" style={{ color: "#424242" }}>
              PostedOn: {new Date(notice.createdAt).toLocaleDateString()}
            </li>
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col" style={{ margin: "auto" ,textAlign:"center"}}>
        <h2 style={{color:"white"}}>All Notices</h2>
        <div
          className="all-notices-container "
          style={{
            height: "400px",
            overflowY: "scroll",
            textAlign: "center",
            margin: "auto",
          }}
          ref={scrollingDivRef}
        >
          <div className="notice-list">
            {allNotices.map((notice, index) => (
              
              <div key={notice.id} className="notice">
            <li className="nav-item mx-3" style={{ color: "#424242" }}>
              PostedOn: {new Date(notice.createdAt).toLocaleDateString()}
            </li>
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNoticePage;
