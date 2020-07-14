document.querySelector("#search").addEventListener("keyup", function(){

    const input = document.querySelector("#search").value.toLowerCase();
    const numberOfPhotos = document.querySelectorAll(".list a").length;
  
    for (i = 0; i < numberOfPhotos; i++){
  
      const caption = document.querySelectorAll("a")[i].getAttribute("data-title").toLowerCase();

      if(caption.includes(input)) {
        $(document.querySelectorAll("a")[i]).show();
      } 
      else {
        $(document.querySelectorAll("a")[i]).hide();
      }
    }

});

lightbox.option({
  "wrapAround": true,
  "showImageNumberLabel": false,
})