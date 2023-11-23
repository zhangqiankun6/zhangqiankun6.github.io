// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// const button = document.querySelector("button");

// button.onclick =  ()=> {
//   let name = prompt("What is your name?");
//   alert("Hello " + name + ", nice to see you!");
// };
// document.querySelector("html").addEventListener("click", ()=> {
//     alert("别戳我，我怕疼。");
//   });
  
// console.log(myName);
// var myName = "Chris";
// var myName = "Bob";
// console.log(myName);

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName()
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "欢迎，" + myName;
      }
    }
   
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎，" + storedName;
  }
  myButton.onclick = function () {
    gaEvent();
  };
   function gaEvent() {
        if (isMobile()) {
            console.log('这是移动端');
            alert('这是移动端')
            myImage.setAttribute("src", "images/mei2.jpg");
        } else {
            console.log('这不是移动端');
            myImage.setAttribute("src", "images/mei.jpg");
        }   
        // console.log('ga4');
        // window.hellowdSdk.gaEvent("order", { 'app_name': 'myAppName' })
    }
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mei.jpg") {
    myImage.setAttribute("src", "images/mei2.jpg");
  } else {
    myImage.setAttribute("src", "images/mei.jpg");
  }
};