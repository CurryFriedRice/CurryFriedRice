public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int startIndex = 0;
        int longest = 0;
        
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = startIndex; j < i; j++)
            {
                if(s[i] == s[j])
                {
                    startIndex = j+1;
                    break;
                }
            }
            if(i - startIndex+1 > longest)
            {
                longest = i - startIndex + 1;
            }
        }
        
        return longest;
    }
}