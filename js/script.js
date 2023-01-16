$(function () {
  const getBirthday = () => {
    let date = new Date();
    let birthday = new Date(2004, 02, 03)

    let age = 0;

    if(date.getMonth() >= birthday.getMonth() && date.getDate() >= birthday.getDate()) {
      age ++;
      age = date.getFullYear() - birthday.getFullYear() ;
    }else {
      age = date.getFullYear() - birthday.getFullYear() - 1;
    }

    $('#age').text(age)
    $('#age2').text(age)
  }

  getBirthday();

  // Create typing functionality
})