 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using BCrypt.Net;

namespace SmartParking_Desktop
{
    /// <summary>
    /// Interaction logic for LoginWindow.xaml
    /// </summary>
    public partial class LoginWindow : Window
    {
        public LoginWindow()
        {
            InitializeComponent();
        }

        // Event handler for the Login button
        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Get the username and password from the input fields
            string username = UsernameTextBox.Text;
            string password = PasswordBox.Password;

            using (UserDbContext context = new UserDbContext())
            {
                // Find the user by username
                var user = context.Users.SingleOrDefault(u => u.Name == username);

                // Validate if the user exists and the password is correct
                if (user == null)
                {
                    MessageBox.Show("Invalid username or password.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // Compare the entered password with the stored hashed password
                bool passwordValid = BCrypt.Net.BCrypt.Verify(password, user.Password);

                if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                {
                    MessageBox.Show("Please enter both username and password.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // If the password is correct, grant access
                if (passwordValid)
                {
                    MessageBox.Show("Login successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                    // Open the main window
                    BookingWindow bookingWindow = new BookingWindow();
                    bookingWindow.Show();

                    // Close the login window
                    this.Close();
                }
                else
                {
                    MessageBox.Show("Invalid username or password.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }


        public void GrantAccess()
        {
            // Open the main window
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            // Close the login window
            this.Close();
        }
    }
}
