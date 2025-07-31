import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-food-history',
  templateUrl: './food-history.component.html',
  styleUrls: ['./food-history.component.scss'],
})
export class FoodHistoryComponent {
  foodForm: FormGroup;

  units = ['Grams', 'Piece', 'Cup', 'Portion'];
  choosenUnit: string;

  categories = [
    'Fruit',
    'Vegetables',
    'Cereals',
    'Meat',
    'Drinks',
    'Snacks',
    'Other',
  ];
  choosenCategory: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(0)]],
      unit: ['', Validators.required],
      category: ['', Validators.required],
      calories: [null, [Validators.required, Validators.min(0)]],
      carbs: [null, [Validators.min(0)]],
      proteins: [null, [Validators.min(0)]],
      fats: [null, [Validators.min(0)]],
      fiber: [null, [Validators.min(0)]],
      sugars: [null, [Validators.min(0)]],
      dateTime: [new Date().toISOString(), Validators.required],
    });

    // Salva il valore selezionato in choosenUnit
    this.foodForm.get('unit')?.valueChanges.subscribe((value) => {
      this.choosenUnit = value;
    });
    // Salva il valore selezionato in choosenCategory
    this.foodForm.get('category')?.valueChanges.subscribe((value) => {
      this.choosenCategory = value;
    });
  }

  onSubmit() {
    if (this.foodForm.valid) {
      // Salva i dati o invia al servizio
      console.log(this.foodForm.value);
      // Reset o navigazione
      this.router.navigate(['/menu/homepage']);
    }
  }
}
