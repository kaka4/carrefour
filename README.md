# 🛍️ Carrefour E-commerce Kata

# Overview

This project is an Angular application integrated with Ionic for building cross-platform mobile / browser applications. The application features a modular architecture and use Ngrx as a state management. 

# Setup Instructions

Prerequisites

- Node.js (v14 or later)

Installation

1. Clone the repository:
   git clone https://github.com/kaka4/carrefour
   cd carrefour

2. Install dependencies:
   npm install

3. Run the application:
   npm run start

# Features

- Home Page:
  - Fetch and display all the products
  - Possibility to add a product to the cart
  - Filter the products by minimum and maximum price (products will be then ordered by price).
- Cart Page: Provides a shopping cart features for users to manage their purchases.
- Side menu: Can access to products categories and other pages of the app

# Architectural Overview

The application is organized into several key modules and directories:


```
── src
│   ├── app
│   │   ├── core : Contains core services and configurations used throughout the application.
│   │   │   ├── config   : contains for now just a config file to change params in the app (delivery fees)
│   │   │   ├── models   : contains the different models of the app
│   │   │   ├── services : services making the backend calls
│   │   │
|   |   ├── pages  : houses the main feature pages of the application, including cart, category, and home.
│   │   ├── shared : contains shared components and modules that are reusable across different parts of the application.
│   │   ├── store  : Manages the global state of the application using NgRx, organized into actions, effects, reducers, selectors, and state.
│   │   │   ├── actions   : defines the actions that can be dispatched to alter the state.
│   │   │   ├── effects   : handles side effects such as API calls (in an api folder).
│   │   │   ├── reducers  : defines how the state is transformed based on actions.
│   │   │   ├── selectors : provides functions to select and derive state data.
│   │   │   └── state     : contains the state definitions and initial state.
│   ├── assets
│   │   ├── i18n : Contains the locales of the app in french & english
│   │   ├── icon : Contains only the favicon of the app
│   │   ├── img  : Contains the images used in the app
```
