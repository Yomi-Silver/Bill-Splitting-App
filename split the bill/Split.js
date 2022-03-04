 const amount = document.getElementById('billAmt');
 const friend = document.getElementById('friends');
 const submit = document.getElementById('submit');
 const output = document.getElementById('output')
 const warning = document.getElementById('warning');
 const warning2 = document.getElementById('warning2');
 const warning3 = document.getElementById('warning3');
 
 warning.style.visibility = "hidden";
 warning2.style.visibility = "hidden";
 warning3.style.visibility = "hidden";
 

 submit.addEventListener('click', function() {
//   e.preventDefault;

  output.innerHTML = amount.value / friend.value + '.';


  if (amount.value == ("") || friend.value==("")){
   warning.style.visibility = "visible";
  } else if (amount.value <=1  || friend.value <= 1 ){
   warning2.style.visibility = "visible";
  } else if(amount.value || friend.value =="abcdefghijklmnopqrsuvwxyz"){
     warning3.style.visibility= 'visible';
  }
 })




