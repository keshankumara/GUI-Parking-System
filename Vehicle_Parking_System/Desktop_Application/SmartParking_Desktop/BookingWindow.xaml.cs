using System;
using System.Linq;
using System.Windows;
using System.Windows.Controls;

namespace SmartParking_Desktop
{
    /// <summary>
    /// Interaction logic for BookingWindow.xaml
    /// </summary>
    public partial class BookingWindow : Window
    {
        public BookingWindow()
        {
            InitializeComponent();
        }

        // Event handler for the "Book" button click
        private void BookButton_Click(object sender, RoutedEventArgs e)
        {
            // Get the entered values
            string email = EmailTextBox.Text;
            string vehicleType = (VehicleTypeComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
            string vehicleNumber = VehicleNumberTextBox.Text;
            string parkingDuration = ParkingDurationTextBox.Text;

            // Validate if the input fields are filled out correctly
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(vehicleType) ||
                string.IsNullOrEmpty(vehicleNumber) || string.IsNullOrEmpty(parkingDuration))
            {
                MessageBox.Show("Please fill in all the details.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Try to parse parking duration as a number
            if (!double.TryParse(parkingDuration, out double duration) || duration <= 0)
            {
                MessageBox.Show("Please enter a valid parking duration.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Use the UserDbContext to find the user by their email
            using (UserDbContext context = new UserDbContext())
            {
                var user = context.Users.SingleOrDefault(u => u.Email == email);

                if (user == null)
                {
                    MessageBox.Show("No user found with this email address.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // Update the user with the new vehicle details
                user.VehicleType = vehicleType;
                user.VehicleNumber = vehicleNumber;
                user.Duration = parkingDuration;

                // Save the changes to the database
                context.SaveChanges();

                // Inform the user that the booking was successful
                MessageBox.Show($"Parking booked successfully for {vehicleType} ({vehicleNumber}) at {email} for {duration} hours.", "Booking Successful", MessageBoxButton.OK, MessageBoxImage.Information);
                // Open the profile window
                ProfileWindow profileWindow = new ProfileWindow(email);
                profileWindow.Show();

                // Close the login window
                this.Close();
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {

        }

        private void LogOutButton_Click(object sender, RoutedEventArgs e)
        {
            Window.GetWindow(this).Close();
        }
    }
}
