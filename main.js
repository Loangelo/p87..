 var canvas =new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";

function new_image(get_image)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(img){
		block_image_object = Img;

        block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeigth(blockImageHeight);
		block_image_object.set
		({
			top:blockY,
			left:blockX
		});
		canvas.add( block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '69')
	{
		new_image('rr1.png'); 
		console.log("r");
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		new_image('gr.png'); 
		console.log("g");
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		new_image('yr.png'); 
		console.log("y");
	}
	if(keyPressed == '82')
	{
		block_x = 600;
		new_image('pr.png'); 
		console.log("p");
	}
	if(keyPressed == '73')
	{
		block_x = 700;
		new_image('br.png'); 
		console.log("b");
	}
	
}

