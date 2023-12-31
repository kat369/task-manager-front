import React from 'react'
import "./CreateTask.css"
import { useState } from 'react'

function CreateTask() {
  const [data, setdata] = useState({});

  const [namefocus, setnamefocus] = useState(false);
  const [descriptionfocus, setdescriptionfocus] = useState(false);
  const [deadlinefocus, setdeadlinefocus] = useState(false);
  const [assignfocus, setassignfocus] = useState(false);
  const [Priorityfocus, setPriorityfocus] = useState(false);

  const focuschange = () => {
    setnamefocus(true);
    setdescriptionfocus(true);
    setdeadlinefocus(true);
    setassignfocus(true);
    setPriorityfocus(true);
  };


  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    fetch(`http://localhost:4000/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.status === 201) {
        alert("sucessfully Created Task");
      } else {
        window.alert("Invalid Data");
        console.log(res.status);
      }
    });
  };

  return <>

    <main id="main" class="main">
      <div className="awesome">
        <div className="pagetitle">
          <h1>Create-Task</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Create</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">General Form Elements</h5>
                  {/* General Form Elements */}
                  <form onSubmit={handlesubmit}>
                    <div class="col-12 mb-3">
                      <label for="inputNanme4" class="form-label">Task-Tittle</label>
                      <input
                        type="text"
                        name="tittle"
                        value={data.tittle || ""}
                        required
                        onChange={(e) => {
                          setdata({ ...data, [e.target.name]: e.target.value });
                        }}
                        onBlur={() => {
                          setnamefocus(true);
                        }}
                        focused={namefocus.toString()}

                        class="form-control" id="inputNanme4" />
                      <span className="span">required</span>
                    </div>
                    <div class="col-12 mb-3">
                      <label for="inputNanme4" class="form-label">Description</label>
                      <textarea
                        className="form-control"
                        style={{ height: 100 }}
                        name="description"
                        value={data.description || ""}
                        required
                        onChange={(e) => {
                          setdata({ ...data, [e.target.name]: e.target.value });
                        }}
                        onBlur={() => {
                          setdescriptionfocus(true);
                        }}
                        focused={descriptionfocus.toString()}
                      />
                      <span className="span">required</span>
                    </div>




                    <div className="col-12 mb-3">
                      <label htmlFor="inputDate" className="form-label">
                        Deadline
                      </label>
                      <div className="col-sm-12">
                        <input type="date"
                          name="deadline"
                          value={data.deadline || ""}
                          required
                          onChange={(e) => {
                            setdata({ ...data, [e.target.name]: e.target.value });
                          }}
                          onBlur={() => {
                            setdeadlinefocus(true);
                          }}
                          focused={deadlinefocus.toString()} className="form-control" />
                        <span className="span">required</span> </div>

                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label">Priority</label>
                      <div className="col-sm-12">

                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="Priority"
                          value={data.Priority || ""}
                          onChange={(e) => {
                            setdata({ ...data, [e.target.name]: e.target.value });
                          }}
                          onBlur={() => {
                            setPriorityfocus(true);
                          }}
                          focused={Priorityfocus.toString()}
                          required
                        >
                          <option name=""></option>
                          <option value={1}>High</option>
                          <option value={2}>Medium</option>
                          <option value={3}>Low</option>
                        </select>
                        <span className="span">required</span>

                      </div>
                    </div>

                    <div class="col-12 mb-3 ">
                      <label for="inputNanme4" class="form-label">Assigned Project</label>
                      <input type="text"
                        name="assigned"
                        value={data.assigned || ""}
                        required
                        onChange={(e) => {
                          setdata({ ...data, [e.target.name]: e.target.value });
                        }}
                        onBlur={() => {
                          setassignfocus(true);
                        }}
                        focused={assignfocus.toString()}

                        class="form-control" id="inputNanme4" />
                      <span className="span">required</span>
                    </div>

                    <div class="text-center">
                      <button type="submit" onClick={focuschange} class="btn btn-primary">Submit</button>&nbsp;
                      {/* <button type="reset" class="btn btn-secondary">Reset</button> */}
                    </div>
                  </form>
                  {/* End General Form Elements */}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

  </>
}

export default CreateTask