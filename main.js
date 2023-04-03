let form = document.getElementById(`form`)
form.addEventListener(`submit`,(event) => {
    event.preventDefault()
    let name = document.getElementById(`name`).value
    let email = document.getElementById(`email`).value
    let phone = document.getElementById(`phone`).value
    let message = document.getElementById(`message`).value
    console.log(typeof name)
    if (isNaN(name)){
        console.log(name,email,phone,message)
        let contacForm = document.getElementById(`contact-form`)
        contacForm.setAttribute(`class`, `hidden`)
        alert (`Thank you ${name}, IJ Designs will reach out to you shortly!`)
        let thankYou = document.createElement(`h1`)
        thankYou.textContent = `THANK YOU :)!`
        thankYou.setAttribute(`class`, `thank-you`)
        let qDiv = document.getElementById(`questions-div`)
        qDiv.append(thankYou)
    } else{
        alert (`Name cannot be ${name}`)
    }
})



// function contactMessage (form){
//     let inputValue = form.inputbox.value
//     alert (`you typed + ${inputValue}`)
// }







// fucntion to send email

// let userEmail = document.getElementById("email")

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : `${userEmail}`,
//         Subject : `Contact Form `,
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }