# E-Commerce Add to Cart Application

This is a simple E-commerce application built with ReactJS, React Router, and Tailwind CSS. It demonstrates product listing, a dynamic shopping cart, and basic routing functionalities, fetching product data from the Fake Store API.

## 🚀 Live Demo (Optional)

*(If you deploy your project, add the link here, e.g.: [https://your-live-demo-link.netlify.app](https://your-live-demo-link.netlify.app))*

## ✨ Features

* **Product Listing:** Fetches and displays a list of products from the Fake Store API with images, titles, prices, and descriptions.
* **Responsive Design:** Products and cart pages are designed to be responsive across different screen sizes using Tailwind CSS.
* **Add to Cart:** Users can add products to the shopping cart.
* **Remove from Cart:** Products can be removed from the cart.
* **Dynamic Quantity Control:** Users can increase or decrease the quantity of items directly within the cart.
* **Real-time Price Updates:** Total price for each item and the overall cart total update dynamically with quantity changes.
* **10% Discount:** A 10% discount is applied to the final total price in the cart.
* **Cart Persistence:** Cart items are stored in `localStorage` to persist across page refreshes.
* **Routing:** Seamless navigation between the product listing page and the cart page using React Router.
* **Global State Management:** Cart state is managed efficiently using React Context API.

## 🛠️ Technologies Used

* **ReactJS:** A JavaScript library for building user interfaces.
* **React Router v6:** For declarative routing in React applications.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
* **JavaScript (ES6+):** For application logic.
* **HTML5/CSS3:** Standard web technologies.

## 📦 API Used

* **Fake Store API:** `https://fakestoreapi.com/` - Used to fetch mock e-commerce product data.

## 📂 Project Structure

The project follows a standard React application structure, organized for maintainability and scalability:

add-to-cart-app/
├── public/
│   └── index.html
├── src/
│   ├── components/         # Reusable UI components (e.g., Navbar, Product CardCartItem)
|   |
│   │   ├── CartItem.js
│   │   ├── Navbar.js
│   │   └── ProductCard.js
│   ├── context/             # React Context for global state (e.g., CartContext)
│   │   └── CartContext.js
│   ├── pages/        # Components representing full-page views (e.g., HomePage CartPage)
|   |  
│   │   ├── CartPage.js
│   │   └── HomePage.js
│   ├── App.js               # Main application component with routing
│   ├── index.js             # Entry point of the React app
│   └── index.css            # Global styles and Tailwind CSS directives
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js       # Tailwind CSS configuration


## ⚙️ Installation and Setup

Follow these steps to get the project up and running on your local machine:

1.  **Clone the Repository (if applicable):**
    ```bash
    # If this project is in a Git repository, clone it first
    git clone <repository-url>
    cd add-to-cart-app
    ```
    *(If you're building from scratch and just received the code, skip cloning and ensure you are in your project root directory after `npx create-react-app`)*

2.  **Navigate to the Project Directory:**
    ```bash
    cd add-to-cart-app
    ```

3.  **Install Dependencies:**
    This command will install all the required packages listed in `package.json`.
    ```bash
    npm install
    # or
    yarn install
    ```
    *Ensure `react-router-dom`, `tailwindcss`, `postcss`, and `autoprefixer` are installed.*

4.  **Run the Application:**
    This will start the development server and open the application in your default browser (usually `http://localhost:3000`).
    ```bash
    npm start
    # or
    yarn start
    ```

## 🚀 Usage

* **Browse Products:** The homepage (`/`) displays all available products.
* **Add to Cart:** Click the "Add to Cart" button on any product to add it to your cart. The button will change to "Remove from Cart" if the item is already in the cart.
* **View Cart:** Click the "Cart" link in the navigation bar to go to the cart page (`/cart`). The cart icon will show the total number of items in the cart.
* **Manage Cart Items:**
    * Use the `+` and `-` buttons to increase or decrease the quantity of each item.
    * Click "Remove" next to an item to remove it completely from the cart.
* **View Totals:** The cart page dynamically displays the subtotal, the 10% discount, and the final total price.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 
