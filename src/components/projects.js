function Projects() {
    return (
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">Education Dashboard</h3>
            <p className="text-gray-600">Web dashboard for students and teachers</p>
            <p className="text-sm text-gray-500">Technologies: PHP, Bootstrap, HTML, CSS, SQL, phpMyAdmin</p>
            <p className="text-sm text-gray-500">
              Description: Created a web-based dashboard for students and teachers to track presentation dates, jury assignments, and grades.
              The application includes features for administrators to input and manage data effectively, allowing real-time monitoring of
              student performance and enhancing communication between students and faculty.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">Airbnb Clone</h3>
            <p className="text-gray-600">Full-stack replica of Airbnb</p>
            <p className="text-sm text-gray-500">Technologies: Python, HTML, CSS, JavaScript, Flask, SQL, Flask APIs</p>
            <p className="text-sm text-gray-500">
              Description: Full-stack web application replicating Airbnb's key features. The backend, built with Python and Flask, handles 
              operations while the frontend ensures dynamic interactions with JavaScript. MYSQL is used for data management, and Flask APIs
              enable smooth communication between frontend and backend.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">Notes App</h3>
            <p className="text-gray-600">MERN Stack CRUD application for note management</p>
            <p className="text-sm text-gray-500">Technologies: MongoDB, React, Express, Node.js, Postman, HTML, CSS</p>
            <p className="text-sm text-gray-500">
              Description: Full-stack notes app with user authentication and CRUD functionality. The backend API endpoints were tested
              with Postman for functionality verification. MongoDB handles data storage, while React provides a responsive UI for efficient
              note management.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">E-commerce & Dashboard CMS</h3>
            <p className="text-gray-600">Next.js 13 application with server-side rendering</p>
            <p className="text-sm text-gray-500">Technologies: Next.js 13 App Router, React, Tailwind CSS, Prisma, MySQL, Stripe</p>
            <p className="text-sm text-gray-500">
              Description: A dual-purpose e-commerce and CMS platform using Next.js 13 for server-side rendering. The frontend is built with 
              React and Tailwind CSS for a responsive UI, while Prisma serves as the ORM for MySQL database interactions. The system includes 
              CRUD operations for products, orders, and user management with real-time updates. The admin dashboard enables content
              management and order tracking.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">E-commerce API Development & Database Design</h3>
            <p className="text-gray-600">RESTful API with JWT authentication</p>
            <p className="text-sm text-gray-500">Technologies: Flask, SQLAlchemy, JWT, Postman, Python</p>
            <p className="text-sm text-gray-500">
              Description: Developed a RESTful API with endpoints for user registration, login, and admin-restricted access. Secure JWT-based
              authorization was implemented for access management. Designed a robust database schema using SQLAlchemy for an e-commerce
              platform with tables for Users, Products, Orders, and OrderItems. Documented the API in Postman with detailed descriptions for
              ease of use by future developers.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  