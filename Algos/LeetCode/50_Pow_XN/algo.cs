public class Solution {
    public double MyPow(double x, int n) {
        if(n == 0) return 1;
        
        double Power = n;//Need to convert to double since it's larger than an int can hold
        if(n < 0) 
        {
            x = 1/x;
            Power = Power*-1;
        }
        
        double res = 1;
        
        while(Power > 0)
        {
            if(Power % 2 == 0){
                x = x*x;
                Power = (Power/2.0);
            }
            else
            {
                res = res * x;
                Power = Power-1;
            }
          
        }
        
        return res;
    }
}