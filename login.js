$(function() {
 
    Parse.$ = jQuery;
    Parse.serverURL="https://pg-app-aqvui3yjmq9krculrebyyy23uxa0dh.scalabl.cloud/1/";
    //ApplicationID, JavaScriptKey 
    Parse.initialize("7atUTo26qRIaISWGbXlcF3LojhsHcbm5PQhVkON5", "t30lyjf1h0KDi1DLah1tLyd1O5HhzQjms5sPmnPN");
    
    $('.form-signin').on('submit', function(e) {
        alert("hi");
        // Prevent Default Submit Event
        e.preventDefault();
     
        // Get data from the form and put them into variables
        var data = $(this).serializeArray(),
            username = data[0].value,
            password = data[1].value;
     
        // Call Parse Login function with those variables
        Parse.User.logIn(username, password, {
            // If the username and password matches
            success: function(user) {
                window.location.href="dialog_menu.html";
                //alert('Welcome!');
            },
            // If there is an error
            error: function(user, error) {
                console.log(error);
            }
        });
    });
});