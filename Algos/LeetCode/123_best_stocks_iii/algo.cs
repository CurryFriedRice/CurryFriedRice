// using System;
// using System.Collections;

// public class Solution {
//     public int MaxProfit(int[] prices) {
//         if (prices.Length == 1) return 0;

//         int totalProfit = 0;
//         Stack<int> profitStack = new Stack<int>();

//         for (int i = 1; i<prices.Length;i++)
//         {
//             if (prices[i-1] - profits[i] < 0)
//             {
//                 profitArr.push(totalProfit);
//                 totalProfit = 0;
//             }
//             else
//             {
//                 totalProfit += prices[i-1] - profits[i];
//             }
//         }
//         int[] profits = new int[profitStack.Count];
//         profits
//         return totalProfit;
//     }
// }
