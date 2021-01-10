import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors

public class generateFile {
  
    public static void main(String[] args) {
    
        public void newFile(path){
            try {
                FileWriter myWriter = new FileWriter("output.txt");
                myWriter.write(path);
                myWriter.close();
                System.out.println("Successfully wrote to the file.");
            }catch (IOException e) {
                System.out.println("An error occurred.");
                e.printStackTrace();
                }
        }
    }
}