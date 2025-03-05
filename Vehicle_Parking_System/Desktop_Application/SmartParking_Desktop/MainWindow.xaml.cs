using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SmartParking_Desktop
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        // Event handler for the Home button
        private void HomeButton_Click(object sender, RoutedEventArgs e)
        {
            // Check if the MainWindow is already open
            var mainWindow = Application.Current.Windows.OfType<MainWindow>().FirstOrDefault();

            if (mainWindow == null)
            {
                // If not open, create a new instance
                mainWindow = new MainWindow();
                mainWindow.Show(); // Open the MainWindow
            }
            else
            {
                // If already open, bring it to the front
                mainWindow.Focus();
            }
        }

        // Event handler for the About button
        private void AboutButton_Click(object sender, RoutedEventArgs e)
        {
            // Check if the AboutWindow is already open
            var aboutWindow = Application.Current.Windows.OfType<AboutWindow>().FirstOrDefault();

            if (aboutWindow == null)
            {
                // If not open, create a new instance and show it
                aboutWindow = new AboutWindow();
                aboutWindow.Show();
                this.Close();
            }
            else
            {
                // If already open, close the previous window
                aboutWindow.Close();

                // Create and show a new AboutWindow
                aboutWindow = new AboutWindow();
                aboutWindow.Show();
            }
        }


        // Event handler for the Login button
        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Check if the LoginWindow is already open
            var loginWindow = Application.Current.Windows.OfType<LoginWindow>().FirstOrDefault();

            if (loginWindow == null)
            {
                // If not open, create a new instance
                loginWindow = new LoginWindow();
                loginWindow.Show(); // Open the LoginWindow
            }
            else
            {
                // If already open, bring it to the front
                loginWindow.Focus();
            }
        }

        // Event handler for the Register button
        private void RegisterButton_Click(object sender, RoutedEventArgs e)
        {
            // Check if the RegisterWindow is already open
            var registerWindow = Application.Current.Windows.OfType<RegisterWindow>().FirstOrDefault();

            if (registerWindow == null)
            {
                // If not open, create a new instance
                registerWindow = new RegisterWindow();
                registerWindow.Show(); // Open the RegisterWindow
            }
            else
            {
                // If already open, bring it to the front
                registerWindow.Focus();
            }
        }
    }
}