# EASESMITH

## Project Overview

This project is a React-based UI for an E-commerce Listing Page designed to display a grid of products. Users can view product details and add items to their cart through modals. The design is based on the provided Figma mockup.

## Features

- Search bar for product searching
- Product cards displaying images, names, prices, and action buttons
- Redirect to a custom "Thank You" page when viewing a product
- Modal for adding products to the cart
- Pagination for navigating through multiple product listings

## Installation

1. Clone the repository

   - `git clone https://github.com/yourusername/ecommerce-listing-page.git`
   - `cd ecommerce-listing-page`

2. Install dependencies

   - `npm install`

3. Start the development server
   - `npm start`

Your application will be running at `http://localhost:3000`.

## Project Structure

The project is structured into the following main components:

- **Header**: Contains the search bar and icons for profile and cart.
- **FilterProducts**: Displays filtering options and product listings.
- **ShoppingCartList**: Renders individual product cards with options to view or add to the cart.
- **AddToCartModal**: Shows product details when the "Add to Cart" button is clicked.
- **Cart**: Displays a confirmation message after placing an order.
- **Footer**: Contains additional information about the company, services, and contact details.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For managing navigation between the product listing page and the Thank You page.
- **CSS**: For styling the components based on the Figma design.

## Usage

- **Viewing Products**: Click the "View Product" button on any product card to be redirected to the "Thank You" page.
- **Adding to Cart**: Click the "Add to Cart" button to open a modal displaying the product details and a confirmation button.

## Challenges Faced

- Implementing the modal functionality required careful management of state to ensure the correct product details were displayed.
- Ensuring the pagination worked smoothly with the mock data was challenging but manageable with React state management.
