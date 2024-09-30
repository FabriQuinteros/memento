# Memento Pattern App

A simple application demonstrating the use of the **Memento Design Pattern** in React. The app allows users to save and restore different states using the memento approach, ensuring that any change can be undone when necessary.

## Features

- **Save State**: Users can input a value and save it as the current state. The input will be shown and stored using the Memento pattern.

- **Undo State**: Users can undo their previous actions by restoring the last saved state. The app keeps a history of the user's inputs, allowing multiple undo actions.

- **State Persistence**: The current state is stored internally in an originator and can be reverted to earlier states using mementos managed by a caretaker.

## How It Works

- The **Originator** holds the current state and can create a memento to save its state or restore the state from a memento.
  
- The **Memento** class stores the state of the originator and provides it back when needed.

- The **Caretaker** manages a history of mementos, allowing users to undo actions by restoring the originator's state to a previous one.

## Technologies Used

- **React**: For building the user interface and managing component states.
- **Material-UI**: For styling the components and ensuring a responsive design.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fabriquinteros/memento.git
   ```

2. Navigate to the project directory:

   ```bash
   cd memento
   ```

3. Install the dependencies:

   ```bash
    npm install
    ```

4. Run the application:

   ```bash
   npm start
   ```

## Usage

- Open the app in your browser and start adding items to your shopping list.
- Manage your lists by adding, editing, deleting, and marking items as purchased or unpurchased.
- Switch between different shopping lists using the tabbed interface, and customize each list with a unique color.

## Live Demo

Try the application live at [Live Demo Link](https://fabriquinteros.github.io/memento)