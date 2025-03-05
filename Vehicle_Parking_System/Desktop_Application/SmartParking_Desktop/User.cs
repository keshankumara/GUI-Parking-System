using System.ComponentModel.DataAnnotations;

namespace SmartParking_Desktop
{
    public class User
    {
        [Key]

        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public string? VehicleType { get; set; }

        public string? VehicleNumber { get; set; }


        public string? Duration { get; set; }

    }
}