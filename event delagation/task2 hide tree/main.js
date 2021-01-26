const tree = document.getElementById("tree");
 tree.addEventListener("click", toggleHide) ;
 
 
 function toggleHide(event) {

  if (event.target.tagName != 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
}