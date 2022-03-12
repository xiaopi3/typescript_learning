function helloWorld(msg: string){
  console.log(msg+" hhh");
  document.getElementsByTagName("body")[0].innerHTML = msg+" hhh";
}

helloWorld("abc");