import throttle from "lodash/throttle";
const form = document.querySelector('.feedback-form');
 let dataForm = {"email":"","message":""};
function IsStorageEmpty() {
    if (localStorage.getItem("feedback-form-state") !== null){
    let dataFormObj = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.email.value = dataFormObj.email;
    form.message.value = dataFormObj.message;
    dataForm ={"email": dataFormObj.email,"message": dataFormObj.email}
    };
};

IsStorageEmpty();
  
form.addEventListener('input', throttle((evt)=>{
    if (evt.target === form.email){
        dataForm.email = evt.target.value;
    }else if(evt.target === form.message){
        dataForm.message = evt.target.value;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm))
}, 500));

form.addEventListener('submit', onSubmit)
function onSubmit(evt) {
    if (form.email.value !== "" && form.message.value !== "") {
        evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(dataForm);
    dataForm = {"email":"","message":""}
    return dataForm;
    }else{
        alert("Bсе поля должны быть заполнены!")}
}