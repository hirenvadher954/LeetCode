public class Solution {
    public bool IsIsomorphic(string s, string t) {
        Dictionary<char, char> chars = new ();
        for (int i = 0; i < s.Length; i++)
        {
            if (!chars.ContainsKey(s[i]) && !chars.ContainsValue(t[i]))
            {
                chars.Add(s[i], t[i]);
            }
            else
            {
                chars.TryGetValue(s[i], out char value);
                if (value != t[i]) return false;
            }
        }

        return true;
    }
}