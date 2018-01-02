

  





  function square_under_whitePieceAttack (currentSquare) {

    return false


  }




  function square_under_blackPieceAttack (currentSquare) {

        return false


  }


 

  
  

  function whitePawnLegal (fromSq, toSq) {

      var offset = fromSq - toSq
     
      if (offset == 9 || offset == 11)  {
	if (capturesWhitePiece (fromSq, toSq) || board [toSq] == 0) {
	  return false
	}
	return true	     
     }

	    
      if (offset == 20) {
	if (toSq < 60) {
	  return false
	} 
	else {
	  blackEnPassantSquare = fromSq - 10 // alert ("blackEnPassantRight " + blackEnPassantRight)	
	  return true
	}
      }
	  
	     
      if (offset == 10 && board [toSq] == 0) { 
	return true
      }	  
      else {    
	return false
      }	   
  
  }



  function blackPawnLegal (fromSq, toSq) {

     var offset = fromSq - toSq	  
     
     if (offset == -9 || offset == -11)  {
	if (capturesBlackPiece (fromSq, toSq) || board [toSq] == 0 ) {
	  return false
	}
	return true	     
     }

	    
     if (offset == -20) {
	if (toSq > 60) {
	  return false
        } 
	else {
	  whiteEnPassantSquare = fromSq + 10 // alert ("whiteEnPassantRight " + whiteEnPassantSquare)	
	  return true
	}
     }
	  
	     
     if (offset == -10 && board [toSq] == 0) { 
	return true
     }	  
     else {    
	return false
     }	  	  
	  
  }	  
  



  function knightLegal (fromSq, toSq) {
	
     
  
     for (i = 0; i < 8; i++) {
	   
	   if (fromSq - toSq == knight_legal_move [i])
             return true
            
          }

  }        
  
  
  
  function bishopLegal (fromSq, toSq) {

	   for (i = 0; i < 4; i++) {
	   
	       var offset = fromSq - toSq
	       if ((offset%bishop_legal_move [i] == 0) && ( sign (offset) == sign (bishop_legal_move [i]))) {
                   
	       var count = offset/bishop_legal_move [i]
	       
		  for (j = 1; j < count; j ++) {  
		     if (board [fromSq - j*bishop_legal_move [i]] != 0) 
		       return false
		  }   
		     
		return true
	       
	     } 
          
           }
	  
	  
  
  }        
  
  
  
  function rookLegal (fromSq, toSq) {
   
	

	   for (i = 0; i < 4; i++) {
	   
	      var offset = fromSq - toSq
	      if ((offset%rook_legal_move [i] == 0) && ( sign (offset) == sign (rook_legal_move [i]))) {
                     
	       var count = offset/rook_legal_move [i]
	       
		  for (j = 1; j < count; j ++) 
		     if (board [fromSq - j*rook_legal_move [i]] != 0) 
		       return false
		     
		return true
	       
	     } 
          
           }
	  
  }        
  
  
  function queenLegal (fromSq, toSq) {
   
	

	   for (i = 0; i < 8; i++) {
	   
	      var offset = fromSq - toSq
	      if ((offset%queen_legal_move [i] == 0) && ( sign (offset) == sign (queen_legal_move [i]))) {
                   
	       var count = offset/queen_legal_move [i]
	       
		  for (j = 1; j < count; j ++) 
		     if (board [fromSq - j*queen_legal_move [i]] != 0) 
		       return false
		     
		     
		return true
	       
	     } 
          
           }
	  
  }        
  
  
  
  function white_kingLegal (fromSq, toSq) {
	
              for (i = 0; i < 8; i++) {
	    
	          if (fromSq - toSq == king_legal_move [i]) { 
	                white_king_moved = true
			return true
		  }
	      }   
        
  }        
  
  
  function black_kingLegal (fromSq, toSq) {
	
        for (i = 0; i < 8; i++) {
	    
		if (fromSq - toSq == king_legal_move [i]) { 
	                black_king_moved = true
			return true
		}
	}   
         
  }        
 
  
  
