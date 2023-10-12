public class Solution {
    public int MaxProfit(int[] prices) {
       if (prices.Length == 1) return 0;

        int totalProfit = 0;
        Stack profitStack = new Stack();
        
        
        for (int i = 1; i<prices.Length;i++)
        {
            profitStack.Push(prices[i]- prices[i-1]);
        }
        
        foreach(int obj in profitStack)
        {
            // Console.WriteLine(obj);
            if(obj > 0) totalProfit += obj;         
        }
        return totalProfit;
    }
}
