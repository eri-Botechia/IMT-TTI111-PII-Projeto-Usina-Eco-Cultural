
const renderTemplateValidation = (data2Validation, validatorOption)=>{
    const {id:inputId, label, placeholder, fb:feedbackMessage} = data2Validation
    const {validationClass, message:feedbackMessage}= validationOption
    return(`       
            <div class="row">
                <label for="${inputId}" class="col-4 form-label">${label}</label>
                <input type="text" id={inputId}  class="col-8 form-control ${validationClass}" placeholder="${placeholder}" name="${inputId}">
                <div class="${validationClass} col-12">${feedbackMessage} ${validationTag}</div>
            </div>`
    )
}


const CONTACT_FORM_DATA = [{
 
},
{

},
{

}
]
