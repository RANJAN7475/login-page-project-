let signupbtn=document.querySelector('.signupbtn');
let signinbtn=document.querySelector('.signinbtn');
let namefield=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');

signinbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In'
    signupbtn.classList.add('disable')
    signinbtn.classList.remove('disable')
    underline.style.transform = 'translateX(35px)';
});
signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight ='100%';
    signinbtn.classList.add('disable')
     signupbtn.classList.remove('disable')
     title.innerHTML = 'SignUp'
     underline.style.transform = 'translateX(-10px)';
});

