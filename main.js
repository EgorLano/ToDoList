


  
  var Spisok={};
    function Spisok_Object(number){
	   this.number=number;
   };
 
   
   function Add_Spisok(name,number){
	   Spisok[name]=new Spisok_Object(number);
   }
   
   
   
function add_input1(obj)
{
    var new_input=document.createElement('div');
          new_input.innerHTML='<br>инпут №'+ 'f' +'<br ><input name="my_input" class="my_input">';
          new_input.innerHTML=new_input.innerHTML+'<input type="button" value="Добавить" onclick="Add_element(this.previousSibling.value,this.parentNode)">';
          new_input.innerHTML=new_input.innerHTML+'<ul class="Chose_category_main"><li><a>Выберите категорию</a> <ul class="Chose_category_submain"><li><a>Личное</a></li><li><a>Поручения</a></li><li><a>Покупки</a></li><li><a>Надо по-любасу</a></li></ul> </li></ul>';	  
   if (obj.nextSibling)
    
    document.getElementById('input1').insertBefore(new_input,obj.nextSibling)

else document.getElementById('input1').appendChild(new_input);
}

     function del_input1(obj)
{obj.remove();}

      function Add_element(text,obj_new_input){
		  if (text!=""){
		  var text_value=text;obj_new_input.innerHTML='<p onclick="Change_to_reducting(this.innerHTML,this.parentNode)">'+text_value+'</p>';Add_Spisok(text_value,23);}}
		  
	 
 
     function Change_to_reducting(text,obj_new_input){
 var text_value=text;obj_new_input.innerHTML='<input value='+text_value+' name="my_input" >';
 obj_new_input.innerHTML=obj_new_input.innerHTML+'<input type="button" value="Сохранить" onclick="Add_element(this.previousSibling.value,this.parentNode)">';
 obj_new_input.innerHTML=obj_new_input.innerHTML+'<input type="button" value="Завершить" onclick="del_input1(this.parentNode)">';}
 
 
     function add_input2(obj)
{
var new_input=document.createElement('div');
new_input.innerHTML='<br>инпут №'+'asdf' +'<br ><input name="my_input" >';
new_input.innerHTML=new_input.innerHTML+'<input type="button" value="Добавить" onclick="Add_element(this.previousSibling.value,this.parentNode)">';
new_input.innerHTML=new_input.innerHTML+str;
if (obj.nextSibling)
    
    document.getElementById('input2').insertBefore(new_input,obj.nextSibling)

else document.getElementById('input2').appendChild(new_input);
}

function del_input2(obj)
{obj.remove();}

   
 
     function Change_to_reducting(text,obj_new_input){
 var text_value=text;obj_new_input.innerHTML='<input value='+text_value+' name="my_input" >';
 obj_new_input.innerHTML=obj_new_input.innerHTML+'<input type="button" value="Сохранить" onclick="Add_element(this.previousSibling.value,this.parentNode)">';
 obj_new_input.innerHTML=obj_new_input.innerHTML+'<input type="button" value="Завершить" onclick="del_input2(this.parentNode)">';}
 
 
 
 
 
      function open_someDiv(to_open)
 { 
     var Arr=document.getElementsByName("Windows");
	    for(var i=0;i<=Arr.length-1;i++){
			if (Arr[i].id==to_open) {document.getElementById(to_open).style.display='block'} else {
			Arr[i].style.display='none';}
		}	
 }
   
 
   
   