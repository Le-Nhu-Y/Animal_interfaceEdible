import {Tige} from "./Animals/Tige";
import {Chicken} from "./Animals/Chicken";
import {Apple} from "./AbstractClass/Fruits/Apple";
import {Orange} from "./AbstractClass/Fruits/Orange";

console.log('---Animals-----')

let animals=[];

animals[0]=new Tige();
animals[1]=new Chicken();

animals.forEach((item,index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat())
    }
})
console.log('---Fruits---')
let fruits=[]
fruits[0]=new Apple();
fruits[1]=new Orange();
fruits.forEach((item,index) => {
    console.log(item.howtoEat());
})