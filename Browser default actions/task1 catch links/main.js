const fieldSet = document.getElementById("contents");

fieldSet.onclick = function(event) {

    function handleLink() {
      let isLeaving = confirm("already leaving?");
      if (!isLeaving) return false;
    }

    let target = event.target.closest('a');

    if (target && contents.contains(target)) {
      return handleLink(target.getAttribute('href'));
    }
  };