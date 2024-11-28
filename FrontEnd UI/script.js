// script.js

// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Navigation Handler
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetPage = event.target.getAttribute("href").replace(".html", ""); // Get target page
            loadPage(targetPage);
        });
    });

    // Load Page Content
    function loadPage(page) {
        const main = document.querySelector("main");
        if (page === "Book") {
            main.innerHTML = `
                <h2>Manage Books</h2>
                <p>Here you can add, update, and delete books.</p>
                <button onclick="addBook()">Add Book</button>
                <button onclick="updateBook()">Update Book</button>
                <button onclick="deleteBook()">Delete Book</button>
            `;
        } else if (page === "member") {
            main.innerHTML = `
                <h2>Manage Members</h2>
                <p>Here you can add, update, and delete members.</p>
                <button onclick="addMember()">Add Member</button>
                <button onclick="updateMember()">Update Member</button>
                <button onclick="deleteMember()">Delete Member</button>
            `;
        } else if (page === "loans") {
            main.innerHTML = `
                <h2>Manage Loans</h2>
                <p>Here you can issue and return books.</p>
                <button onclick="issueLoan()">Issue Loan</button>
                <button onclick="returnLoan()">Return Loan</button>
            `;
        } else {
            main.innerHTML = `
                <h2>Welcome to the Library Management System</h2>
                <p>Use the navigation menu to manage books, members, and loan transactions.</p>
            `;
        }
    }

    // Initialize Default Page
    loadPage("default");

    // Example Functions for Buttons
    window.addBook = function () {
        alert("Add Book functionality will be implemented here.");
    };

    window.updateBook = function () {
        alert("Update Book functionality will be implemented here.");
    };

    window.deleteBook = function () {
        alert("Delete Book functionality will be implemented here.");
    };

    window.addMember = function () {
        alert("Add Member functionality will be implemented here.");
    };

    window.updateMember = function () {
        alert("Update Member functionality will be implemented here.");
    };

    window.deleteMember = function () {
        alert("Delete Member functionality will be implemented here.");
    };

    window.issueLoan = function () {
        alert("Issue Loan functionality will be implemented here.");
    };

    window.returnLoan = function () {
        alert("Return Loan functionality will be implemented here.");
    };
});

// Show the login form based on the selected role
function showLogin(role) {
    const loginForm = document.getElementById("login-form");
    const loginRole = document.getElementById("login-role");
    loginForm.classList.remove("hidden");
    loginRole.innerText = `${role} Login`;
}

// Hide the login form
function hideLogin() {
    const loginForm = document.getElementById("login-form");
    loginForm.classList.add("hidden");
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation (extend this for real use cases)
    if (username && password) {
        alert(`Welcome, ${username}!`);
        hideLogin();
    } else {
        alert("Please enter valid credentials.");
    }
}
