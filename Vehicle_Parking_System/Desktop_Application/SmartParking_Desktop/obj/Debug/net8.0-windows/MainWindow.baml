   M S B A M L   `   `   `  ����O  KSmartParking_Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:SmartParking_DesktopSmartParking_Desktop  5   	   %    SmartParking_Desktop.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:SmartParking_Desktop     5   	     � Title$  Vehicle Parking System��5   	   $	��600��5	   	   $	��900��6   $	��800��5
   	   $	��450��6    � WindowStartupLocation$ CenterScreen=�5   	    � 
ResizeMode$ NoResize=�5   	   
�������.��5      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   �� 5      $
��Auto �6   .+�5   
   ]� $��0��6   
�������$��False��67   .+�5      �� $��ParkEase��6   $��30(�5      $
��Bold"�5      
�������$��10q�5!      $
��Left=�5"      �� 5%       �� Orientation$ 
Horizontal=�6   $��Right=�62   $��10q�6I   .+�5&      �� -   5        $
��Home��5&      $��5q�6(   $��10q�63   $��80��6@   6N   �� 5'      -   5        $��about��5'      $��About��6&   $��5q�66   $��10q�6A   $��80��6N   6\   �� 5(      -   5        $��login��5(      $��Login��6&   $��5q�66   $��10q�6A   $��80��6N   6\   �� 5)      -   5        $��register��5)      $��Register��6)   $��5q�6<   $��10q�6G   $��80��6T   6b   5*      5+      � 5.   
   $��1��6   
�������.+�50      �� 
����  �$��	0,0,0,232q�6+   �� 51      $'��!Welcome to Vehicle Parking System��6   $��28(�52      $
��Bold"�53      
�������$��Center=�55      $	��Top=�56      $��10q�57      �� 58      $[��UFind and reserve your perfect parking spot in seconds. Safe, secure, and hassle-free.��6   $��18(�59      $��Center=�5:      $	��Top=�5;      
�������$��0,52,0,0q�5=      � 5?      $��20,128,20,0q�6    � ColumnDefinitions 5@      �� 5A      $��* �6'   �� 5B      $��* �6'   �� 5C      $��* �6'   .+�5G      �� $��0��6   $	��200��5H      $
��Auto��6,   $��10,10,10,29q�5I      .+�5J      �� $?��9C:\Users\Keshan\Desktop\aa\WpfApp1\WpfApp1\images\car.ico��6   $
��Auto��5K      $	��200��5L      $��Uniform=�5M      $��Center=�5N      �� 5O      $��Rs : 200 Per Hour��6   $��16(�5P      $��Center=�5Q      $��5q�5R      �� 5S      -   5        $	��150��5S      $��40��5T      $��16(�5U      $
��Bold"�5V      
����  �
�������$��Center=�5Z      .��6:   	Available5\      5]      �� 5`      $��1��6   $	��200��5a      $
��Auto��6,   $��10,10,10,29q�5b      .+�5c      �� $@��:C:\Users\Keshan\Desktop\aa\WpfApp1\WpfApp1\images\bike.ico��6   $
��Auto��5d      $	��200��5e      $��Uniform=�5f      $��Center=�5g      �� 5h      $��Rs : 200 Per Hour��6   $��16(�5i      $��Center=�5j      $��5q�5k      �� 5l      -   5        $	��150��5l      $��40��5m      $��16(�5n      $
��Bold"�5o      
����  �
�������$��Center=�5s      .��6:   	Available5u      5v      �� 5y      $��2��6   $	��200��5z      $
��Auto��6,   $��10,10,10,29q�5{      .+�5|      �� $A��;C:\Users\Keshan\Desktop\aa\WpfApp1\WpfApp1\images\truck.ico��6   $
��Auto��5}      $	��200��5~      $��Uniform=�5      $��Center=�5�      �� 5�      $��Rs : 200 Per Hour��6   $��16(�5�      $��Center=�5�      $��5q�5�      �� 5�      -   5        $	��150��5�      $��40��5�      $��16(�5�      $
��Bold"�5�      
����  �
�������$��Center=�5�      .��6:   	Available5�      5�      5�      5�      ]� 5�   
   $��2��6   
�������$��False��68   .+�5�      �� $��@All rights reserved.��6   $��16(�5�      $��10q�5�      $
��Left=�5�      �� 5�      $��Contact Us: 0710334073��6   $��16(�5�      $��10q�5�      $��Right=�5�      5�      5�      5�      