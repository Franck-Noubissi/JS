//for (let i = 1; i < 199; i++) {
  //  if(i % 3 == 0 && i % 5 == 0) {
    //    console.log("Coucou Hello")
   // } else if (i % 5 == 0) {
        //console.log("Coucou")
   // } else if (i % 3 == 0 ) {
      //  console.log("Hello")   
    //} else {
     //   console.log(i)
    //}
//}

//let i = 0

//while(i < 200) {
    
  //  if(i % 3 == 0 && i % 5 == 0) {
      //      console.log("Coucou Hello")
    //    } else if (i % 5 == 0) {
        //    console.log("Coucou")
        //} else if (i % 3 == 0 ) {
         //   console.log("Hello")   
        //} else {
          //  console.log(i)
        //}

        //i++
//}


let i = 1;

while(i<200) {
    switch(true) {
        case i%3 == 0 && i%5 == 0: console.log("coucou hello")
        break
        case i%3 == 0: console.log("coucou");
        break;
        case i%5 == 0: console.log("hello");
        break;
        default: console.log(i);
    }
    i++
}
