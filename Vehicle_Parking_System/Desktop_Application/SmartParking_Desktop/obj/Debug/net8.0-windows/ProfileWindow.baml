   M S B A M L   `   `   `  ����O  KSmartParking_Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:SmartParking_DesktopSmartParking_Desktop  5   	   (    "SmartParking_Desktop.ProfileWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:SmartParking_Desktop     5   	     � Title$  Vehicle Parking System��5   	   $	��600��5	   	   $	��900��6   $	��800��5
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
Horizontal=�6   $��Right=�62   $��10q�6I   .+�5"      �� -   5        $��LogOut��5"   4   $��5q�6E   $��10q�6P   $��80��6]   5#      5$      �� 5'   
   $��1��6   
����  �._�5(      �� $��Center=�6   $��Center=�64   .+�5)      �� $��Booking Successful!��6   $��28(�5*      $
��Bold"�5+      
�������$��Center=�5-      �� 5.      $7��1Your parking spot has been successfully reserved.��6   $��18(�5/      $��Center=�50      
�������$��0,10,0,0q�52      53      54      � 57   
   $��2��6   
�������.+�58      �� $��Center=�6   $��Center=�64   $	��300��6Q   .+�59      �� $��Booking Details��6   $��20(�5:      $
��Bold"�5;      $��Center=�5<      $��0,0,0,20q�5=      �� 5@      $ Vertical=�6   $��Center=�64   .+�5B      �� $ 
Horizontal=�6!   $
��left=�6:   $��5,0,5,10q�6U   .+�5C      �� $��Email : ��6$   $��14(�64   $��Center=�6B   $��5,0,5,5q�6]   �� 5D      -   5         ��Name$ BookingEmailTextBlock��5D   $   $��14(�6C   $��Center=�6Q   $��5,0,5,5q�6l   5E      �� 5H      $ 
Horizontal=�6!   $��5,0,5,5q�6:   .+�5I      �� $��Vehicle Type : ��6$   $��14(�6;   $	��Top=�6I   $��5,0,5,5q�6a   �� 5J      -   5        $! BookingVehicleTypeTextBlock��5J   $   $��14(�6I   $��Center=�6W   $��5,0,5,5q�6r   5K      �� 5N      $ 
Horizontal=�6!   $��5,0,5,5q�6:   .+�5O      �� $��Vehicle Number : ��6$   $��14(�6=   $	��Top=�6K   $��5,0,5,5q�6c   �� 5P      -   5        $# BookingVehicleNumberTextBlock��5P   $   $��14(�6K   $��Center=�6Y   $��5,0,5,5q�6t   5Q      �� 5T      $ 
Horizontal=�6!   $��5,0,5,5q�6:   .+�5U      �� $��Parking Duration : ��6$   $��14(�6?   $	��Top=�6M   $��5,0,5,5q�6e   �� 5V      -   5        $ BookingDurationTextBlock��5V   $   $��14(�6F   $��Center=�6T   $��5,0,5,5q�6o   5W      5X      5Z      5[      ]� 5^   
   $��3��6   
�������$��False��68   .+�5_      �� $��© All rights reserved.��6   $��16(�5`      $��10q�5a      $
��Left=�5b      �� 5d      $��Contact Us: 0710334073��6   $��16(�5e      $��10q�5f      $��Right=�5g      5h      5i      5j      