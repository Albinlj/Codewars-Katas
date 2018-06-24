using System;
using System.Linq;

public class Accumul {
    public static String Accum(string s) {
        string[] chars = s.ToUpper().ToArray();
        String retVal = chars[0];
        for (int i = 1; i < chars.Length; i++) {
            retVal += "-" + new String(chars[i].ToLower(), i + 1);
        }
        return retVal;
        // your code
    }
}