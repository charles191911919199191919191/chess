import java.util.Random;

public class ChessAI {

    public static String makeAIMove(String[][] board) {
        Random rand = new Random();
        String move = "";
        // Sample random AI logic (replace with more advanced AI algorithm later)
        int fromRow = rand.nextInt(8);
        int fromCol = rand.nextInt(8);
        int toRow = rand.nextInt(8);
        int toCol = rand.nextInt(8);
        
        move = fromRow + "," + fromCol + " to " + toRow + "," + toCol;
        return move;
    }

    // This method will check for valid moves for pieces
    public static boolean isMoveValid(String piece, int fromRow, int fromCol, int toRow, int toCol) {
        // Sample validation (implement more specific piece rules here)
        if (piece.equals("P") && (fromRow - toRow == 1)) {
            return true;
        }
        return false;
    }
}
