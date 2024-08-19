# Expense Tracker

## Overview

The Expense Tracker is a full-stack web application that enables users to track their income and expenses, manage budgets, and gain insights into their financial habits. The dashboard features interactive cards, tables, and graphs to provide a comprehensive view of personal finances.

## Features

- **Dashboard**:
  - Displays **cards** showing the maximum and minimum income and expense.
  - **Tables and graphs** to visualize and analyze spending, income, and savings.
- **Income and Expense Management**:
  - Add, edit, and delete income and expense entries.
  - Categorize transactions for easy tracking.
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Authentication**: Secure login and registration system.

## Tech Stack

- **Frontend**: Angular
- **Backend**: Spring Boot
- **Database**: MySQL

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**

   - Clone the repository from GitHub.
   - Navigate to the project directory.

2. **Set up the backend**

   - Navigate to the backend folder.
   - Configure the MySQL database connection by editing the `application.properties` file. Set the following properties:
     - `spring.datasource.url`: The URL to your MySQL database.
     - `spring.datasource.username`: Your MySQL username.
     - `spring.datasource.password`: Your MySQL password.
   - Build and run the Spring Boot application using Maven.

3. **Set up the frontend**

   - Navigate to the frontend folder.
   - Install the necessary dependencies using npm.
   - Run the Angular application.

4. **Access the application**

   - Open [http://localhost:4200](http://localhost:4200) in your browser to start using the Expense Tracker.

## Usage

- Sign up or log in to manage your financial data.
- Add, edit, and delete income and expense entries.
- Visualize your finances through tables and graphs on the dashboard.
- View key financial metrics using the summary cards for maximum and minimum income/expenses.

## Future Enhancements

- Multi-user support with different financial goals.
- Export financial data in CSV or PDF format.
- Notification alerts for budget thresholds.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
