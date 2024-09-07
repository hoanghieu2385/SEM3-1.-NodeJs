function example1(){
  var x = 10;
  if (true) {
      var x = 20;
      console.log("In block" + x);
  }
  console.log("Out block " + x);
}

function example2(){

  let  y = 10;
  if (true) {
      let y = 20;
      console.log("In block" + y);
  }
  console.log("Out block " + y);
}

function example3(){

  const  y = 10;
  if (true) {
    const y = 20;
      console.log("In block" + y);
  }
  console.log("Out block " + y);
}


console.log()
example1();
console.log()
example2();
console.log()
example3();