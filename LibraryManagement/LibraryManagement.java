import java.util.Scanner;

public class LibraryManagement{
    public static void main(String args[]){
        Scanner in = new Scanner(System.in);
        int ch,book_id;
        do {
            System.out.println("\t\tWelcome to our Library!!");
            System.out.println("\t\t************************");
            System.out.println("1. View List of Books");
            System.out.println("2. Issue a Book");
            System.out.println("3. Search a Book");
            System.out.println("4. Return book");
            System.out.println();
            System.out.println("Enter your Choice: ");
            ch = in.nextInt();
            switch(ch){
                case 1:
                System.out.println("Below are the list of books");
                System.out.println("\tBook_id\t\tBook_name\t\t\t\tAuthor");
                System.out.println("\t****************************************************************");
                System.out.println("\t101 \t A Better India: A Better World \t\t Narayana Murthy");
                System.out.println("\t102 \t A Passage to India \t\t\t\t E.M. Foster");
                System.out.println("\t103 \t A Revenue Stamp \t\t\t\t Amrita Pritam");
                System.out.println("\t104 \t Death of a City \t\t\t\t Amrita Pritam");
                System.out.println("\t105 \t Children’s Encyclopedia of Birds \t\t Arora’s");
                System.out.println("\t106 \t Beauty and the Beast \t\t\t\t Disney Storybook Artists");
                System.out.println("\t107 \t Oxford Student Atlas For India \t\t Oxford");
                System.out.println("\t108 \t The Call of the Wild \t\t\t\t Jack London");
                System.out.println("\t109 \t Pinocchio \t\t\t\t\t Carlo Collodi");
                System.out.println("\t110 \t Chicken Licken \t\t\t\t Ladybird");
                System.out.println("Please check the main menu to Issue the book. Kindly make note of book_id");
                break;
                case 2:
                System.out.println("\tIssuing the book.");
                System.out.println("\t*****************");
                System.out.println("~~~If not sure, please go to option1 to view the list of books");
                System.out.println("Please enter the book_id");
                book_id = in.nextInt();
                if(book_id >=101 && book_id <=110){
                    System.out.println("Please enter the user issuing the book");
                    String name = in.next();
                    System.out.println("~~~Book "+book_id +" has been issued by the user " + name + " !!! Happy Reading!!");
                }
                else{
                    System.out.println("~~~~Invalid Book_id. Please view the list of books available by choosing option 1 ");
                }
                break;
                case 3:
                System.out.println("\tSearch a book");
                System.out.println("\t**************");
                System.out.println("Please enter the book_id (101 - 110): ");
                book_id = in.nextInt();
                switch(book_id){
                    case 101:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 101\nBookName: A Better India: A Better World\nAuthor: Narayana Murthy");
                    break;
                    case 102:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 102\nBookName: A Passage to India\nAuthor: E.M. Foster");
                    break;
                    case 103:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 103\nBookName: A Revenue Stamp\nAuthor: Amrita Pritam");
                    break;
                    case 104:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 104\nBookName: Death of a City\nAuthor: Amrita Pritam");
                    break;
                    case 105:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 105\nBookName: Children’s Encyclopedia of Birds\nAuthor: Arora’s");
                    break;
                    case 106:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 106\nBookName: Beauty and the Beast\nAuthor: Disney Storybook Artists");
                    break;
                    case 107:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 107\nBookName: Oxford Student Atlas For India\nAuthor: Oxford");
                    break;
                    case 108:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 108\nBookName: The Call of the Wild\nAuthor: Jack London");
                    break;
                    case 109:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 109\nBookName: Pinocchio\nAuthor: Carlo Collodi");
                    break;
                    case 110:
                    System.out.println("Book Details");
                    System.out.println("*************");
                    System.out.println("Book_id: 110\nBookName: Chicken Licken\nAuthor: Ladybird");
                    default:
                    System.out.println("Invalid Book_id. Please view the list of books available by choosing option 1 ");
                    break;
                }
                break;
                case 4:
                System.out.println("Return a book");
                System.out.println("Please enter the book_id to be returned");
                book_id = in.nextInt();
                if(book_id >= 101 && book_id <= 110){
                    System.out.println("Your book "+book_id+" is returned successfully. To re-issue please check option 2");
                }
                else{
                    System.out.println("Invalid book id");
                }
                break;
                default:
                System.out.println("\t\tThank you for choosing our Library !!! Welcome Back !!");
                break;
            }
        }while(ch >= 1 && ch <= 4);
    }
}