/*Given an array of integers, return a new array such that each element at index i
of the new array isthe product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].*/

//arr of ints
// create a function with one param, create an empty arr, for loop to iterate through the arr, slice, reduce method and push it into the new arr, return array

let numProducts = (int) => int.map((_, i) => int.filter((_, j) => i != j).reduce((a, b) => a * b, 1))

console.log(numProducts([1, 2, 3, 4, 5]))

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'validateData' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY patients
 *  2. 2D_STRING_ARRAY claims
 *  3. 2D_STRING_ARRAY charges
 */

//use forEach to iterate through claim and use filter method to filter through charge and find matching charges that match the claim ID

function validateData(patients, claims, charges) {
    // Write your code here
    const validClaims = []
    patients.forEach(patient => {
        console.log('processing patient' , patient)
        const patientID = patient[0]
        const claimsForPatient = claims.filter(claim => claim[1] === patientID)
        console.log('found these claims for patient', claimsForPatient)

        claimsForPatient.forEach(claim => {
            const claimID = claim[0]
            const chargesForClaim = charges.filter(charge => charge[1] === claimID)
            console.log('found these charges for this claim', chargesForClaim)

            let claimIsValid = true
            let procedureCodeSeen = {}
            chargesForClaim.forEach(charge => {
                const procedureCode = charge[3]

                if(charge[3] === '99394' && patient[1] >= 18){
                    claimIsValid = false
                } else if (charge[3] === '99395' && (patient[1] < 18 || patient[1] > 39)){
                    claimIsValid = false
                } else if (charge[3] === '99396' && patient[1] <= 39){
                    claimIsValid = false
                } else if (charge[3][0] === '9' && claim[3] != 'office'){
                    claimIsValid = false
                } else if ((charge[3][0] === '5' || charge[3][0] === '6')  && claim[3] ===                            'office'){
                    claimIsValid = false
                } else if (procedureCodeSeen[procedureCode]){
                    claimIsValid = false
                }
                procedureCodeSeen[procedureCode] = 1
            })
            if(claimIsValid){
               validClaims.push(claimID)
            }
        })
    })
     return validClaims.sort((a,b) => a - b)

}

function main() {
