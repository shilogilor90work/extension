PAGE_LOAD = 5500;
$(document).ready(function() {
    setTimeout(function () {
        msg_iframe = document.querySelector("[name=\"radWinPopupBlocked_Msg\"]");
        if (msg_iframe) {
            first_click =  msg_iframe.contentDocument.querySelector("#ctl00_idMasterContentPlaceHolder_btnClose");
            if (first_click) {
                first_click.click();
            }
        }
        input_user = document.querySelector("#ctl00_idMasterContentPlaceHolder_IdentityNumber_text");
        if (input_user) {
            input_user.value = "302537394";
        }
        input_psw = document.querySelector("#ctl00_idMasterContentPlaceHolder_SecretCode_text");
        if (input_psw) {
            input_psw.value = "9201";
        }
        setTimeout(function () {
            input_click = document.querySelector("#ctl00_idMasterContentPlaceHolder_idLogin");
            if (input_click) {
                console.log(input_user.value);
                console.log(input_psw.value);
                input_click.click();
            }
            setTimeout(function () {
                msg_iframe = document.querySelector("[name=\"idSysMsg\"]");
                if (msg_iframe) {
                    console.log(input_user.value);
                    console.log(input_psw.value);
                    first_click =  msg_iframe.contentDocument.querySelector("#ctl00_idMasterContentPlaceHolder_idOk");
                    if (first_click) {
                        first_click.click();
                        input_user = document.querySelector("#ctl00_idMasterContentPlaceHolder_IdentityNumber_text");
                        setTimeout(function () {
                            if (input_user) {
                                input_user.value = "302537394";
                            }
                            input_psw = document.querySelector("#ctl00_idMasterContentPlaceHolder_SecretCode_text");
                            if (input_psw) {
                                input_psw.value = "9201";
                            }
                            setTimeout(function () {
                                input_click.click();
                            }, 1000);
                        }, 1000);
                    }
                }
            }, 4000);
        }, 3000);
    }, PAGE_LOAD);
});
