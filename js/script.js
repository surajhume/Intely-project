function notification() {
    let x = document.getElementById('notificationVisibility');
    if (x.style.display == 'none') {
      x.style.display = 'block';
      // document.getElementById('no-blur').classList.remove("is-not-blur");    //bug
      // document.getElementById('no-blur').classList.add("is-blur");
    } else {
      x.style.display = 'none';
      // document.getElementById('no-blur').classList.remove("is-blur");       //bug
      // document.getElementById('no-blur').classList.add("is-not-blur");
    }
}

// added just to fix bug of display flex 

function setup(){
  document.getElementById('notificationVisibility').style.display = 'none';
}