  





 function Board_Init () {

  
  for (i = 0; i < 8; i++) { 

   for (j = 21; j < 29; j++) {
    board [j+i*10] = 0 
   } 
  
  }  


  for (i = 21; i < 29; i++) {   
   board [i] = BlackPieces [i-21]
  }

  for (i = 31; i < 39; i++) {   
   board [i] = 1
  }

  for (i = 81; i < 89; i++) {   
   board [i] = 9
  }

  for (i = 91; i < 99; i++) {   
   board [i] = WhitePieces [i-91]
  }

 

 }
  
 







 function Print_Board_To_Console () {

  for (i = 0; i < 12; i++) {
   var line = ""
   for (j = 0; j < 10; j++) {
    var n = board [j+i*10] 
     if (typeof n == "undefined")
      line += "xx" + " "
     else
      (n<10)? line += " " + n + " " : line += n + " "
   }
   console.log (line)
  }
 }


