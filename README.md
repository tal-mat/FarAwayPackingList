# Far Away Packing List 🏝️🧳

This is a simple packing list application built using React. The app allows users to add items to a packing list, mark items as packed, delete individual items, and clear the entire list. It's designed to help users stay organized when preparing for a trip.

This project was created as part of *The Ultimate React Course 2024: React, Next.js, Redux & More* by Jonas Schmedtmann.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Features

- **Add Items**: Users can add items to the packing list with a specified quantity.
- **Mark Items as Packed**: Items can be marked as packed, which will visually strike them through in the list.
- **Delete Items**: Users can delete individual items from the list.
- **Clear List**: The entire list can be cleared after confirmation from the user.
- **Sort Items**: Items can be sorted by input order, description, or packed status.
- **Packing Stats**: The app displays the total number of items, the number of packed items, and the percentage of items packed.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tal-mat/FarAwayPackingList.git
    ```

2. Navigate to the project directory:

    ```bash
    cd FarAwayPackingList
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. Add an item to the packing list by entering a description and selecting a quantity.
2. Mark items as packed by checking the checkbox next to the item.
3. Delete an item by clicking the ❌ button.
4. Clear the entire list by clicking the "Clear list" button.
5. Sort the list by using the dropdown menu to choose between sorting by input order, description, or packed status.
6. View your packing stats at the bottom of the app.

## Components

- **App**: The main component that manages the state of the app and coordinates other components.
- **Logo**: Displays the app's logo with emoji icons.
- **Form**: Handles the addition of new items to the packing list.
- **PackingList**: Displays the list of items, with the ability to delete or toggle the packed status of each item.
- **Item**: Represents an individual item in the packing list.
- **Stats**: Displays the packing statistics, including the total number of items, packed items, and packing percentage.
