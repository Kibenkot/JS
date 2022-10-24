const parent =window.document.getElementById("parent");

const arr = parent.getElementsByClassName("child");
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i].className);
//    console.log(arr[i].id);
 //console.log(arr[i].classList);
 
    
//}

 // arr[0].classList.toggle("blue");

// window.addEventListener("click", function(evt) {
//     console.log("evt.target", evt.target);
//     console.log("arr[0] got clicked!");
// });

//=========================================================
// при клике на child красить его в синий цвет. если элемент уже покрашен в синий
// то возвращать исходный цвет

// parent.addEventListener("click", function(evt){
//     evt.target.classList.toggle("blue");
// });

//=============================================
// // при наведении на child красить его в синий. 
//при покидании child убирать синий

// function onEnter(evt) {
//     evt.target.classList.add("blue");
// }
// function onLeave(evt) {
//     evt.target.classList.remove("blue");
// }

// for (let i = 0; i < arr.length; i++) {
//     arr[i].addEventListener("mouseenter", onEnter);
//     arr[i].addEventListener("mouseleave", onLeave); 
// }

//===========================================

//// при наведении на child красить его в <цвет>. при покидании child убирать <цвет>
// для первого child цвет - синий, для второго - чёрный, для третьего - коричневый

arr[0].addEventListener("mouseenter", function(evt){
      evt.target.classList.add("blue");
    });
arr[0].addEventListener("mouseleave", function(evt){
        evt.target.classList.remove("blue");
      });


arr[1].addEventListener("mouseenter", function(evt){
        evt.target.classList.add("black");
      });
arr[1].addEventListener("mouseleave", function(evt){
          evt.target.classList.remove("black");
        });

        
arr[2].addEventListener("mouseenter", function(evt){
            evt.target.classList.add("broun");
          });
arr[2].addEventListener("mouseleave", function(evt){
              evt.target.classList.remove("broun");
            });

//===============================
// function getOnEnter(color){
//     return function (evt) {
//         evt.target.classList.add(color);
//     }
// }

// function getOnLeave(color){
//     return function (evt) {
//         evt.target.classList.remove(color);
//     }
// }
    
//  for (let i = 0; i < arr.length; i++) {
//     const color = i === 0 ? "blue" :i ===1 ? "black" : "broun";
//     /*
//      let color;
//      if(i=== 0){
//         color = "blue";
//      } else if(i===1){
//         color = "black";
//      }else (i===2){
//         color = "broun";
//      }

//     */
    
//     const onEnter = getOnEnter(color);
//     const onLeave = getOnLeave(color);
    
//     arr[i].addEventListener("mouseenter", onEnter);
//     arr[i].addEventListener("mouseleave", onLeave); 
//  }

 // ===================================
// при наведении на child красить его в <цвет>. при покидании child убирать <цвет>
// для первого child цвет - синий, для второго - чёрный, для третьего - коричневый
// при клике на child возвращать его оригинальный цвет и отменять все события 
// только на нём


 function getOnEnter(color){
    return function (evt) {
        evt.target.classList.add(color);
    }
}

function getOnLeave(color){
    return function (evt) {
        evt.target.classList.remove(color);
    }
}

function getCancel(onEnter, onLeave){
    return function cancel(evt){
    onLeave(evt);
    evt.target.removeEventListener("mouseenter", onEnter);
    evt.target.removeEventListener("mouseleave", onLeave);
    evt.target.removeEventListener ("click", cancel);   
}
}
    
 for (let i = 0; i < arr.length; i++) {
    const color = i === 0 ? "blue" :i ===1 ? "black" : "broun";
    
    const onEnter = getOnEnter(color);
    const onLeave = getOnLeave(color);
    const cancel = getCancel( onEnter, onLeave);
    
    arr[i].addEventListener("mouseenter", onEnter);
    arr[i].addEventListener("mouseleave", onLeave); 

    arr[i].addEventListener ("click", cancel);
 }
 
    
 