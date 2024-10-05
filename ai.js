function requestAIMove() {
    const boardState = chessboard; // Get the current chessboard state
  
    // Simulate calling the Java AI engine (replace this with actual Java-communication mechanism)
    let move = JavaAI.makeAIMove(boardState); // Example call
    console.log('AI move:', move);
    
    // Parse the move and update the chessboard
    // For example: "6,0 to 4,0" (moving a pawn)
    const [from, to] = move.split(' to ');
    const [fromRow, fromCol] = from.split(',').map(Number);
    const [toRow, toCol] = to.split(',').map(Number);
    
    // Update the chessboard with the AI move
    chessboard[toRow][toCol] = chessboard[fromRow][fromCol];
    chessboard[fromRow][fromCol] = '';
    renderBoard();
  }
  