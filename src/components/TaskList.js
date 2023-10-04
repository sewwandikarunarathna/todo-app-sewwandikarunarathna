import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState([]);

  //fetching tasks from API
  const fetchTasks = async () => {
    const options = {
      method: "GET",
    };

    const response = await fetch(
      "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do",
      options
    );
    const data = await response.json();
    const slicedData = data.slice(0, 8); // Get the first 8 items
    
    setTask(slicedData);
    
    // const response = await fetch(
    //   "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do",
    //   options
    // )
    //   .then((res) => res.json())
    //   .then((d) => setTask(d));
    // return response;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const DateDisplay = ( isoDate ) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
    });
  
    return formattedDate;
  };

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <>
      
      <div className="card-header tasks d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0">Tasks</h6>
      </div>
    
      {task ? (
        <>
          {task.map((t) => {
            return (
              <div>
                <div className="content">
                  {t.priority === "LOW" ? (
                    <img className="prior-icon" src="assets/Priority-Low.svg" />
                  ) : t.priority === "MEDIUM" ? (
                    <img
                      className="prior-icon"
                      src="assets/Priority-Medium.svg"
                    />
                  ) : t.priority === "HIGH" ? (
                    <img
                      className="prior-icon"
                      src="assets/Priority-High.svg"
                    />
                  ) : (
                    <span>Unknown Priority</span>
                  )}

                  {/* <img className="prior-icon" src="assets/Priority-High.svg" /> */}
                  <span className="task truncate-text">{truncateText(t.todo, 50)}</span>
                  {t.completed == false ? (
                    <span className="inprogress-badge"> In Progress </span>
                  ) : (
                    <span className="done-badge"> Done </span>
                  )}

                  <span className="datee">{DateDisplay(t.createdAt)}</span>
                </div>
                <div>
                {t.completed == false ? (<a className="mark-button">Mark as Done</a>) : null}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        "There are no Tasks..."
      )}
      
    </>
    // <div style={{float: 'right', margin:0}}>
    //   <h1>Tasks</h1>
    //   {task ? (
    //     <>
    //       {task.map((t) => {
    //         return (
    //           <ul>
    //             <li>{t.todo}</li>
    //           </ul>
    //         );
    //       })}
    //     </>
    //   ) : (
    //     "There are no Tasks..."
    //   )}

    // </div>
  );
};

export default TaskList;
