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

export class foodService {
    avocado:food = new food("avocado", 670, 8.53, 14.66, 0.66, 6.7, 2);
    broccoli:food = new food("broccoli", 141, 6.64, 0.37, 1.7, 2.6, 2.82);
    almonds:food = new food("almonds", 2575, 6.2, 53.5, 3.4, 10, 24);
    chocolate:food = new food("chocolate", 2160, 56, 31, 42.4, 6, 8);
    pasta:food = new food("pasta", 1390, 57, 2.5, 2, 13, 13);
    mushrooms:food = new food("mushrooms", 113, 4.1, 0.1, 0, 0, 2.5);
    peanutbutter:food = new food("peanut butter", 2580, 12, 50, 5, 6, 28);
    hummus:food = new food("hummus", 1091, 17, 19.2, 0.6, 0, 5.6);

    getDetails(food: string): food | undefined {
        switch (food) {
            case "avocado": {
                return this.avocado;
            }
            case "broccoli": {
                return this.broccoli;
            }
            case "almonds": {
                return this.almonds;
            }
            case "chocolate": {
                return this.chocolate;
            }
            case "pasta": {
                return this.pasta;
            }
            case "mushrooms": {
                return this.mushrooms;
            }
            case "peanutbutter": {
                return this.peanutbutter;
            }
            case "hummus": {
                return this.hummus;
            }
            default: {
                return undefined;
            }
        }
    }
}