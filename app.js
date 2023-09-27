let inputValue = document.getElementById('floatingInput');
let addUser = document.getElementById('add');
let pass = document.getElementById('floatingPassword');


if(inputValue.value != ''){
    console.log('working');
    // inputValue.classList.add('is-valid');
    console.log(inputValue.value);
    
}
else{
    console.log('condition not working')
}

addUser.addEventListener('click', () => {
    if (inputValue.value == "" || pass.value == "") {
        // console.log('ok report')
        inputValue.classList.add('is-invalid');
        pass.classList.add('is-invalid');
        inputValue.style.borderBottom = "2px solid #e87c03"
        pass.style.borderBottom = "2px solid #e87c03"
       
    
    }
    else {
        console.log('something wrong')
    }
});



// console.log(inputValue.value);