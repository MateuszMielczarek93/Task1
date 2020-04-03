function MyFunction(){
    var BtnClick = document.getElementById("SendButton");
    var ModalHide = document.getElementById("MyModalW");
    var Close = document.getElementById("CloseButton");
    var InputName = document.getElementById("InputBox");
    var Values = document.getElementById("InputBox").value
    
    InputName.addEventListener("keyup", function(event) {
     if (event.keyCode ===13) {
         document.getElementById("SendButton").click();
         document.getElementById("NameOut").innerHTML = Values;
    }});

    BtnClick.onclick = function(){
        ModalHide.style.display = "block";
        document.getElementById("NameOut").innerHTML = Values;
    }

    Close.onclick = function(){
        ModalHide.style.display = "none";
    }

    
 };