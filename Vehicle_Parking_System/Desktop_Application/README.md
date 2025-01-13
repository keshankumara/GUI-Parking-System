
# Vehicle Parking System

## Description

The **Vehicle Parking System** is a desktop application built with WPF (Windows Presentation Foundation) and SQLite. It provides an intuitive solution for managing car parking spaces, including functionalities such as displaying available slots, booking slots, managing slot details, and performing admin operations.

## Features

- **Home Page**: Displays an overview of the parking system and welcomes users.
- **About Page**: Showcases detailed information about the parking system, its features, and purpose.
- **Booking Page**: Allows users to search and book parking slots.
- **Admin Page**: Enables administrators to view bookings, manage parking spaces, and update slot details.

## Technologies Used

- **Frontend**: WPF (Windows Presentation Foundation) for a responsive and user-friendly interface.
- **Database**: SQLite for lightweight and efficient local data storage.
- **Programming Language**: C# for application logic and UI interaction.

## Installation

### Prerequisites

- Visual Studio (with .NET Desktop Development workload installed).
- SQLite installed on your system or bundled in the application.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vehicle-parking-system.git
   ```

2. Open the project in Visual Studio:
   - Launch Visual Studio.
   - Navigate to `File -> Open -> Project/Solution`.
   - Select the `.sln` file from the cloned repository.

3. Build the solution:
   - Press `Ctrl+Shift+B` or select `Build -> Build Solution` from the menu.

4. Run the application:
   - Press `F5` to start the application.
   - The system will launch the WPF application with SQLite integration.

## Folder Structure

```
vehicle-parking-system/
├── Assets/
│   ├── Images/          (Image resources)
├── Data/
│   ├── ParkingSystem.db (SQLite database file)
├── Views/
│   ├── Home.xaml        (Home Page UI)
│   ├── About.xaml       (About Page UI)
│   ├── Booking.xaml     (Booking Page UI)
│   ├── Admin.xaml       (Admin Page UI)
├── ViewModels/
│   ├── HomeViewModel.cs
│   ├── AboutViewModel.cs
│   ├── BookingViewModel.cs
│   ├── AdminViewModel.cs
├── Models/
│   ├── ParkingSlot.cs   (Data models)
│   ├── Booking.cs
├── App.xaml             (Application entry point)
├── MainWindow.xaml       (Main Window UI)
└── README.md
```

## Usage

1. **Home Page**: Launch the application and start at the Home page for an overview.
2. **About Page**: Learn about the system’s features and purpose.
3. **Booking Page**: Select a parking slot and confirm your booking.
4. **Admin Page**: Manage parking spaces and view all bookings.

## Database Details

- The SQLite database file (`ParkingSystem.db`) is located in the `Data` folder.
- Tables include:
  - `ParkingSlots`: Stores slot details (availability, location, etc.).
  - `Bookings`: Records user bookings with relevant details.

## Future Enhancements

- Add user authentication for booking and admin operations.
- Integrate payment features for slot bookings.
- Implement notifications for booking reminders.
- Support multi-user environments with cloud integration.

## Contributing

Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request for review.

## License

This project is licensed under the MIT License.

---

**Start managing parking operations effortlessly with the Vehicle Parking System!**
