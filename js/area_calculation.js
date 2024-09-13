function calculateTriangleArea(){
   const baseField = document.getElementById('base-field');
   const baseValueField = baseField.value;
   const base = parseFloat(baseValueField);


   const heightField = document.getElementById('height-field');
   const heightValueField = heightField.value;
   const height = parseFloat(heightValueField);

   const area  = 0.5*base*height
  
   const areaSpan = document.getElementById('total-area');
   areaSpan.innerText = area;

}

function calculateRectangleArea(){
   const widthField = document.getElementById('width-field');
   const widthValueField = widthField.value;
   const width = parseFloat(widthValueField);

   const lengthField = document.getElementById('Length-field');
   const lengthValueField = lengthField.value;
   const Length = parseFloat(lengthValueField);

   const area = width*Length

   const rareaSpan = document.getElementById('total-rarea');
   rareaSpan.innerText = area;
   
}


