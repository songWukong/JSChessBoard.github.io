



  function sign(num) {
    if (num == 0) 
      return 0
    else if (num > 0) 
      return 1
    else
      return -1
  }


 
  function capturesWhitePiece (fromSq, toSq) { 
 
    if (board [toSq] > 8 && board [toSq] < 16 ) return true 
 
  }
 
  
   function capturesBlackPiece (fromSq, toSq) { 
 
     if (board [toSq] >0 && board [toSq] < 8) return true
 
  }
 
  
  
  
  function Check_move_legality (fromSq,toSq) {

	  

	  switch (board [fromSq]) {
		  
		
		  case white_pawn:
                    return whitePawnLegal (fromSq, toSq)
		  
		  case white_knight:
		    if (capturesWhitePiece (fromSq, toSq)) break
		    return knightLegal (fromSq, toSq)
		  
                 case white_bishop:
		    if (capturesWhitePiece (fromSq, toSq)) break
		    return bishopLegal (fromSq, toSq)
		  
                 case white_rook:
                    if (capturesWhitePiece (fromSq, toSq)) break
		    return rookLegal (fromSq, toSq)
		  
		 case white_queen:
                    if (capturesWhitePiece (fromSq, toSq)) break
		    return queenLegal (fromSq, toSq)
		  
		 case white_king:
                    if (capturesWhitePiece (fromSq, toSq)) break
		       return white_kingLegal (fromSq, toSq)
		     
		   

                  case black_pawn:
                     return blackPawnLegal (fromSq, toSq)
		  
		  case black_knight:
                     if (capturesBlackPiece (fromSq, toSq)) break
		     return knightLegal (fromSq, toSq)
 
                  case black_bishop:
		     if (capturesBlackPiece (fromSq, toSq)) break
		     return bishopLegal (fromSq, toSq)
		  
                  case black_rook:
                     if (capturesBlackPiece (fromSq, toSq)) break
		     return rookLegal (fromSq, toSq)
                  
		  case black_queen:
                     if (capturesBlackPiece (fromSq, toSq)) break
		     return queenLegal (fromSq, toSq)
 
                  case black_king:
		     if (capturesBlackPiece (fromSq, toSq)) break
		     return black_kingLegal (fromSq, toSq)

          }
  
	  
	  
	  
	  
	  
  }	  
  
   

  
 
  
  

  



  function Make_move (clickInd) {
   
   if (clicklock) {
     clicklock = false
     toSq = clickInd
      
      
	  
        
	   
        
       	   
	   
       if (Check_move_legality (fromSq,toSq)) {
         board [fromSq] = 0
         board [clickInd] = PieceId
	
	
	 if (fromSq == 91) white_a_rook_moved = true 
	 if (fromSq == 98) white_h_rook_moved = true
	 if (fromSq == 21) black_a_rook_moved = true 
	 if (fromSq == 28) black_h_rook_moved = true	    
	}
	
       
	
	switch (toSq) {   
            
	   case white_castles_queenSide:
	   case white_castles_kingSide:
		 return WhiteCastles (fromSq, toSq)
	       
	   case black_castles_queenSide:
	   case black_castles_kingSide:
	      return BlackCastles (fromSq, toSq)
       }       
	
        if (white_enPassant (fromSq, toSq)) return true
        if (black_enPassant(fromSq, toSq)) return true	 
       
          
       
   }
   else {
     if (board [clickInd] == 0) return false
     //if (board [clickInd] >0 && board [clickInd] < 8) {alert ("Вы играете белыми фигурами!"); return false}
     clicklock = true
     PieceId = board [clickInd]
     fromSq = clickInd
        
   }
   

  }


  
     function WhiteCastles (fromSq, toSq) {
	  
	 if (white_king_moved == false &&
                     white_a_rook_moved == false &&	
	             square_under_blackPieceAttack (95) == false &&
                     square_under_blackPieceAttack (93) == false &&
                     square_under_blackPieceAttack (94) == false &&	  
		     board [92] == 0 && 
		     board [93] == 0 && 
		     board [94] == 0) {	

		 board [93] = board [95]	
                 board [95] = 0
		 board [94] = board [91]
                 board [91] = 0			
		 return true	
		}
		 
	 if (white_king_moved == false && 
		     white_h_rook_moved == false &&
		     square_under_blackPieceAttack (95) == false &&
		     square_under_blackPieceAttack (96) == false &&
		     square_under_blackPieceAttack (97) == false &&
		     board [96] == 0 && 
		     board [97] == 0) {	

		 board [97] = board [95]	
                 board [95] = 0
		 board [96] = board [98]
                 board [98] = 0			
		 return true	
		}
 
	  
  }	  
  
  
  
  
  
  function BlackCastles (fromSq, toSq) {
	  
	if (black_king_moved == false &&
                     black_a_rook_moved == false &&	
		     square_under_whitePieceAttack (25) == false &&
                     square_under_whitePieceAttack (23) == false &&
                     square_under_whitePieceAttack (24) == false &&	  
		     board [22] == 0 && 
		     board [23] == 0 && 
		     board [24] == 0) {	

		 board [23] = board [25]	
                 board [25] = 0
		 board [24] = board [21]
                 board [21] = 0			
		 return true	
		}  
	 
	if (black_king_moved == false && 
		     black_h_rook_moved == false &&
		     square_under_whitePieceAttack (25) == false &&
		     square_under_whitePieceAttack (26) == false &&
		     square_under_whitePieceAttack (27) == false &&
		     board [26] == 0 && 
		     board [27] == 0) {	

		 board [27] = board [25]	
                 board [25] = 0
		 board [26] = board [28]
                 board [28] = 0			
		 return true	
		}
	  
  }	
  
  
  
  
   function white_enPassant (fromSq, toSq) {

     var offset = fromSq - toSq
      
      if (offset == 9 && (fromSq > 50 && fromSq < 59) && board [fromSq+1] == 1 && whiteEnPassantSquare == fromSq - 9)  {
	 board [toSq] = board [fromSq]
	 board [fromSq] = 0      
         board [fromSq+1] = 0	
	  return true    
     }

      if (offset == 11 && (fromSq > 50 && fromSq < 59) && board [fromSq-1] == 1 && whiteEnPassantSquare == fromSq-11)  {
	 board [toSq] = board [fromSq]
	 board [fromSq] = 0      
         board [fromSq-1] = 0	
	  return true    
     }
 
     
	  
  }	  

  
   function black_enPassant (fromSq, toSq) {

     var offset = fromSq - toSq
      
      if (offset == -9 && (fromSq > 60 && fromSq < 69) && board [fromSq-1] == 9 && blackEnPassantSquare == fromSq + 9)  {
	 board [toSq] = board [fromSq]
	 board [fromSq] = 0      
         board [fromSq-1] = 0	
	  return true    
     }

      if (offset == -11 && (fromSq > 60 && fromSq < 69) && board [fromSq+1] == 9 && blackEnPassantSquare == fromSq + 11)  {
	 board [toSq] = board [fromSq]
	 board [fromSq] = 0      
         board [fromSq+1] = 0	
	  return true    
     }
 
     
	  
  }	  
  
  


   function onClick (click_Id) {
  	   
  var clickInd = parseInt (click_Id, 10) 
  
  Make_move(clickInd)
	Draw_Pieces()   
     
  Print_Board_To_Console()
  
  
   }
   
   
 