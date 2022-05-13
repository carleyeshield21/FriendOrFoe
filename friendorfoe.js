function friend(friends){
  arr = []
  for(i=0; i<=friends.length-1; i++){
    if(friends[i].length == 4){
    arr.push(friends[i])
    }
  }
  return console.log(arr)
}
friend(["Ryan", "Kieran", "Jason", "Yous"])