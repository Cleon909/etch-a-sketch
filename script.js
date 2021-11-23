// Java script sheet for etch-a-sketch//

let container = document.getElementById('container');


//code for creating divs//
//for (i=0; i<256; i++) {
//    let box = document.createElement('div');box.//className = "boxes";    
//    box.addEventListener('mouseenter', function() {box.classList.add('hovered')})
//    container.appendChild(box);
//}


let btn = document.getElementById('btn');

//code for resetting rmv hovered class//
//function reset() {
//    let hovered = document.getElementsByClassName('hovered');
//   while (hovered[0]) {
//       hovered[0].classList.remove('hovered')
//   }
//}

function removeOldBoxes () {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}


//code for getting user input adding divs and adding event listeners that add hovered class//

function getInput() {
    let size;
   size = prompt('Enter grid size (max 100)')
   removeOldBoxes ();


    if (isNaN (size) || size > 100) {alert ('NEED A NUMBER 1<>100!')}
    let s = 960/size+'px';
    console.log (s);
    for (i=0; i<size*size; i++) {
        let box = document.createElement('div');  
        box.className = "boxes"; box.style.height = s;box.style.width =s; 
        // box.addEventListener('mouseenter', function() {box.classList.add('hovered')})
        box.addEventListener('mouseenter', function() {
            let r = Math.floor(Math.random()*255)
            let b = Math.floor(Math.random()*255)
            let g = Math.floor(Math.random()*255)
            let rgb = "rgb(" + r + ", " + g + ", " + b + ")"; 
            box.style.background = rgb})
        container.appendChild(box);

    }
}



//prompt();






//old code for cloning box   
//for (i=1; i<256;i++) {
//    box[i] = box.cloneNodecreate();
//    let b = box [i]
//    box[i].addEventListener('mouseenter', function() {b.classList.add('hovered')})
//   container.appendChild(box[i]);
//   box[i].id = 'box'+[i];
   
//}
