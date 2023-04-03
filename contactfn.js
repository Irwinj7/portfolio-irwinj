let form = document.getElementById(`form`)
form.addEventListener(`submit`,(event) => {
    event.preventDefault()
    let name = document.getElementById(`name`).value
    let email = document.getElementById(`email`).value
    let phone = document.getElementById(`phone`).value
    let message = document.getElementById(`message`).value
    let contacForm = document.getElementById(`contact-form`)
    let qDiv = document.getElementById(`questions-div`)
    
    console.log(typeof name)
    if (isNaN(name)){
        console.log(name,email,phone,message)
        contacForm.setAttribute(`class`, `hidden`)
        alert (`Thank you ${name}, IJ Designs will reach out to you shortly!`)
        let thankYou = document.createElement(`h1`)
        thankYou.textContent = `THANK YOU :)!`
        thankYou.setAttribute(`class`, `thank-you`)
        qDiv.append(thankYou)
    } else{
        alert (`Name cannot be ${name}`)
        let errorMes = document.createElement(`h1`)
        errorMes.textContent = `Please try again!`
        errorMes.setAttribute(`class`, `error-mess`)
        form.append(errorMes)
    }
})
