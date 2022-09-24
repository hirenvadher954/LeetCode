public class Solution {
    public bool IsIsomorphic(string s, string t) {
       Dictionary<char, char> chars = new Dictionary<char, char>();
        for (int i = 0; i < s.Length; i++)
        {
            if (!chars.ContainsKey(s[i]) && !chars.ContainsValue(t[i]))
            {
                chars.Add(s[i], t[i]);
            }
            else
            {
                if (!chars.ContainsKey(s[i])) return false;
                if (chars[s[i]] != t[i]) return false;
            }
        }

        return true;
    }
}