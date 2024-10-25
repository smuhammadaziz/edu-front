import React, { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CourseCategoryHome() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('IELTS');

  const categories = ['IELTS', 'SAT', 'IGCSE', 'AS/A-LEVELS', 'AP', 'IB'];

  const courses = [
    // IELTS Courses
    { course_id: 'IELTS1', subject: 'IELTS', title: 'IELTS Mastery', name: 'John', l_name: 'Doe', price: 120000 },
    { course_id: 'IELTS2', subject: 'IELTS', title: 'IELTS Essentials', name: 'Jane', l_name: 'Smith', price: 110000 },
    { course_id: 'IELTS3', subject: 'IELTS', title: 'IELTS Advanced', name: 'Michael', l_name: 'Brown', price: 150000 },
    { course_id: 'IELTS4', subject: 'IELTS', title: 'IELTS Speaking Pro', name: 'Emily', l_name: 'White', price: 130000 },
    { course_id: 'IELTS5', subject: 'IELTS', title: 'IELTS Listening Focus', name: 'Robert', l_name: 'Johnson', price: 140000 },
    { course_id: 'IELTS6', subject: 'IELTS', title: 'IELTS Writing Excellence', name: 'Sarah', l_name: 'Lee', price: 125000 },
    { course_id: 'IELTS7', subject: 'IELTS', title: 'IELTS Complete', name: 'David', l_name: 'Miller', price: 160000 },
    { course_id: 'IELTS8', subject: 'IELTS', title: 'IELTS Success', name: 'Lisa', l_name: 'Davis', price: 155000 },

    // SAT Courses
    { course_id: 'SAT1', subject: 'SAT', title: 'SAT Math Mastery', name: 'Alice', l_name: 'Johnson', price: 170000 },
    { course_id: 'SAT2', subject: 'SAT', title: 'SAT Verbal Ace', name: 'Tom', l_name: 'Wilson', price: 160000 },
    { course_id: 'SAT3', subject: 'SAT', title: 'SAT Full Course', name: 'Daniel', l_name: 'Clark', price: 175000 },
    { course_id: 'SAT4', subject: 'SAT', title: 'SAT Reading Boost', name: 'Nancy', l_name: 'Lopez', price: 165000 },
    { course_id: 'SAT5', subject: 'SAT', title: 'SAT Writing Excellence', name: 'Charles', l_name: 'Garcia', price: 180000 },
    { course_id: 'SAT6', subject: 'SAT', title: 'SAT Strategies', name: 'Linda', l_name: 'Rodriguez', price: 150000 },
    { course_id: 'SAT7', subject: 'SAT', title: 'SAT Science Prep', name: 'Joseph', l_name: 'Martinez', price: 155000 },
    { course_id: 'SAT8', subject: 'SAT', title: 'SAT Advanced Prep', name: 'Karen', l_name: 'Gonzalez', price: 170000 },

    // IGCSE Courses
    { course_id: 'IGCSE1', subject: 'IGCSE', title: 'IGCSE Math', name: 'George', l_name: 'Harris', price: 130000 },
    { course_id: 'IGCSE2', subject: 'IGCSE', title: 'IGCSE Science', name: 'Emma', l_name: 'Moore', price: 125000 },
    { course_id: 'IGCSE3', subject: 'IGCSE', title: 'IGCSE History', name: 'Matthew', l_name: 'Taylor', price: 140000 },
    { course_id: 'IGCSE4', subject: 'IGCSE', title: 'IGCSE English', name: 'Laura', l_name: 'Anderson', price: 135000 },
    { course_id: 'IGCSE5', subject: 'IGCSE', title: 'IGCSE Geography', name: 'Jacob', l_name: 'Thomas', price: 145000 },
    { course_id: 'IGCSE6', subject: 'IGCSE', title: 'IGCSE Biology', name: 'Sophia', l_name: 'Jackson', price: 150000 },
    { course_id: 'IGCSE7', subject: 'IGCSE', title: 'IGCSE Chemistry', name: 'Ethan', l_name: 'White', price: 155000 },
    { course_id: 'IGCSE8', subject: 'IGCSE', title: 'IGCSE Physics', name: 'Olivia', l_name: 'Martin', price: 160000 },

    // AS/A-LEVELS Courses
    { course_id: 'AS1', subject: 'AS/A-LEVELS', title: 'AS-Level Math', name: 'Henry', l_name: 'Thompson', price: 175000 },
    { course_id: 'AS2', subject: 'AS/A-LEVELS', title: 'A-Level Biology', name: 'Liam', l_name: 'Garcia', price: 180000 },
    { course_id: 'AS3', subject: 'AS/A-LEVELS', title: 'AS-Level Chemistry', name: 'Zoe', l_name: 'Martinez', price: 185000 },
    { course_id: 'AS4', subject: 'AS/A-LEVELS', title: 'A-Level Physics', name: 'Mason', l_name: 'Rodriguez', price: 190000 },
    { course_id: 'AS5', subject: 'AS/A-LEVELS', title: 'AS-Level Economics', name: 'Olivia', l_name: 'Clark', price: 200000 },
    { course_id: 'AS6', subject: 'AS/A-LEVELS', title: 'A-Level Psychology', name: 'Aiden', l_name: 'Lewis', price: 210000 },
    { course_id: 'AS7', subject: 'AS/A-LEVELS', title: 'AS-Level English', name: 'Grace', l_name: 'Lee', price: 215000 },
    { course_id: 'AS8', subject: 'AS/A-LEVELS', title: 'A-Level Sociology', name: 'Isabella', l_name: 'Walker', price: 220000 },

    // AP Courses
    { course_id: 'AP1', subject: 'AP', title: 'AP Calculus', name: 'Leo', l_name: 'Robinson', price: 190000 },
    { course_id: 'AP2', subject: 'AP', title: 'AP Biology', name: 'Emma', l_name: 'Perez', price: 185000 },
    { course_id: 'AP3', subject: 'AP', title: 'AP Chemistry', name: 'Lucas', l_name: 'Hall', price: 200000 },
    { course_id: 'AP4', subject: 'AP', title: 'AP Physics', name: 'Jack', l_name: 'Young', price: 210000 },
    { course_id: 'AP5', subject: 'AP', title: 'AP English', name: 'Ella', l_name: 'Allen', price: 205000 },
    { course_id: 'AP6', subject: 'AP', title: 'AP History', name: 'Ava', l_name: 'Scott', price: 215000 },
    { course_id: 'AP7', subject: 'AP', title: 'AP Government', name: 'Lily', l_name: 'Green', price: 220000 },
    { course_id: 'AP8', subject: 'AP', title: 'AP Psychology', name: 'Mia', l_name: 'Adams', price: 225000 },

    // IB Courses
    { course_id: 'IB1', subject: 'IB', title: 'IB Math', name: 'Noah', l_name: 'Hill', price: 185000 },
    { course_id: 'IB2', subject: 'IB', title: 'IB Biology', name: 'Sophia', l_name: 'Torres', price: 195000 },
    { course_id: 'IB3', subject: 'IB', title: 'IB Chemistry', name: 'Oliver', l_name: 'Evans', price: 200000 },
    { course_id: 'IB4', subject: 'IB', title: 'IB Physics', name: 'Lily', l_name: 'Wright', price: 205000 },
    { course_id: 'IB5', subject: 'IB', title: 'IB Geography', name: 'James', l_name: 'Hernandez', price: 210000 },
    { course_id: 'IB6', subject: 'IB', title: 'IB English', name: 'William', l_name: 'King', price: 215000 },
    { course_id: 'IB7', subject: 'IB', title: 'IB Economics', name: 'Isabella', l_name: 'Lopez', price: 220000 },
    { course_id: 'IB8', subject: 'IB', title: 'IB Psychology', name: 'Evelyn', l_name: 'Gonzalez', price: 225000 },
  ];

  useEffect(() => {
    setData(courses);
    filterCourses(courses, 'IELTS'); // Show IELTS courses initially
  }, []);

  const filterCourses = (courses, category) => {
    const filtered = courses.filter(course => course.subject === category);
    setFilteredData(filtered);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterCourses(data, category);
  };

  return (
    <div className="bg-fuchsia-900 py-20">
      <div className="container mx-auto justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-left text-5xl font-bold text-white mb-6">Courses</h2>
        <h2 className="text-left text-2xl w-full sm:w-2/3 font-bold text-white mb-10">
          Connect with Qualified Tutors from around the world and book your First Free Trial session.
        </h2>
        <div className="flex flex-wrap mt-4">
          {categories.map(category => (
            <button
              key={category}
              className={`m-1 px-6 sm:px-10 text-xl sm:text-2xl py-2 sm:py-3 font-bold rounded ${
                selectedCategory === category ? 'bg-white text-black' : 'bg-fuchsia-950 text-white'
              } mt-2 sm:mt-0`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredData.map(course => (
            <NavLink
              to={`/all/courses/${course.course_id}`}
              key={course.course_id}
              className="bg-white p-4 rounded shadow hover:shadow-2xl shadow-fuchsia-200 flex flex-col justify-between"
            >
              <div>
                <FaGraduationCap className="text-fuchsia-700 text-3xl mb-2" size={50} />
                <h3 className="text-3xl font-semibold text-black">{course.title}</h3>
                <p className="text-gray-700 text-black">{course.name} {course.l_name}</p>
              </div>
              <p className="text-gray-900 text-2xl font-bold text-black mt-5">
                {Number(course.price).toLocaleString('en-US')} UZS
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCategoryHome;
