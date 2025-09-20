
// Question -1
// count of each word
// let str = 'my name is faizan';

// let newStr = str.split(' ')

// function countChar(){
//     let count = {};
    
//     for(let i=0;i<newStr.length; i++){
//         let newArr = newStr[i];
//         for(let j =0;j<newArr.length;j++){
//         count[newArr[j]] = (count[newArr[j]] || 0) + 1
//         }
//     }
//  return count;

// }

// console.log(countChar())

// ------------------------------------------------------------------------------


// Question -2

//function to reverse

// let str = 'my name is faizan';

// let arrStr = str.split(' ').reverse().join(' ') - using built in operator

// let arrStr = str.split(' ')

// function reverseString(){
//     let reverseStr = '';
//   for(let i=arrStr.length-1;i>=0;i--){
//     reverseStr += arrStr[i] + ' '
//   }
//   return reverseStr;
// }

// console.log(reverseString());

// ------------------------------------------------------------------------------


// Question -3
// let arr = [[1,2],['ac','dc'],[3,4]];

// let flatArray2 = arr.flat() -- using built in method

// function flattenedArray(){
//     let flatArray = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             flatArray.push(arr[i][j])
//         }
    
//     }
//     return flatArray;
// }
// console.log(flattenedArray());

// ------------------------------------------------------------------------------


// Question -4
// let arr = [1,2,3,4,5,6,8];
// let n = 8;

// function findMissingNumber(){
//     let sum1=0;
//     let sum2=0;

//     sum1 = (n*(n+1))/2;

//     for(let i =0;i<arr.length;i++){
//         sum2 +=arr[i]
//     }

//     let missingNumber = sum1 - sum2;
//     return missingNumber;
// }

// console.log(findMissingNumber());

// ------------------------------------------------------------------------------


// let str = 'my name is faizan';
// let arr = str.split(' ');

// let arr2=[];

// for(let i =0;i< arr.length;i++){
//    let updatedStr = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//    arr2.push(updatedStr);
// }

// console.log(arr2.join('\n'));

// ------------------------------------------------------------------------------


// let arr = [8,4,6,11,28,17];

// arr.sort((a,b)=>a-b)

// console.log(arr)

// arr.splice(1,3,'arr')
// console.log(arr)

// console.log(arr.length)

// ------------------------------------------------------------------------------


//Infinite curry

// function curry(a){
// return function(b){
//     if(b!==undefined){
//         return curry(a+b)
//     }
//     else return a;
// }
// }
// console.log(curry(2)(3)(4)(5)(6)())

// ------------------------------------------------------------------------------


//Finite curry
// function curry2(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }

// }
// console.log(curry2(2)(3)(4))

// ------------------------------------------------------------------------------


//Best Approach to flat any deep nested array
// const arr = [1,[2,3],[4,5],6];
// function flatArr(arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(flatArr(arr[i]))
//         }
//         else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(flatArr(arr))

// ------------------------------------------------------------------------------


// const s1 = 'faizan';
// const s2 = 'khan';
// function mergeStrings(s1,s2){
//     let newStr = '';
//   for(let i=0;i<s1.length+s2.length;i++){
//     newStr +=(s1[i]?s1[i]:'') +( s2[i] ? s2[i]:'')
//   }

//   console.log(newStr)

// }

// mergeStrings(s1,s2)

// ------------------------------------------------------------------------------


//Longest word in string

// const str = 'a quick brownnie from fox';

// const arr = str.split(' ')

// function longest(arr){
//    let max = 0;
//    let longStr=''
   
//    for(let i = 0;i<arr.length;i++){
//        if(arr[i].length > max){
//            max = arr[i].length;
//            longStr = arr[i]
//        }else{
//            continue;
//        }
//    }
//    console.log(longStr)
// }

// longest(arr)

// ------------------------------------------------------------------------------


// const arr=[1,2,3,4,1,2,3];

//with sorting
// arr.sort((a,b)=>a-b)

// function findDuplicate(arr){
//     let newArr=[];
//     for(let i =0;i<arr.length;i++){
//             if(arr[i]===arr[i+1]){
//                 newArr.push(arr[i])
//             }
        
//     }
//     return newArr;
// }
// console.log(findDuplicate(arr))

// ------------------------------------------------------------------------------


//without sorting
// function findDuplicate(arr){
//     let newArr=[];
//     for(let i =0;i<arr.length;i++){
//           for(let j=i+1;j<arr.length;j++){
//               if(arr[i]===arr[j]){
//                   newArr.push(arr[i])
//               }
//           }
//     }
//     return newArr;
// }
// console.log(findDuplicate(arr))

// ------------------------------------------------------------------------------


//Check diff equalvalent to target

// const arr = [1,2,3,4,5,6];
// let k=10;

// function checkDifference(arr,k){
//   let first = 0;
//   let second = arr.length-1;
//   while(first < second){
//       var temp = arr[second] - arr[first];
//       if(temp ===k && first!==second){
//           return true;
//       }else{
//           if(temp < k){
//               first ++ 
//           }else{
//              second--;
//           }
//       }
//   }
//   if(temp!==k){
//       return false;
//   }
// }
// console.log(checkDifference(arr,k));

// ------------------------------------------------------------------------------


//Generate all substrings

// let str = 'masai';
// let n=5;

// function substr(n,str){
//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             let bag='';
//             for(let k=i;k<=j;k++){
//                 bag+=str[k];
//             }
//             console.log(bag)
//         }
//     }
// }

// substr(n,str)

// ------------------------------------------------------------------------------


//Check Common Element

//function checkCommonElement(arr1,arr2){
//first sort the arrays
//     let count=0;
//     let first = 0;
//     let second = 0;
    
//     while(first < arr1.length && second < arr2.length){
//         if(arr1[first] === arr2[second]){
//             count++;
//             first++;
//             second++;
//         }else if(arr1[first] > arr2[second]){
//             second++;
//         }else{
//             first++;
//         }
//     }
//     return count;
// }
// const arr1 = [1,2,3,4,5,6];
// const arr2 = [4,5,6,7,8,9,10];
// console.log(checkCommonElement(arr1,arr2));

// ------------------------------------------------------------------------------


//Two Sum
//let arr = [1,2,4,5,6,7,9,4];

// let k = 13;

// arr.sort((a,b)=>{
//     return a-b;
// })
// let first= 0;
// let second = arr.length-1;
// var flag=false

// function twoSum(arr,k){
  
//     while(first <  second ){
//         if(arr[first] + arr[second] ===k){
//            flag = true;
//            break;
//         }else if(arr[first] + arr[second] >k){
//             second--
//         }else{
//             first++;
//         }
//     }
//     console.log(flag)
  
// }

// twoSum(arr,k)

// ------------------------------------------------------------------------------


//Anagram

// let str1='abcd';
// let str2 = 'cab';

// function anagram(str1,str2){
//     let obj1={};
//     let obj2={};
    
//     for(let i=0;i<str1.length;i++){
//         if(obj1[str1[i]]===undefined){
//             obj1[str1[i]] = 1
//         }else{
//              obj1[str1[i]]++
//         }
//     }
//     for(let i=0;i<str2.length;i++){
//         if(obj2[str2[i]]===undefined){
//             obj2[str2[i]] = 1
//         }else{
//              obj2[str2[i]]++
//         }
//     }
//     var flag =false;
//     for(let key in obj1){
//         if(obj1[key]===obj2[key]){
//             flag=true;
//         }else{
//             flag=false;
//         }
//     }
//     return flag;
// }

// console.log(anagram(str1,str2))

// ------------------------------------------------------------------------------


//Remove Duplicates

// function removeDuplicates(str){
//     let obj={};
//     for(let i=0;i<str.length;i++){
//         obj[str[i]]=1;
//     }
//     var bag='';
//     for(let key in obj ){
//         bag+=key;
//     }
//     console.log(bag)
// }


// let str = 'aaabcddhhhj'

// removeDuplicates(str)

// ------------------------------------------------------------------------------


//Factorial
// let n=5;
// function factorial(n){
//     if(n==0 || n==1){
//         return 1;
//     }else{
//         return n * factorial(n-1)
//     }
// }

// console.log(factorial(n))

// ------------------------------------------------------------------------------


//Palidrome;

// function checkPalindrome(s1){
//  let l=0;
//  let s= s1.split(' ').join('');
//  let r = s.length-1;
//  while(l<=r){
//      if(s[l] ===s[r]){
//          l++;
//          r--;
//      }
//      else if(s[l]!==s[r]){
//          return false;
//      }
//  } 
//  return true;
    
// }
// let s='nurses run'
// console.log(checkPalindrome(s));

// ------------------------------------------------------------------------------



//Selection Sort
// const arr = [2,1,6,4,5,9,10];

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//               min=j
//             }
//         }
//         swap(arr,min,i)
//     }
//     return arr;
// }
// function swap(arr,min,i){
//     temp=arr[min]
//     arr[min] = arr[i];
//     arr[i]=temp
// }

// console.log(selectionSort(arr))

// ------------------------------------------------------------------------------


//Bubble Sort
// / const arr = [2,1,6,4,5,9,10];
// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     return arr;
// }

// function swap(arr,j,i){
//     temp = arr[i];
//     arr[i]=arr[j]
//     arr[j] = temp
// }

// console.log(bubbleSort(arr))

// ------------------------------------------------------------------------------

//Longest substring

// let str = 'bbbbb';

// function longestSubstring(str){
//     var maxLength=0;
//     var longestSubstr='';
//    for(let i=0;i<str.length;i++){
//        for(let j=i;j<str.length;j++){
//            var bag='';
//            for(let k=i;k<=j;k++){
//                bag+=str[k]
//            }
//            let set = new Set(bag)
//        if(set.size ===bag.length && bag.length > maxLength){
//            maxLength = bag.length;
//            longestSubstr=bag
//        }
//        }
       
//    }
//    console.log('maxLength',maxLength , 'and','longestSubstr',longestSubstr )
// }
// longestSubstring(str)


//Reverse the word in their position

// let str = 'my name is faizan';

// const arr = str.split(' ');

// function reverse(arr){
// let revStr=[];
// for(let i=0;i<arr.length;i++){
//     let newStr=arr[i];
//     let bag='';
//     for(let j=newStr.length-1;j>=0;j--){
//        bag+=newStr[j]
//     }
//     revStr.push(bag)
// }
// console.log(revStr.join(' '))
// }

// reverse(arr)

//find the kth missing number

// const arr = [3,4,5,7,9] 
// let k=3

// function kthmissingNumber(arr,k){
//     let count=0; 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<=k+count){
//             count++
//         }
//     }
//     return k+count;
// }


// console.log(kthmissingNumber(arr,k));

////find second largest

// const arr = [10,2,3,20];

// function findSecondLargest(arr){
//     let largest = -1;
//     let second_largest = -1;
    
//     for(let i=0;i<arr.length;i++){
//         if(largest < arr[i]){
//             second_largest = largest;
//             // console.log(second_largest,'sl')
//             largest = arr[i]
//             // console.log(largest,'l')
//         }else if(second_largest < arr[i]){
//             second_largest = arr[i]
//         }
//     }
//     return second_largest
    
//     // for(let item of arr){
//     //     console.log(item)
//     //     if(largest < item){
//     //         second_largest = largest;
//     //         largest = item;

//     //     }
//     //     else if(second_largest < item){
//     //         second_largest = item
//     //     }
//     // }
//     // return second_largest
// }

// console.log(findSecondLargest(arr));


// const arr =[1,2,3,4,5,6,7,8,9,10,11];
// function modify(){
//     const size = 3;
//     const newArr=[];
//     for(let i=0;i<arr.length;i+=size){
//         newArr.push(arr.slice(i,i+size))
//     }
//     return newArr
// }
// console.log(modify())

// o/p :[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11 ] ]



