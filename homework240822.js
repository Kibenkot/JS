//1)  Выведите чётные числа
//При помощи цикла for выведите чётные числа от 2 до 10.
//Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)

for (let i = 2; i <= 10; i++){
    if(i % 2 == 0) {
        console.log(i);
    }
   }

  //1.1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
  //for (let i = 0; i < 3; i++) {
  //alert( `number ${i}!` );
  //}

  for (let i = 0; i < 3; i++) {
  console.log ( `number ${i}!` );
  } 


  let i = 0;
  while(i < 3){
  console.log ( `number ${i}!` );
  i++;
  }

  // 2) Замените код Function Expression стрелочной функцией:
  //function ask(question, yes, no) {
  //  if (confirm(question)) yes()
  // else no();
  // }


 //ask(
 //"Вы согласны?",
 //function() { alert("Вы согласились."); },
 //function() { alert("Вы отменили выполнение."); }
 //);


 function ask(question, yes, no) {
          if (confirm(question)) yes()
          else no();
          }
  
 ask(
   "Вы согласны?",
   () => console.log("Вы согласились."),
   () => console.log("Вы отменили выполнение."),
   );

