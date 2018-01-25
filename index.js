var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return('Welcome,'+ name +'. You are number'+ katzDeli.length +'in line.');
}
function nowServing(katzDeli){
  for(var i=0; i<katzDeli.length; i++){
    if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else{
    return('Currently serving'+ katzDeli.shift() +'.');
  }
}
}
function currentLine(KatzDeli, name){
  var katzDeliLine = [];
  for(var i=0; i<KatzDeli.length; i++{
    if(katzDeli.length === 0){
      return "The line is currently empty.";
  } else{
    katzDeliLine.push(name)
    return 'The line is currently:'+ katzDeliLine
  }
    
  })
}
