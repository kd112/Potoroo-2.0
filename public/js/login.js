$(function(){
    $('#login-form').submit(function(e){

        var error = '';
        if ($('#inputUsername').val() == '' || $('#inputPassword').val()==''){
            error = 'Please fill all the input fields'
        } else if ($('#inputUsername').val() == '' && $('#inputPassword').val() == ''){
            error = 'Please enter a UserName and Password'
        } else if ($('#inputUsername').val() == '' && $('#inputPassword').val() != ''){
            error = 'Please enter a UserName'
        } else if ($('#inputUsername').val() != '' && $('#inputPassword').val() == '') {
            error = 'Please enter a Password'
        }

        if (error){
            alert(error)
        }
        $.post('/authenticate',{
            username: $('#inputUsername').val(),
            password: $('#inputPassword').val()
        }).done(function(response){
            console.log("here")
            console.log(response.body)
        })
    })
    
})