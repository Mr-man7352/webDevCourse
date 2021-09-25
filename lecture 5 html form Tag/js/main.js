let myform
function myformSubmit() {
    myform = document.getElementById("myForm")
    console.log(myform);
    let name = myform.name.value
    let phone = myform.phone.value
    let email = myform.email.value
    let password = myform.password.value
    let dateOfBirth = myform.dateOfBirth.value
    let fav1 = myform.fav1.value
    let fav2 = myform.fav2.value
    let color = myform.color.value
    let comments = myform.comments.value
    let img = myform.img.value
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(password);
    console.log(dateOfBirth);
    console.log(fav1);
    console.log(fav2);
    console.log(color);
    console.log(comments);
    console.log(img);

}