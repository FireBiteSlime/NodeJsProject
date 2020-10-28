function TaskOne(){
  var field = document.getElementById('taskone').value;

  document.getElementById('result').innerHTML = field;
};
function TaskTwo(){
  var field = document.getElementById('tasktwo').value.split(' ');
  var result = 0;
  field.forEach((element) => {
    //if(typeof(element) === 'number'){
      element = Number(element);
      result = result + element;
    //}
  });
  document.getElementById('resultTwo').innerHTML = "Сумма = " + result;
};
function TaskThree(){
  var field = document.getElementById('taskthree').value.split(' ');
  var result = ' ';
  field.forEach((element) => {
    //if(typeof(element) === 'number'){

      if(isNaN(element) === true){
        element = 0;
      }else{
        element = Number(element);
        element = element * element;
      }
      result = result + element + ' ';
    //}
  });
  document.getElementById('resultThree').innerHTML = "Новый массив = " + result;
};
//module.export = TaskOneFunction;
