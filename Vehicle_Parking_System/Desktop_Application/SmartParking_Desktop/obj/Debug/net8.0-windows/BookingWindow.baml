   M S B A M L   `   `   `  ����O  KSmartParking_Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:SmartParking_DesktopSmartParking_Desktop  5   	   (    "SmartParking_Desktop.BookingWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:SmartParking_Desktop     5   	     � Title$  Vehicle Parking System��5   	   $	��600��5	   	   $	��900��6   $	��800��5
   	   $	��450��6    � WindowStartupLocation$ CenterScreen=�5   	   
�������.��5      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��0.25* �6   �� 5      $��* �6   �� 5      $
��Auto �6   .+�5   
   ]� $��0��6   
�������$��False��67   .+�5      �� $��ParkEase��6   $��30(�5      $
��Bold"�5      
�������$��10q�5      $
��Left=�5      �� 5!       �� Orientation$ 
Horizontal=�6   $��Right=�62   $��10q�6I   .+�5$      �� -   5        $��LogOut��5$   5   $��5q�6F   $��10q�6Q   $��80��6^   5%      5&      �� 5)   
   $��1��6   
����  �._�5*      �� $��Center=�6   $��Center=�64   .+�5+      �� $'��!Welcome to Vehicle Parking System��6   $��28(�5,      $
��Bold"�5-      
�������$��Center=�5/      �� 50      $[��UFind and reserve your perfect parking spot in seconds. Safe, secure, and hassle-free.��6   $��18(�51      $��Center=�52      
�������$��0,10,0,0q�54      55      56      � 59   
   $��2��6   
�������.+�5;      �� $��Center=�6   $��Center=�64   $	��300��6Q   .+�5=      �� $��Email��6   $��14(�5>      $��5,0,5,5q�5?      �� 5@      -   5         ��Name$ EmailTextBox��5@      $��14(�5A      $��5q�5B      $��5,0,5,10q�5C      �� 5F      $��Vehicle Type��6   $��14(�5G      $��5,0,5,5q�5H      �� 5I      -   5         ��Name$ VehicleTypeComboBox��5I      $��14(�5J      $��5q�5K      $��5,0,5,10q�5L      .@�5M      �� $	��Car��6#   �� 5N      $
��Bike��6#   �� 5O      $��Truck��6#   5P      �� 5S      $��Vehicle Number��6   $��14(�5T      $��5,0,5,5q�5U      �� 5V      -   5        $ VehicleNumberTextBox��5V      $��14(�5W      $��5q�5X      $��5,0,5,10q�5Y      �� 5\      $!��Parking Duration (in hours)��6   $��14(�5]      $��5,0,5,5q�5^      �� 5_      -   5        $ ParkingDurationTextBox��5_      $��14(�5`      $��5q�5a      $��5,0,5,20q�5b      �� 5e      -   5         ��Name$ 
BookButton��5e      $
��Book��5f      $��16(�5g      $
��Bold"�5h      
����  �
�������$
��10,5q�5k      $��Stretch=�5l      $��5,0,5,10q�5m      5n      5o      5p      ]� 5s   
   $��3��6   
�������$��False��68   .+�5t      �� $��© All rights reserved.��6   $��16(�5u      $��10q�5v      $
��Left=�5w      �� 5y      $��Contact Us: 0710334073��6   $��16(�5z      $��10q�5{      $��Right=�5|      5}      5~      5      