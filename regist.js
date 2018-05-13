$(function () {

    Parse.$ = jQuery;
    Parse.$ = jQuery;
    Parse.serverURL = 'https://pg-app-j4xv4kxsdxtd7yjvhgq4wbcdfkdv9t.scalabl.cloud/1/';
    //ApplicationID, JavaScriptKey 
    Parse.initialize("eLiXKbRaZcldXXOBjtdZh8VuBoPVj3Qg8P69k3cW", "1fe5dhk4T0YgKBCEHe9tN5MhkjQ33cgPHXoW8Pkf");


    $('.form-signin').on('submit', function (e) {
        alert("hello");
        // Prevent Default Submit Event
        e.preventDefault();

        // Get data from the form and put them into variables
        var data = $(this).serializeArray(),
            username = data[0].value,
            password = data[1].value,
            confirmpass = data[2].value;

        // Call Parse Login function with those variables
        var Users = Parse.Object.extend("User");
        var user = new Users();

        if (confirmpass == password) {
            user.set("username", username);
            user.set("password", password);
            user.save(null, {
                success: function (user) {
                    alert("Успешная регистрация")
                },
                error: function (user, error) {
                    alert("Логин уже зарегистрирован")
                }
            })
        }
    });
});