const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', ()=>{
    document.getElementById('form-body').style.display='block';
})

const loginData = document.querySelector('#btn-login');
loginData.addEventListener('click', ()=>{
    const emailData = document.querySelector('#mailId').value;
    const passData = document.querySelector('#pass').value;

    if(emailData===''){
        document.querySelector('#mailed').style.display="block";
    }else{
        document.querySelector('#mailed').style.display="none";
    }

    if(passData===''){
        document.querySelector('#passed').style.display="block";
    }else{
        document.querySelector('#passed').style.display="none";
    }

    if(emailData!='' && passData!=''){
        document.querySelector('#form-body').style.display="none";
        alert("You logged in Successfully")
    }
})