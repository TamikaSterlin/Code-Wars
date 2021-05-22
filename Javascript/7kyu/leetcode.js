//Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


var isPalindrome = function(s) {
    // let reverseWord = s.toLowerCase().split('').reverse().join('').replace(/\W/g, '').replace(/_/g, '')
    // let word = s.toLowerCase().split('').join('').replace(/\W/g, '').replace(/_/g, '')
    let word = s.toLowerCase().split('').filter(item => item >= 'a' && item <= 'z' || item >= '0' && item <= '9' ).join('')
    let reverseWord = s.toLowerCase().split('').filter(item => item >= 'a' && item <= 'z' || item >= '0' && item <= '9').reverse().join('')
    console.log('here' + word + 'here', 'here' + reverseWord + 'here')

    if( reverseWord === word){
        return true
    } else {
        return false
    }

};
