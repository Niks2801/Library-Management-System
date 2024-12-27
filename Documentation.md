<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management System Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1, h2, h3 {
            font-weight: bold;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
        }
        ul {
            list-style-type: none;
        }
    </style>
</head>
<body>

    <h1><strong>Library Management System Documentation</strong></h1>

    <h2><strong>Project Overview</strong></h2>
    <p>The Library Management System is a Java-based application designed to streamline the management of library operations. With an intuitive user interface and robust functionality, the system simplifies book management, member registration, and loan tracking. It is built to enhance efficiency and ensure data security for libraries of all sizes.</p>

    <h2><strong>Key Features</strong></h2>
    <ul>
        <li><strong>Book Management:</strong> Add, edit, delete, and view detailed book records.</li>
        <li><strong>Member Management:</strong> Register new members, update existing profiles, and manage member details.</li>
        <li><strong>Loan Management:</strong> Record and manage loan transactions, track due dates, and update loan records.</li>
        <li><strong>Authentication:</strong> Secure login functionality for users and administrators.</li>
        <li><strong>Responsive Design:</strong> Optimized for a seamless experience on various devices, including desktops, tablets, and smartphones.</li>
        <li><strong>Dynamic Integration:</strong> Combines JSP and Servlets for dynamic content rendering and robust backend processing.</li>
        <li><strong>Testing and Validation:</strong> Comprehensive unit tests ensure reliability and maintainability of the DAO and service layers.</li>
    </ul>

    <h2><strong>Technology Stack</strong></h2>
    <ul>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript (with modern responsive design).</li>
        <li><strong>Backend:</strong> Java (JSP, Servlets, JDBC for database connectivity).</li>
        <li><strong>Database:</strong> MySQL, with predefined schemas for books, members, and loans.</li>
        <li><strong>Build Tool:</strong> Apache Maven, used for dependency management and project lifecycle.</li>
        <li><strong>Testing Framework:</strong> JUnit, for thorough unit testing of DAO and service functionalities.</li>
    </ul>

    <h2><strong>Directory Structure</strong></h2>
    <pre>
LibraryManagementSystem/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── com.library.dao/         # DAO classes
│   │   │   ├── com.library.services/    # Service classes
│   │   │   ├── com.library.servlets/    # Servlet classes
│   ├── resources/
│   │   └── db.properties                # Database configuration
│   ├── webapp/
│   │   ├── WEB-INF/
│   │   │   ├── web.xml                  # Deployment descriptor
│   │   ├── jsp/                         # JSP files
│   │   ├── css/                         # CSS stylesheets
├── test/
│   ├── java/
│   │   ├── com.library.test/           # Unit test classes
└── README.md
    </pre>

    <h2><strong>Setup Instructions</strong></h2>
    
    <h3><strong>Prerequisites</strong></h3>
    <ul>
        <li><strong>Java Development Kit (JDK) 8 or above.</strong></li>
        <li><strong>Apache Maven for building and managing dependencies.</strong></li>
        <li><strong>MySQL Server for database management.</strong></li>
        <li><strong>An IDE such as IntelliJ IDEA, Eclipse, or NetBeans.</strong></li>
    </ul>

    <h3><strong>Steps</strong></h3>
    <ul>
        <li><strong>Clone the Repository:</strong><br> 
            <pre>git clone &lt;repository-url&gt;</pre>
            <pre>cd LibraryManagementSystem</pre>
        </li>
        <li><strong>Configure the Database:</strong><br>
            Create a database named <strong>library_db</strong>. Execute the SQL script in the <strong>resources/</strong> directory to set up tables for books, members, and loans. Update the <strong>db.properties</strong> file with database credentials.
        </li>
        <li><strong>Build the Project:</strong><br>
            <pre>mvn clean install</pre>
        </li>
        <li><strong>Deploy the Application:</strong><br>
            Copy the generated <strong>.war</strong> file from the <strong>target/</strong> directory to the webapps folder of your application server (e.g., Apache Tomcat).
        </li>
        <li><strong>Access the Application:</strong><br>
            Open a web browser and navigate to <strong>http://localhost:8080/LibraryManagementSystem</strong>.
        </li>
    </ul>

    <h2><strong>Unit Testing</strong></h2>
    <p>Overview: The system incorporates rigorous testing to ensure that all functionalities work as expected. Tests cover the major components, including DAO classes and service layers.</p>

    <h3><strong>Tested Components</strong></h3>
    <ul>
        <li><strong>BookDAO:</strong> Tests for adding, retrieving, and deleting books.</li>
        <li><strong>MemberDAO:</strong> Tests for adding, retrieving, and deleting members.</li>
        <li><strong>LoanDAO:</strong> Tests for adding, retrieving, and deleting loan records.</li>
    </ul>

    <h3><strong>Running Tests</strong></h3>
    <p>To execute the unit tests:</p>
    <pre>mvn test</pre>
    <p>Test reports are generated in the <strong>target/surefire-reports/</strong> directory.</p>

    <h2><strong>JSP Pages</strong></h2>
    <ul>
        <li><strong>Home.jsp:</strong> Main landing page with navigation.</li>
        <li><strong>AddBook.jsp:</strong> Form for adding new books.</li>
        <li><strong>ManageMembers.jsp:</strong> Form for managing members.</li>
        <li><strong>LoanRecords.jsp:</strong> Interface for loan record management.</li>
        <li><strong>Login.jsp:</strong> Secure login page for users and administrators.</li>
    </ul>

    <h2><strong>Future Enhancements</strong></h2>
    <ul>
        <li>Add advanced search functionality for books and members.</li>
        <li>Include a dashboard for analytics, providing insights into borrowing trends and library statistics.</li>
        <li>Implement email notifications for overdue loans.</li>
        <li>Develop RESTful APIs for external integrations.</li>
    </ul>

    <h2><strong>Contributors</strong></h2>
    <p><strong>Krishnakant:</strong> Project Lead and Developer (GitHub)</p>

    <h2><strong>License</strong></h2>
    <p>This project is licensed under the MIT License. Refer to the LICENSE file for detailed terms and conditions.</p>

</body>
</html>
