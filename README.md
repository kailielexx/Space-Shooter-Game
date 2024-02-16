# Space Shooter Game in JavaFX

## Overview
Space Shooter is a thrilling arcade-style game developed using JavaFX, where players navigate a spaceship through a galaxy filled with enemies and obstacles. The objective is to survive as long as possible while destroying enemy ships and dodging incoming fire to achieve the highest score.

## Features
- **Dynamic Enemies:** Encounter various types of enemy ships with different behaviors and attack patterns.
- **Power-ups:** Collect power-ups to enhance your spaceship with better weapons and shields.
- **Score System:** Earn points by destroying enemies and advancing through levels.
- **Difficulty Levels:** The game offers multiple difficulty levels to challenge both beginners and seasoned players.
- **Customizable Controls:** Players can customize their control scheme to suit their playstyle.

## Prerequisites
To run this game, you'll need to have the following installed:
- Java Development Kit (JDK) version 8 or higher
- JavaFX SDK (compatible with your JDK version)

Ensure that your JAVA_HOME environment variable is set to your JDK installation path.

## Installation and Running the Game

### Step 1: Clone the Repository

### Step 2: Compile the Source Code
```sh
javac -cp "path/to/javafx-sdk/lib/*" src/*.java -d bin
```

### Step 3: Run the Game
```sh
java --module-path "path/to/javafx-sdk/lib" --add-modules javafx.controls,javafx.fxml -cp bin Main
```

Replace `"path/to/javafx-sdk/lib"` with the actual path to your JavaFX SDK libraries.

## Dependencies
- **JavaFX:** Used for creating the graphical interface and animations.
- **JDK:** The Java Development Kit is required for compiling and running the Java application.

## Contributing
Contributions to the Space Shooter game are welcome! Whether it involves fixing bugs, adding new features, or improving documentation, your help is appreciated. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
- Special thanks to [JavaFX](https://openjfx.io/) for providing the graphical framework.
- Appreciation for all contributors and players who have supported this project.

---
