using System;
using System.Linq;
using System.Windows;
using Microsoft.EntityFrameworkCore;

namespace SmartParking_Desktop
{
    public partial class ProfileWindow : Window
    {
        private string _userEmail;

        // Constructor that takes the email parameter to fetch user data
        public ProfileWindow(string email)
        {
            InitializeComponent();
            _userEmail = email; // Store the user's email for database query
            LoadBookingDetails();
        }

        // Method to load booking details from the database
        private void LoadBookingDetails()
        {
            using (var context = new UserDbContext())
            {
                // Fetch the user data from the database based on the email
                var user = context.Users
                                  .Where(u => u.Email == _userEmail)
                                  .FirstOrDefault();

                if (user != null)
                {
                    // Display the data in the UI elements
                    BookingEmailTextBlock.Text = user.Email;
                    BookingVehicleTypeTextBlock.Text = user.VehicleType;
                    BookingVehicleNumberTextBlock.Text = user.VehicleNumber;
                    BookingDurationTextBlock.Text = $"{user.Duration} hours";
                }
                else
                {
                    // If no user found, show an error or handle the case
                    MessageBox.Show("No user found with the provided email.");
                }
            }
        }

        // Log out button click handler (example)
        private void LogOutButton_Click(object sender, RoutedEventArgs e)
        {
            // Logic to log out and navigate to the login page or close the window
            this.Close();
        }
    }
}
