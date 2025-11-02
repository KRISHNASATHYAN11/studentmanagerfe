import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <section id="bg1">
          <div className="container-fluid">
            <div className="row">
              <h1 className="text-center text-success mt-3 p-3">
                Student Management System: Overview, Key Features, and More
              </h1>
              <div className="col-12 col-md-6 mt-2 p-3">
                <img
                  className="w-100 image-fluid"
                  src="https://img.freepik.com/free-photo/3d-cartoon-back-school_23-2151676667.jpg?semt=ais_hybrid&w=740&q=80"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-6 mt-2 p-3">
                <p>
                  Managing student records used to involve a lot of paperwork,
                  stacks of files, and manual registers. If you’re still using
                  this process, there are now more efficient alternatives
                  available. Schools today are transforming how they handle
                  administrative tasks by embracing technology, and you don’t
                  want to be left behind. A Student Management System (SMS) is
                  the game-changer you need. It’s not just about moving away
                  from paper—it’s about automating and simplifying everything
                  from attendance tracking and grade management to fee
                  collection and parent communication. Instead of spending
                  unnecessary time and effort, a streamlined, efficient system
                  can manage it all. Let’s explore what a Student Management
                  System is, its key features, and why it has become an
                  essential tool for schools.
                </p>
                <h2> Benefits of Student Information Management System</h2>
                <p>
                  Better Management of Student Data A student management system
                  is also a student database management system. It helps you
                  manage all the student-related data in a well-organized
                  manner. A Student Management System gives you a unique ID
                  against every student. And using that ID, you can easily track
                  the fee status, assignments, exam results, grades, parent info
                  within seconds. Improves Overall Teacher Productivity Similar
                  to the students, the teachers also become more productive with
                  a student management system. It’s because, with a system in
                  place, teachers won’t have to manually take attendance, manage
                  timetables and assignments. Everything can be loaded on the
                  management software, which can be accessed by all. This way,
                  teachers can focus more on academics and learning than
                  administrative tasks.
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-center text-success">
            What is a Student Management System?
          </h1>
          <p>
            A student management system is a software/tool that helps manage
            everything related to students easily. An ideal Student Management
            will help you manage a range of data, including:
          </p>
          <p>
            Basically, a student management system offers a 360-degree view of
            students. And this helps monitor, track and improve the educational
            performance and several other aspects of students.
            <div className="text-center mt-3">
              <h6 className="text-success">ENTER HERE</h6>
              <Link to={"/students"} className="btn btn-success">
                STUDENT MANAGER
              </Link>
            </div>
          </p>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4 text-center">
                <h3 className="text-primary text-center">PARTNER WITH</h3>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D0BAQFd1PJLSfgSpA/company-logo_200_200/company-logo_200_200/0/1712842114675/the_student_funding_company_logo?e=2147483647&v=beta&t=Kn1Ao9pw05bcP-gaNf6v9DQZSK1G_74feugIfq2XZ7k"
                  alt=""
                />
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
