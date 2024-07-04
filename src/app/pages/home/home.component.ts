import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  governorates = [
    'Cairo',
    'Giza',
    'Alexandria',
    'Port Said',
    'Suez',
    'Luxor',
    'Aswan',
    'Red Sea',
    'South Sinai',
    'Ismailia',
    'Dakahlia',
    'Gharbia',
    'Sharqia',
    'Fayoum',
    'Beni Suef',
    'Minya',
    'Assiut',
    'Sohag',
    'Qena',
    'Damietta',
    'Beheira',
    'Monufia',
    'Kafr El Sheikh',
    'Matruh',
    'North Sinai',
    'New Valley'
  ];
  selectedGovernorate = 'Cairo';


}
