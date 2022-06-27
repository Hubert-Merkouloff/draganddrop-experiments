import "./style.scss"

const rightlist = document.querySelector('.list-right')
const leftlist = document.querySelector('.list-left')

// let draggable;

// const img = new Image();
// img.src =
//   "https://upload.wikimedia.org/wikipedia/commons/7/7f/Generic_football.png";

// // document.addEventListener("dragstart", event => {
// //   event.dataTransfer.setDragImage(img, 100, 100);
// // });

document.addEventListener('dragstart', (evt) => {
  console.log('dragstart: ', evt)
  // draggable = evt.target;
  console.log(evt.target)
  evt.dataTransfer.setData("id", evt.target.id)
  evt.target.classList.add('drag');
  setTimeout(() => evt.target.classList.remove('drag'))

})


// document.addEventListener('drag', (evt) => {
//   console.log('drag: ', evt)
// })


document.addEventListener('dragend', (evt) => {
  console.log('dragend: ', evt)
})


rightlist.addEventListener('dragenter', (event)=> {
  console.log("dragenter")
  event.target.classList.add("drop")
})


// I need to stop the default behaviour on the recipient list :

rightlist.addEventListener('dragover', (event)=> {
  event.preventDefault()

})

leftlist.addEventListener('dragover', (event)=> {
  event.preventDefault()

})

rightlist.addEventListener('drop', (event)=> {
  console.log("drop")
  const id = event.dataTransfer.getData('id');
  const elem = document.querySelector(`#${id}`)
  event.target.appendChild(elem)
  event.target.classList.remove("drop")
  //event.target.appendChild(draggable)

})

rightlist.addEventListener('dragleave', (event)=> {
  event.target.classList.remove("drop")


})




// Lorsqu'on dépose une image sur le navigateur, automatiquemnet on ouvre un onglet.
// Il faut prevenir le comportement par défaut

window.addEventListener('drop', (event) => {
  event.preventDefault()
})

window.addEventListener('dragover', (event)=> {
  event.preventDefault()
})


leftlist.addEventListener('drop', (event)=> {
  console.log(event.dataTransfer)
  Array.from(event.dataTransfer.files).forEach((file, index) => {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      const image = new Image();
      image.id = 'file-' + index
      image.src = fileReader.result;
      leftlist.appendChild(image)
    }
  })

  event.preventDefault()

  console.log("drop")
  // event.target.appendChild(draggable)

})
