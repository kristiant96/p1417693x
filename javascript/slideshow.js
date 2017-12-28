
var image1=new Image()
image1.src="orient.jpg"
var image2=new Image()
image2.src="star_wars.jpg"
var image3=new Image()
image3.src="justiceleague.jpg"


var step=1
function slideit(){
document.images.slide.src=eval("image"+step+".src")
if(step<3)
step++
else
step=1
setTimeout("slideit()",2500)
}
slideit()
