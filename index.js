let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let state = document.getElementById("state");
let city = document.getElementById("city");
let address = document.getElementById("address");
let viweData = document.getElementById("viweData");


let isEdit = false;

let getData = () => {
  let Data = JSON.parse(localStorage.getItem('form'));
  if (Data) {
    return Data;
  }
  else {
    return [];
  }
}

let addData = getData();

let fromsub = () => {
  event.preventDefault();

  if (isEdit) {
    let data = [...addData];

  } else {

    let object = {
      id: Math.floor((Math.random() * 1000)),
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      password: password.value,
      city: city.value,
      address: address.value,
      state: state.value,
    }

    addData.push(object);

    console.log("obj", object);
    console.log("addData", addData);


  }

  localStorage.setItem("form", JSON.stringify(addData));
  fname.value = '';
  lname.value = '';
  email.value = '';
  password.value = '';
  city.value = '';
  address.value = '';
  state.value = '';

  dataShow();

}
let fromEdit = () => {


  let data = [...addData];


  let singlerec = data.filter((d) => {
    return d.id == id;
  });

  console.log("Edit id", singlerec[0]);
  fname.value = singlerec[0].fname;
  lname.value = singlerec[0].lname;
  email.value = singlerec[0].email;
  password.value = singlerec[0].password;
  city.value = singlerec[0].city;
  address.value = singlerec[0].address;
  state.value = singlerec[0].state;


}
const deletdeta = (id) => {
  let data = [...adds];

  let deletdeta = data.filter((del) => {
    return del.id !== id;
  });
  localStorage.setItem('studentsdata', JSON.stringify(deletdeta));
  adds = deletdeta;
  dataDisplay();
};
const dataShow = () => {

  viweData.innerHTML = "";

  addData.forEach((ele) => {

    viweData.innerHTML +=
      `<tr>
                              <td>${ele.id}</td>
                              <td>${ele.fname}</td>
                                <td>${ele.lname}</td>
                                <td>${ele.email}</td>
                                <td>${ele.password}</td>
                                <td>${ele.address}</td>
                                <td>${ele.address}</td>
                                <td>
                                <button class="btn btn-primary" onclick="return fromEdit()" >Edit</button> 
                                
                                ||
                                <button class="btn" style="background-color: red ;color:white">Delet</button>
                                </td>
                 </tr>`
  });
}

// if (fname.value == '') {
//   document.getElementById("inerr").innerHTML = ("enter your name");
// } else {
//   document.getElementById("inerr").innerHTML = ('');
// }
// if (password.value.length >= 6) {
//   document.getElementById("passin").innerHTML = ('');
// }
// else if (password.value.length == '') {
//   document.getElementById("passin").innerHTML = ("enter digit");
// }
// else {
//   document.getElementById("passin").innerHTML = ("enter password length six digit");
// }
// if (email.value == '') {
//   document.getElementById("emailin").innerHTML = ("enter email");
// } else {
//   document.getElementById("emailin").innerHTML = ("");
// }