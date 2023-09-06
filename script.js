function love() {
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;
  if(first == "") {
    alert('enter name');

  }else if(first.length <= 2) {
    alert('min length 3')
  } else if(!isNaN(first)) {
    alert('number not allowed')
  }

  else  if(second == "") {
    alert('enter name');

  }else if(second.length <= 2) {
    alert('min length 3')
  } else if(!isNaN(second)) {
    alert('number not allowed')
  }

  else {
    var loveCal = Math.floor(Math.random()*100)+1;
    document.querySelector('img').setAttribute('src', 'https://source.unsplash.com/200x200/?love');
    document.querySelector('form').classList.add('smooth');
    document.querySelector('h1').classList.add('smooth');
    setTimeout(() => {
      document.querySelector('h1').classList.remove('smooth');
    }, 500);
    document.querySelector('h2').classList.add('smooth');
    setTimeout(() => {
      document.querySelector('h2').classList.remove('smooth');
    }, 500);
    document.querySelector('h1').classList.add('smooth1');
    document.querySelector('h2').classList.add('smooth1');
    document.querySelector('.th').classList.add('load');
    setTimeout(() => {
      document.querySelector('.th').classList.remove('load');
    }, 2000);
    if(loveCal > 90) {
      document.querySelector('h1').innerHTML = 'love score: '+loveCal+'% ';
      document.querySelector('h2').innerHTML = first + ' ' + second + ' are great couple'
    }
    else if (loveCal > 60 && loveCal < 90) {
      document.querySelector('h1').innerHTML = 'love score: '+loveCal+'% ';
      document.querySelector('h2').innerHTML = first + ' ' + second + ' are very good couple'
    }
    else {
      document.querySelector('h1').innerHTML = 'love score: '+loveCal+'% ';
      document.querySelector('h2').innerHTML = first + ' ' + second + ' are  good couple'
    }
  }
}