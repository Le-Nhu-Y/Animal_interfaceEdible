import {Animal} from "../AbstractClass/Animal";
import {Edible} from "../InterfaceClass/Edible";

export class Chicken extends Animal{
    makeSound():string {
        return "Chicken: ò ó o o o!"
    }
    howtoEat():string {
        return "Could be fried";
    }
}