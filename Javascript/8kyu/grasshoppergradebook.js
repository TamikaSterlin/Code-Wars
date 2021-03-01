//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

/*Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'*/


function getGrade (s1, s2, s3) {
  let answer = (s1 + s2 + s3)/3
  if (answer >= 90){
    return "A"
  } else if (answer >= 80 &&  90){
    return "B"
  } else if (answer >= 70 &&  80 ){
    return "C"
  }else if (answer >= 60 &&  70 ){
    return "D"
  }else if (answer >= 0 &&  60 ){
     return "F"
  }
}
