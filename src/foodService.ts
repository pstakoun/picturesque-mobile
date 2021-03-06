export class Food {
    name!: string;
    calories!: number;
    carbs!: number;
    fat!: number;
    sugar!: number;
    fiber!: number;
    protein!: number;

    constructor(name:string, calories:number, carbs:number, fat:number, sugar:number, fiber:number, protein:number) {
        this.name = name;
        this.calories = calories;
        this.carbs = carbs;
        this.fat = fat;
        this.sugar = sugar;
        this.fiber = fiber;
        this.protein = protein;
    }
}

export class FoodService {
    foods = {
        avocado: new Food("avocado", 670, 8.53, 14.66, 0.66, 6.7, 2),
        broccoli: new Food("broccoli", 141, 6.64, 0.37, 1.7, 2.6, 2.82),
        almonds: new Food("almonds", 2575, 6.2, 53.5, 3.4, 10, 24),
        chocolate: new Food("chocolate", 2160, 56, 31, 42.4, 6, 8),
        pasta: new Food("pasta", 1390, 57, 2.5, 2, 13, 13),
        mushrooms: new Food("mushrooms", 113, 4.1, 0.1, 0, 0, 2.5),
        peanutbutter: new Food("peanut butter", 2580, 12, 50, 5, 6, 28),
        hummus: new Food("hummus", 1091, 17, 19.2, 0.6, 0, 5.6)
    }
    

    getDetails(food: string): Food | undefined {
        return this.foods[food];
    }
}