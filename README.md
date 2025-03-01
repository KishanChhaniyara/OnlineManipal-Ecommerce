# OnlineManipal-Ecommerce
E-Commerce Project
E-Commerce 
​ 

​ 


Introduction 

The rise of online shopping has transformed the way people buy and sell products. This project aimed to create a user-friendly e-commerce website that provides a seamless and engaging shopping experience. From browsing products to placing orders, the website ensures a smooth journey for customers. 

Objectives 

The main goals of this project were: 

User-Friendly Interface: A clean, intuitive UI for effortless navigation. 

Product Catalog: A well-organized catalog with categorized listings. 

Secure Authentication: A signup and login system ensuring user security. 

Shopping Cart & Checkout: A feature-rich cart for order management. 

Address Management: Users can save multiple addresses for future use. 

MockAPI Integration: API-driven data handling for users and products. 

Technologies Used 

To build a scalable and efficient platform, we used: 

Frontend: HTML, CSS, JavaScript 

Styling Frameworks:  Custom CSS 

Backend (MockAPI for testing): Used for user authentication, orders, and address storage. 

LocalStorage: Used for storing cart data. 

 

System Analysis 

Identification Of Need: 

As e-commerce continues to grow with the growing trend of online shopping, companies need to have an online platform to connect with more customers and facilitate sales. Consumers also appreciate the ease of shopping and buying products online. A need for an e-commerce website is because of: 

Growing demand for online purchasing 

Companies that want to grow beyond retail outlets 

Customers who want an easy buying experience with secure payments and user-friendly navigation 

The retail industry's need for digital transformation 

Preliminary Investigation 

A preliminary research was conducted to figure out the necessary needs and feasibility before development. The research involved: 

Identifying target audiences and their preferences for online buying through market research 

Researching the features that competitors (like Amazon and Flipkart) provide. 

Selecting the appropriate technologies (HTML, CSS, JavaScript, and MockAPI for testing) is known as technology stack selection. 

User specifications: being aware of key features such as address management, safe login, cart system, and product catalog. 

Feasible Study 

Before integrating a real backend, the project tests features using HTML, CSS, JavaScript, and MockAPI. 

Cart data durability is achieved through the use of LocalStorage. 

A genuine backend (Firebase, MySQL, or MongoDB) and a payment mechanism (Razorpay, Stripe) may be added in the future. 

Project Planning 

User Authentication: Secure signup and login system. 

Product Catalog: Categorized product listings with images, descriptions, and pricing. 

Shopping Cart & Checkout: Add/remove products, quantity adjustments, and checkout process. 

Address Management: Save multiple addresses for faster checkouts. 

MockAPI Integration: API-driven data handling for users, orders, and addresses. 

 

Project Scheduling 

Phase 

Tasks 

Duration 

Planning 

Define scope, gather requirements, and feasibility study 

1 week 

Design 

UI/UX 

2 weeks 

Development 

Frontend coding, API integration, cart functionality 

4 weeks 

Testing 

Unit testing and bug fixes 

2 weeks 

Deployment  

Host website, final testing, user feedback 

1 week 

 

System Design 

Modularization Details 

The e-commerce system is divided into multiple functional modules for better maintainability and scalability. 

 

User Management Module 

User registration & login 

Authentication & authorization 

Address management 

Product Catalog Module 

Fetching product data from MockAPI 

Displaying product categories, details, and images 

Shopping Cart Module 

Add, remove, and update items in the cart 

Calculate total cost dynamically 

Order Management Module (Fututre Scope) 

Checkout process with selected address 

Store order details in Database 

Admin Module (Future Scope) 

Manage product listings 

Monitor orders and customer data 

 

 

Features Implemented 

User Authentication 

New users can register, while existing users can log in securely. 

The system checks if the email is already registered. 

Password validation ensures security. 

Product Catalog & Display 

Products are dynamically fetched from an API. 

Each product has images, descriptions, and pricing details. 

Clicking a product opens a detailed view with multiple images 

Shopping Cart 

Users can add/remove products and adjust quantities in the cart. 

Cart details persist using LocalStorage. 

Address Management 

Users can save multiple addresses (Home, Office, etc.). 

Each address includes House No., Street, Landmark, City, State, Pincode, and Mobile Number. 

Logged-in users can select a saved address, while guests must enter one manually. 

MockAPI Integration 

User data (signup details, addresses) is stored via MockAPI. 

Orders are also logged in MockAPI for tracking purposes. 

Implementation Details 

We implemented the website with a structured workflow: 

User Signup & Login:  

Before signing up, the system checks if the email already exists. 

If the user exists, they are redirected to log in or reset their password. 

Adding to Cart:  

Users can browse the product list and add items to the cart. 

The cart dynamically updates and calculates the total price. 

Checkout Process:  

If logged in, the user can choose a saved address. 

If not logged in, they must enter a new delivery address. 

After confirming, the order is processed and stored in MockAPI. 

Challenges Faced 

API Response Delays: We optimized fetch requests to enhance performance. 

Cart Synchronization: Ensuring cart data remains consistent across sessions. 

Address Handling: Structuring address input fields while keeping them user-friendly. 

 

Future Enhancements 

Real Backend Integration: Implementing Firebase, MySQL, or MongoDB. 

Payment Gateway: Integrating Razorpay, Stripe, or PayPal. 

User Profiles & Order History: Allowing users to track past orders. 

Enhanced UI/UX: Improving animations and interactive elements. 

 Conclusion 

This project successfully delivered a functional e-commerce website that simplifies online shopping. By leveraging API-driven development and effective UI design, we created an engaging experience for users. Future iterations will enhance the platform with a real backend and secure payment processing, making it a fully-fledged online marketplace. 

 

 

 

 

 

 

 

 

 

 

 
