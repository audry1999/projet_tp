// une fonction qui additionne le premier et ledernier nombre de notre tableau

// function test_aray(mon_tableau){
//     return mon_tableau[0] + mon_tableau[mon_tableau.length-1];
// }
// console.log(test_aray([8,3,3,3,6,7,8,4,3]));

// fonction qui supprime le dernier element dans un tableau et l'avant-dernier element de notre tableau

// function test_aray(mon_tableau){
//     return mon_tableau[mon_tableau.length-2] + mon_tableau[mon_tableau.length-1];
// }
// console.log(test_aray([8,3,3,3,6,7,8,4,3]));

//  fonction qui supprome u element dans un tableau

// function test_aray(mon_tableau, index){
//     let n= mon_tableau.splice(2,2);
//     return mon_tableau
// }
// console.log(test_aray([8,3,3,3,6,7,8,4,3]));

//  calculatrice

//  function calculatrice(number1, number2, operation){
//     return operation(number1, number2)
// }

//  function add( nbr1, nbr2){
//     return nbr1 + nbr2;

//  }
//  function substract(br1, nbr2){
//     return nbr2 - nbr2;

//  }
//  function divide(br1, nbr2){
//     return br1 / nbr2;

//  }
//  function multiply(br1, nbr2){
//     return br1 * nbr2

//  }
//  console.log(calculatrice(20, 2, divide));
 
// const table = [1, 2, 3, 4, 5];
// const carre = valeur => console.log(valeur **2 );
// let  a = table.map(carre);

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);


//   function table(chffre){
//     const chiffre= [3,6,7,8,4,5,8,]
//     return chiffre **2
// }
 
// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true },

//     const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// ];
      
//    console.log(result)

// let properties=Object.keys(stuiante) // pour afficher les cles de notre objet
// let properties1=Object.values(stuiante) // pour afficher les valeurs de notre objet
// delete studient.rollno  // pour effacer un element dans un objet
// let properties3=Object.values(stuiante.length) // pour afficher les valeurs de notre objet


// librarie.array.forEach(function(elt) {
//     console.log(elt.titr, elt.)
// });
// exercice 1
// const obj1 = [ 
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }]
//     obj1.forEach(function(item) {
//             console.log(item.title )
//             console.log(item.author)
            
//      });


//      const ourStorage = {
//         "desk": {
//           "drawer": "stapler"
//         },
//         "cabinet": {
//           "top drawer": { 
//             "folder1": "a file",
//             "folder2": "secrets"
//           },
//           "bottom drawer": "soda"
//         }
//         };


//         const myStorage = {
//             "car": {
//               "inside": {
//                 "glove box": "maps",
//                 "passenger seat": "crumbs"
//                },
//               "outside": {
//                 "trunk": "jack"
//               }
//             }
//           };
          
//         const myVar =myStorage["car"]["inside"]["glove box"];
//  console.log(myVar)


//  const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
//   function updateRecords(records, id, prop, value) {
//     return records;
// }

// let i=0;
// while(i<=100){
//   console.log("bonjour monde")
//   i++;
// }

// do{
//   let i =0;
//   console.log("bonjour monde")
//   i++;
// }while(i<=100);

// for(i=0; i<100; i++);{
  
// }
// un programme qui calcula la somme de deux tableau
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // Example output: 
// // 276 + 351 = 627

// let arr_i=0;
// let arr_j=0;
// for(i=0; i< arr_1.length ; i++){
//   arr_i += arr_1[i];

// }
// for(i=0; i< arr_2.length ; i++){
//   arr_j += arr_2[i]
// }
//  let somme = arr_i + arr_j;
//  console.log(arr_i + " + " + arr_j + " = ", somme);

// let n1 = 22; 
// // Example output: 
// // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
//   for (i=0; i<n1; i++){
//     if (i % 2 == 0){
//     cosole.log(i);
//   }
//   }
function nb(nom){
  let n
  for (i=0; i.lenght <10; i++){
    
if(n>10){
 console.log(i)
}
      
  }

}
  



  // let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
  // Example output: 
  // true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

  // let rev =[];
  // for (let i = arr.length - 1; i >= 0; i--){
  //  rev= arr[i];
  //  console.log(rev);

  // }



  // let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
// i=0;
// while(i<str1.length){
//   if((i+1) % 2 == 0){
//     console.log(str1+Z[i])
//     i++
//   }
// }

// let str2 = "don’t know why";
// // Example output: 
// // “yes” 
// for(i=0; i< str2.length; i++){
//   if(str2.length[i]==j){
//     console.log(yes)
//   }
// }