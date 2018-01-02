  

  var board = new Array (120)

  
  var whiteToMove = true
  var blackToMove = false
  

  var WhitePieces = [13, 11, 12, 14, 15, 12, 11, 13]
  var BlackPieces = [5, 3, 4, 6, 2, 4, 3, 5]

  var clicklock = false
  var fromSq
  var toSq
  var PieceId
  
  var king_legal_move = [11, 9, -11, -9, 10, 1, -10, -1]
  var queen_legal_move = [11, 9, -11, -9, 10, 1, -10, -1]
  var rook_legal_move = [10, -10, 1, -1]
  var bishop_legal_move = [11, 9, -11, -9]
  var knight_legal_move = [21, 19, -21, -19,  12, 8, -12, -8]

  var white_castles_kingSide = 97
  var white_castles_queenSide = 93  

  var white_king_moved = false
  var white_h_rook_moved = false
  var white_a_rook_moved = false

  var black_castles_kingSide = 27
  var black_castles_queenSide = 23  

  var black_king_moved = false
  var black_h_rook_moved = false
  var black_a_rook_moved = false

  var whiteEnPassantSquare
  var blackEnPassantSquare
 
  var black_pawn = 1
  var black_knight = 3
  var black_bishop = 4
  var black_rook = 5
  var black_queen = 6
  var black_king = 2
 
  var white_pawn = 9
  var white_knight = 11
  var white_bishop = 12
  var white_rook = 13
  var white_queen = 14
  var white_king = 15

  var empty_square = 0


 