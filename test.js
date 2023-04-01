
// let s = "  -5464ads 4545sda sdasd"
// for (let i = 0; i < s.length; i++) {
//     if((s[i]==="0" && s[i+1]===" ")){
//         console.log(0);
//     }else if(+s[i] && s[i+1]===" "){

//     }else{
//         continue
//     }    
// }
// s=s.replace(/ /g,'')
// s=s.split('')
// let k=[]
// console.log(s);
// for (let i = 0; i < s.length; i++) {
//     if ((s[i]==="+" && +s[i+1] || s[i]==="+" && s[i+1]==="0") || (s[i]==="-" && +s[i+1] || s[i]==="-" && s[i+1]==="0") || +s[i] || (+s[i+1] && s[i]==="." || s[i]==="0")) {
//         k.push(s[i])
//     }else{        
//         break
//     }    
// }    
// console.log(k); 
// let t = k.join('')
// console.log(t);  
// t = t.split(/([\+\-\*\/])/).map(a => parseFloat(a) || a).join('');
// console.log(t);       
// let m=0
// while(k[m]==='0'){
//     m++
//     if(k[m]==="-" || k[m]==="-"){
//         return 0
//     }
// }

// let fin = eval(t)
// if(typeof fin === "number") {
//     if(fin<-2147483648){
//         return -2147483648; 
//     }
//     if(fin>2147483648)
//         return 2147483647; 
//     }
//     if(fin<=2147483648 && fin>=-2147483648){
//         return fin;
//     }
//     else{
//     return 0;
// }

// let l1 = [2,4,3]
// let l2 = [5,6,4]
// let l3 = []
// let l4 = []
// for (let i = l1.length-1; i >= 0; i--) {
//     l3.push(l1[i])    
// }
// for (let i = l2.length-1; i >= 0; i--) {
//     l4.push(l2[i])    
// }
// let l5 = l3.join('')
// let l6 = l4.join('')

// l5 = eval(l5)
// l6 = eval(l6)

// let fin = l5+l6
// fin = fin.toString()

// let num = []
// for (let i = fin.length-1; i >= 0; i--) {
//     num.push(+fin[i]);    
// }
// console.log(num);


// let list1 = [1,2,4]
// let list2 = [1,3,4]

// var mergeTwoLists = function(list1, list2) {
//     for (let i = 0; i < list2.length; i++) {
//         list1.push(list2[i])    
//     }
        
//     for(let i = 0; i < list1.length; i++){        
//         for(let j = 0; j < ( list1.length - i -1); j++){
//             if(list1[j] > list1[j+1]){
//             var temp = list1[j]
//             list1[j] = list1[j+1]
//             list1[j+1] = temp
//             }
//         }
//     }
    
//         return list1;
//     };

//     console.log(mergeTwoLists(list1, list2)); 

let list1 = [1,2,4]
let list2 = [1,3,4]

var mergeTwoLists = function(list1, list2) {
    for (let i = 0; i < list2.length; i++) {
        list1.push(list2[i])    
    }
        
    for(let i = 0; i < list1.length; i++){        
        for(let j = 0; j < ( list1.length - i -1); j++){
            if(list1[j] > list1[j+1]){
            var temp = list1[j]
            list1[j] = list1[j+1]
            list1[j+1] = temp
            }
        }
    }
    
        return list1;
    };

    console.log(mergeTwoLists(list1, list2)); 