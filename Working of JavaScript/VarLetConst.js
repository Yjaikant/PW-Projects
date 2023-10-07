function variables(){
  
    console.log(a); // 2 
    console.log(b);// can not acces b before initailization
    console.log(c);// can not access c before initialization(Reference Error!)

    var a = 2 ;
    let b = 4 ;
    const c = 5;

    console.log(a);//2 
    console.log(b);//4
    console.log(c);//5

}

variables();

