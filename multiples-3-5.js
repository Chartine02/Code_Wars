function solution(number){
    let num = Math.random() * number
    let sum = 0
      return Math.sign(num) == -1 ? 0 :
      (num % 3 == 0 && num % 5 == 0) ? sum += num : 0
  }