import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import useLang from '../../../hooks/useLang';
import content from '../../../localization/content';

export default function AllCourses() {
  const [selectedOptionn, setSelectedOptionn] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const [price, setPrice] = useState(10000000);
  const [selectedLanguage] = useLang();

  // Mock data for 20 courses
  const data = [
    { course_id: '1', subject: 'IELTS', title: 'IELTS Basics', price: 500000, rating: 4.5, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'John', l_name: 'Doe' },
    { course_id: '2', subject: 'SAT', title: 'SAT Mastery', price: 1000000, rating: 4.2, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Jane', l_name: 'Smith' },
    { course_id: '3', subject: 'IGCSE', title: 'IGCSE Math', price: 750000, rating: 4.0, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Alice', l_name: 'Johnson' },
    { course_id: '4', subject: 'AP', title: 'AP Biology', price: 1200000, rating: 4.7, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Tom', l_name: 'Brown' },
    { course_id: '5', subject: 'IB', title: 'IB Chemistry', price: 1500000, rating: 4.8, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Lucas', l_name: 'Taylor' },
    { course_id: '6', subject: 'AS/A-LEVELS', title: 'A-Levels Physics', price: 2000000, rating: 4.1, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Emily', l_name: 'Martinez' },
    { course_id: '7', subject: 'IELTS', title: 'IELTS Speaking', price: 600000, rating: 4.3, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Chris', l_name: 'Garcia' },
    { course_id: '8', subject: 'SAT', title: 'SAT Verbal', price: 900000, rating: 4.6, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Sophia', l_name: 'Rodriguez' },
    { course_id: '9', subject: 'IGCSE', title: 'IGCSE English', price: 500000, rating: 3.9, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Michael', l_name: 'Lopez' },
    { course_id: '10', subject: 'AP', title: 'AP Calculus', price: 1300000, rating: 4.2, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Oliver', l_name: 'Hernandez' },
    { course_id: '11', subject: 'IB', title: 'IB Physics', price: 1450000, rating: 4.9, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Ella', l_name: 'Wilson' },
    { course_id: '12', subject: 'AS/A-LEVELS', title: 'A-Levels Math', price: 1850000, rating: 4.3, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Ava', l_name: 'Lee' },
    { course_id: '13', subject: 'IELTS', title: 'IELTS Writing', price: 650000, rating: 4.1, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'James', l_name: 'Walker' },
    { course_id: '14', subject: 'SAT', title: 'SAT Math', price: 950000, rating: 4.4, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Amelia', l_name: 'Young' },
    { course_id: '15', subject: 'IGCSE', title: 'IGCSE Biology', price: 700000, rating: 4.0, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Benjamin', l_name: 'Allen' },
    { course_id: '16', subject: 'AP', title: 'AP English', price: 1100000, rating: 4.6, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Lucas', l_name: 'Scott' },
    { course_id: '17', subject: 'IB', title: 'IB Business', price: 1400000, rating: 4.3, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Sophia', l_name: 'Hall' },
    { course_id: '18', subject: 'AS/A-LEVELS', title: 'A-Levels Economics', price: 1900000, rating: 4.7, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Charlotte', l_name: 'Adams' },
    { course_id: '19', subject: 'IELTS', title: 'IELTS Grammar', price: 550000, rating: 3.8, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Jacob', l_name: 'White' },
    { course_id: '20', subject: 'SAT', title: 'SAT Writing', price: 850000, rating: 4.0, image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp', name: 'Evelyn', l_name: 'Clark' },
  ];

  const filterCourses = (courses) => {
    return courses
      .filter((course) => {
        if (selectedOptionn && selectedOptionn !== 'ALL') {
          return course.subject === selectedOptionn;
        }
        return true;
      })
      .filter((course) => {
        return course.price <= price;
      });
  };

  const filteredCourses = filterCourses(data);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredCourses.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mt-10 text-2xl mb-10 text-center mx-auto">
          {content[selectedLanguage].coursesPage.find}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mx-auto justify-center block">
          <select
            value={selectedOptionn}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedOptionn(value === 'ALL' ? '' : value);
            }}
            className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
          >
            <option value="" disabled className="text-body dark:text-bodydark">
              {content[selectedLanguage].coursesPage.course}
            </option>
            <option value="ALL" className="text-body dark:text-bodydark">ALL</option>
            <option value="IELTS" className="text-body dark:text-bodydark">IELTS</option>
            <option value="SAT" className="text-body dark:text-bodydark">SAT</option>
            <option value="IGCSE" className="text-body dark:text-bodydark">IGCSE</option>
            <option value="AP" className="text-body dark:text-bodydark">AP</option>
            <option value="IB" className="text-body dark:text-bodydark">IB</option>
            <option value="AS/A-LEVELS" className="text-body dark:text-bodydark">AS/A-LEVELS</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 mx-auto">
          {currentProducts.length > 0
            ? currentProducts.map((product) => (
                <NavLink to={`/all/courses/${product.course_id}`} key={product.course_id} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img src={product.image} alt="course image" className="h-64 w-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-black">{product.title}</h3>
                  <h3 className="text-sm font-bold text-black opacity-80 uppercase">{product.name} {product.l_name}</h3>
                  <p className="mt-5 text-lg font-medium text-gray-900">{product.price.toLocaleString('en-US')} UZS</p>
                </NavLink>
              ))
            : 'No courses available'}
        </div>

        {/* Pagination buttons */}
        <div className="mt-8">
          <nav className="px-4 flex items-center justify-between sm:px-0">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer rounded-full hover:bg-fuchsia-900 hover:text-white relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:text-gray-400"
            >
              Previous
            </button>
            <div className="hidden md:-mt-px md:flex">
              {Array.from({ length: Math.ceil(filteredCourses.length / productsPerPage) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`cursor-pointer relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === i + 1 ? 'text-black border-black-900 border-2' : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredCourses.length / productsPerPage)}
              className="cursor-pointer rounded-full hover:bg-fuchsia-900 hover:text-white relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:text-gray-400"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
