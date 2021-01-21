// EXO 1

// let tab = ["alex", "jamila", "béné", "louise", "saliou", "maxence", "achraf", "adame", "dawid"]

// for (let i = 0; i < 9; i++) {
//     console.log(`Bonjour ${tab[i]}`);  
// }

// EXO 2

// let fruits = ["orange", "fraise", "banane", "kiwi", "pamplemousse", "pastèque"]

// while (fruits.length > 0) {
//     fruits.pop();
// }

// console.log(fruits);

// EXO 3

// let panierLegumes = ["poireau", "épinard", "navet", "betterave"]
// let longueur = panierLegumes.length
// let caisseLegumes = []

// // for (let i = 0; i < longueur; i++) {
// //     caisseLegumes.push(panierLegumes[i])
// // }

// panierLegumes.forEach((el, i) => {
//     caisseLegumes.push(panierLegumes[i])
//     // panierLegumes.splice(i, 1)
// });

// console.log(panierLegumes);
// console.log(caisseLegumes);

// EXO 4

// let enigme = prompt("Couleur du cheval blanc de Napoléon ?")

// while (enigme !== "blanc") {
//     alert("Faux !")
//     enigme = prompt("Couleur du cheval blanc de Napoléon ?")
// } 
// alert("Bravo !")

// EXO 5

// let enigme = prompt("Couleur du cheval blanc de Napoléon ?")

// do {
//     enigme = prompt("Couleur du cheval blanc de Napoléon ?")
//     if (enigme == "blanc") {
//         alert("Bravo !")
//     } else {
//         enigme = prompt("Couleur du cheval blanc de Napoléon ?")
//     }
// } while (enigme !== "blanc");

// EXO 6

let year = 2021
let yearR = Math.floor(Math.random() * 52) + 1970;
let cont = 0;
let question = prompt(`Si je suis né en ${yearR}, quel âge ai-je aujourd'hui ?`)

do {
    if (question == (year - yearR)) {
        alert("Bravo");
        cont += 3
    } else {
        question = prompt(`Si je suis né en ${yearR}, quel âge ai-je aujourd'hui ?`)
        cont ++
    }
} while (cont > 2)
