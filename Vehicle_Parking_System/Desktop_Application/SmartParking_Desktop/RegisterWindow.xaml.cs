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
    /// Interaction logic for RegisterWindow.xaml
    /// </summary>
    public partial class RegisterWindow : Window
    {
        public RegisterWindow()
        {
            InitializeComponent();
        }

        private void RegisterButtonClick(object sender, RoutedEventArgs e)
        {
            // Get the input values
            string username = UsernameTextBox.Text;
            string email = EmailTextBox.Text;
            string password = PasswordBox.Password;
            string confirmPassword = ConfirmPasswordBox.Password;

            // Validate the input fields
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(confirmPassword))
            {
                MessageBox.Show("Please fill all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Check if passwords match
            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Check if username already exists
            using (UserDbContext context = new UserDbContext())
            {
                bool usernameExists = context.Users.Any(user => user.Name == username);

                if (usernameExists)
                {
                    MessageBox.Show("Username already taken. Please choose another one.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // Create and add a new user to the database
               

                // Inside your registration logic:
                var newUser = new User
                {
                    Name = username,
                    Email = email,
                    Password = BCrypt.Net.BCrypt.HashPassword(password) // Hash the password before saving
                };


                context.Users.Add(newUser);
                context.SaveChanges();

                // Inform the user about successful registration
                MessageBox.Show("Registration successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Optionally, open the login window or main window after registration
                LoginWindow loginWindow = new LoginWindow(); // Or navigate to another window
                loginWindow.Show();

                // Close the registration window
                this.Close();
            }
        }

    }
}
