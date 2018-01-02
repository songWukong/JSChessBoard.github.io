 function Draw_Board() {
   
   var table = "<table cellspacing = 0 align = center>"   

   for (i = 0; i < 8 ; i++) {
   table += "<tr>"

      for (j = 0; j<8; j++) {
      color = (i+(j%2))%2 ? "708090" : "E6E6FA"       
      table += "<th id = " + (j+i*10+21) + " width = 60 height = 60 onclick = 'onClick (this.id)' bgcolor = #" + color +"></th>"
      }
   table += "</tr>"
   }

 table += "</table>" 
 document.write (table)
  
 
    }

    


 function Draw_Pieces () {

 for (i = 0; i < 8; i++) { 
   
   for (j = 0; j < 8; j++) {
    var SqId = (j+i*10+21)
    var SqInd = board [SqId]
    document.getElementById(SqId).innerHTML = "<img src = ./Images/" + (SqInd) +".gif>"
   } 
   
  }   
 
 
  
 }

 
 
 



 



/** function Print_id_To_Console () {

  for (i = 0; i < 8; i++) {
   var lineid = ""
   
   for (j = 21; j < 29; j++) {
    var n = (j+i*8)-21; 
     
     
      (n<10)? lineid += " " + n + " " : lineid += n + " "
   }
   console.log (lineid)
  }


 }

 Print_id_To_Console () **/
 




 