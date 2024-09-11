function calculateTriangleArea(){
   const baseField = document.getElementById('base-field');
   const baseValueField = baseField.value;
   const base = parseFloat(baseValueField);


   const heightField = document.getElementById('height-field');
   const heightValueField = heightField.value;
   const height = parseFloat(heightValueField);

   const area  = 0.5*base*height
   console.log(area);

}


