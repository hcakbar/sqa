/**
 * Created by Akbar on 10/19/2015.
 */


function fields_validation(){
    var valid=true;
    var requiredmsg;
    var thankyoummsg;

    if(document.getElementById('first-name').value.length==0){
        valid=false;
        requiredmsg='Please enter your first name';
        document.getElementById('first-name-error').style.display='inline';
        document.getElementById('first-name-error').style.color='red';
        document.getElementById('first-name').focus();
    }
    else{
        document.getElementById('first-name-error').style.display='none';
    }
        if(document.getElementById('last-name').value.length==0){
            valid=false;
            requiredmsg='Please enter all required information.';
            document.getElementById('last-name-error').style.display='inline';
            document.getElementById('last-name-error').style.color='red';
            document.getElementById('last-name-error').focus();
        }
        else{
            thankyoummsg = 'Thank you for subscribing. We will sent you email with update. Please stay tuned.'
            document.getElementById('last-name-error').style.display='none';
        }
    if(valid==false){
        alert(requiredmsg);
    }
    if(valid==true) {
        alert(thankyoummsg);
    }
    return valid;

}