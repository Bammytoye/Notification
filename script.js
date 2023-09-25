let showBox1 = document.getElementById('showBox1')

let successMsg = '<i class="fa-sharp fa-solid fa-user-check fa-flip" style= "color:#008000;"></i> Successfully submitted'
let errorMsg = '<i class="fa-sharp fa-solid fa-user-xmark fa-spin-pulse" style="color: #f00000;"></i>Please, fix the error!'
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation fa-spin" style= "color: #ffa500;"></i>Invalid input, check again, please!!!'

function showBox (msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML = msg
    showBox1.appendChild(toast)

    if (msg.includes('error')){
        toast.classList.add('error')
    }
    if (msg.includes('Invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove()
    }, 5000)
}