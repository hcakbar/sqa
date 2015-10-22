/**
 * Created by Akbar on 10/19/2015.
 */


function fields_validation(){
    var valid=true;
    var msg;

    if(document.getElementById('first-name').value.length==0){
        valid=false;
        msg='Please enter your first name';
        document.getElementById('first-name-error').style.display='inline';
        document.getElementById('first-name-error').style.color='red';
        document.getElementById('first-name').focus();
    }
    else{
        document.getElementById('first-name-error').style.display='none';
    }
        if(document.getElementById('last-name').value.length==0){
            valid=false;
            msg='Please enter your last name';
            document.getElementById('last-name-error').style.display='inline';
            document.getElementById('last-name-error').style.color='red';
            document.getElementById('last-name-error').focus();
        }
        else{
            document.getElementById('last-name-error').style.display='none';
        }
    if(valid==false){
        alert(msg);
    }
    return valid;

}