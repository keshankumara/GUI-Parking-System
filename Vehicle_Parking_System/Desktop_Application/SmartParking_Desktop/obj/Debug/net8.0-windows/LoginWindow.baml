   M S B A M L   `   `   `  ����O  KSmartParking_Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:SmartParking_DesktopSmartParking_Desktop  5   	   &     SmartParking_Desktop.LoginWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:SmartParking_Desktop     5   	     � Title$  Login - ParkEase��5   	   $	��500��5	   	   $	��435��5
   	    � WindowStartupLocation$ CenterScreen=�5   	    � 
ResizeMode$ NoResize=�5   	   
�������.��5      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   �� 5      $
��Auto �6   .+�5   
   �� $��1��6   $��Center=�5      $��Center=�5      $	��300��5      .+�5       �� $��Login��6   $��24(�5!      $
��Bold"�5"      $��Center=�5#      $��0,0,0,20q�5$      �� 5'      $��Username��6   $��14(�5(      $��5,0,5,5q�5)      �� 5*      -   5         ��Name$ UsernameTextBox��5*      $��14(�5+      $��5q�5,      $��5,0,5,10q�5-      �� 50      $��Password��6   $��14(�51      $��5,0,5,5q�52      G� 53      -   5         G�Name$ PasswordBox��53      $��14(�54      $��5q�55      $��5,0,5,20q�56      �� 59      -   5         ��Name$ LoginButton��59      $��Login��5:      $��16(�5;      $
��Bold"�5<      
����  �
�������$
��10,5q�5?      $��Stretch=�5@      $��5,0,5,10q�5A      5B      �� 5F      $+��%Don't have an account? Register here.��6   $��12(�5G      
����  �$��Center=�5I      $��5q�5J       J� InputBindings 5K      5N      5O      5P      5Q      