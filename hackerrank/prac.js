// const array = [1, 2, 3]
// let sum=0;
// for (let i = 0; i < array.length; i++){
//     sum +=array[i]
// }
// console.log(sum)


// alice and bob triple score

// let a = 0;
// let b = 0;
// const alice = [1, 2, 3]
// const bob = [3, 4, 1]
// for (let i = 0; i <alice.length; i++){
//     if (alice[i] < bob[i]) {
//         b +=1
//     }
//     else if (alice[i] > bob[i]) {
//         a=+1
//     }
// }
// let arr = [a,b]
// console.log(arr)
// console.log(b)


// a very big sum of data

////////////diagonal difference/////////
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let n =arr.length
  let d1 = 0, d2 = 0;
     
        for (let i = 0; i < n; i++)
        {
            for (let j = 0; j < n; j++)
            {
                // finding sum of primary diagonal
                if (i == j)
                    d1 += arr[i][j];
     
                // finding sum of secondary diagonal
                if (i == n - j - 1)
                    d2 += arr[i][j];
            }
        }