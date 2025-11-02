import React, { useEffect, useState } from "react";
import {
  createStudent,
  deleteStudent,
  editStudent,
  getStudent,
} from "../Services/AllApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Studentdetails = () => {
  const [studentData, setStudentData] = useState({
    Id: "",
    Name: "",
    Course: "",
    Grade: "",
  });

  const [studentDetails, setStudentDetails] = useState([]);
  const [editData, setEditData] = useState({
    Id: "", 
    Name: "",
    Course: "",
    Grade: "",
    id: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const createClick = async () => {
    await createStudent(studentData);
    setStudentData({ Id: "", Name: "", Course: "", Grade: "" });
    loadData();
  };

  const loadData = async () => {
    const apiResponse = await getStudent();

    setStudentDetails(apiResponse.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onDeleteClick = async (id) => {
    await deleteStudent(id);
    loadData();
  };

  const onEditShowClick = (student) => {
    setEditData({
      Id: student.Id,
      Name: student.Name,
      Course: student.Course,
      Grade: student.Grade,
      id: student.id,
    });
    setShow(true);
  };

  const onEditClick = async () => {
    await editStudent(editData.id, {
      Id: editData.Id,
      Name: editData.Name,
      Course: editData.Course,
      Grade: editData.Grade,
    });
    setShow(false);
    loadData();
  };

  return (
    <>
      <h1 className="text-center mt-3">STUDENT MANAGEMENT</h1>
      <div className="container p-4 border text-center shadow">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <input
              value={studentData.Id}
              onChange={(e) =>
                setStudentData({ ...studentData, Id: e.target.value })
              }
              className="form-control w-75 mt-2"
              placeholder="Id"
              type="text"
            />
            <input
              value={studentData.Name}
              onChange={(e) =>
                setStudentData({ ...studentData, Name: e.target.value })
              }
              className="form-control w-75 mt-2"
              placeholder="Enter Student Name"
              type="text"
            />
            <input
              value={studentData.Course}
              onChange={(e) =>
                setStudentData({ ...studentData, Course: e.target.value })
              }
              className="form-control w-75 mt-2"
              placeholder="Enter Course"
              type="text"
            />
            <input
              value={studentData.Grade}
              onChange={(e) =>
                setStudentData({ ...studentData, Grade: e.target.value })
              }
              className="form-control w-75 mt-2"
              placeholder="Grade"
              type="text"
            />
            <button onClick={createClick} className="btn btn-success mt-3 ms-5">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((student) => (
              <tr key={student.id}>
                <td>{student.Id}</td>
                <td>{student.Name}</td>
                <td>{student.Course}</td>
                <td>{student.Grade}</td>
                <td>
                  <button
                    onClick={() => onEditShowClick(student)}
                    className="btn btn-success ms-2"
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDeleteClick(student.id)}
                    className="btn btn-danger ms-2"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={editData.Id}
            onChange={(e) => setEditData({ ...editData, Id: e.target.value })}
            className="form-control border-success mt-2"
            type="text"
          />
          <input
            value={editData.Name}
            onChange={(e) => setEditData({ ...editData, Name: e.target.value })}
            className="form-control border-success mt-2"
            type="text"
          />
          <input
            value={editData.Course}
            onChange={(e) =>
              setEditData({ ...editData, Course: e.target.value })
            }
            className="form-control border-success mt-2"
            type="text"
          />
          <input
            value={editData.Grade}
            onChange={(e) =>
              setEditData({ ...editData, Grade: e.target.value })
            }
            className="form-control border-success mt-2"
            type="text"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onEditClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Studentdetails;
