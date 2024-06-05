import java.util.*;
public class Probability {
    public static void main(String [] args){
        int coin = 0;
        int heads = 0;
        int tails = 0;
        for(int i = 0; i < 1000; i++){
            coin = (int)(Math.random()*2)+1;
            if(coin == 1){
                heads ++;

            }
            else if(coin == 2){
                tails ++;

            }
        }
        System.out.println(Arrays.toString(spinner()));
        System.out.println(Arrays.toString(dice()));
        System.out.println(tails);
        System.out.println(heads);

    }
    public static int [] dice(){
        int diceA = 0;
        int diceB = 0;
        int sum = 0;
        int [] arr = new int [4];
        int counter = 0;
        for(int i = 0; i < 100000; i++){
            counter = 0;
            for(int k = 0; k < 3; k++){
                diceA = (int)(Math.random()*6)+1;
                diceB = (int)(Math.random()*6)+1;
                sum = diceA + diceB;
                if (sum % 3 == 0) {
                    counter ++;
                }
            }
            arr[counter]++;
        }
        return arr;
    }
    public static int [] spinner(){
        int spin = 0;
        int prize = 0;
        int [] arr = new int [21];
        for(int i = 0; i < 100000; i++){
            spin = (int)(Math.random()*12)+1;
            if(spin == 1 || spin ==2 || spin == 3 || spin ==4 ){
                prize = 2;
            }
            else if(spin == 5 || spin == 6 || spin == 7 || spin ==8 || spin == 9 || spin == 10){
                prize = 5;
            }
            else if(spin == 11){
                prize = 15;
            }
            else{
                prize = 20;
            }
            arr[prize]++;
        }
        return arr;
    }
}
