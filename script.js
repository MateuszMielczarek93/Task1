function MyFunction(){
    var BtnClick = document.getElementById("SendButton");
    var ModalHide = document.getElementById("MyModalW");
    var Close = document.getElementById("CloseButton");
    var InputName = document.getElementById("InputBox");
    
    
    InputName.addEventListener("keyup", function(event) {
     if (event.keyCode ===13) {
         document.getElementById("SendButton").click();
         var Values = document.getElementById("InputBox").value
         document.getElementById("NameOut").innerHTML = Values;
        
    }});

    BtnClick.onclick = function(){
        ModalHide.style.display = "block";
        var Values = document.getElementById("InputBox").value
        document.getElementById("NameOut").innerHTML = Values;
       
    };

    Close.onclick = function(){
        ModalHide.style.display = "none";
    }


   ModalHide.addEventListener("keydown", function (event){
       if(event.keyCode ===37)
       //perseint
    ModalHide.style.left; 
    ModalHide.style.right; 
    ModalHide.style.top;
    ModalHide.style.bottom;

  });

};
