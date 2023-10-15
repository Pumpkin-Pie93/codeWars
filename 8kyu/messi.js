
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17





function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let result = 0;
   
     for (var i = 0; i < arguments.length; i++) {
       result += arguments[i];
     }
   
     return result;
   }
   