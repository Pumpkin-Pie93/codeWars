function isFlush(cards) {
   let resH =  cards.filter(el => el.match(/H/g))
   console.log(resH);
   let resS =  cards.filter(el => el.match(/S/g))
   console.log(resS);

   let resD =  cards.filter(el => el.match(/D/g))
   console.log(resD);

   let resC =  cards.filter(el => el.match(/C/g))
   console.log(resC);

    let res = resH.length === 5 ? true : resS.length=== 5 
    ? true : resD.length=== 5 ? true : resC.length=== 5 ? true : false
    return res
  }
  isFlush([  "AD", "4S",  "7H", "KC", "5S" ])
