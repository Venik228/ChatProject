$(function () {

    Parse.$ = jQuery;
    Parse.serverURL = "https://pg-app-aqvui3yjmq9krculrebyyy23uxa0dh.scalabl.cloud/1/";
    //ApplicationID, JavaScriptKey 
    Parse.initialize("7atUTo26qRIaISWGbXlcF3LojhsHcbm5PQhVkON5", "t30lyjf1h0KDi1DLah1tLyd1O5HhzQjms5sPmnPN");

    // $('.form-show').on('submit', function (e) {
    //     e.preventDefault();

        Parse.User.enableUnsafeCurrentUser()
        var currentUser = Parse.User.current();

        // var data = $(this).serializeArray(),
        //     adress = data[1].value,
        //     messa = data[0].value;

        console.log(typeof (currentUser.get("username")))

        //
        var Dialogs = Parse.Object.extend("Dialogs");
        var dialog = new Dialogs();


        var query = new Parse.Query(Dialogs);
        query.equalTo("Sender", currentUser.get("username") );
        query.find({
            success: function (UserDialogs) {
                for (var i = 0; i < UserDialogs.length; i++) {
                    var object = UserDialogs[i];

                    var para = document.createElement("P");
                    var t = document.createTextNode(object.get("Adresse") + ' - ' + object.get('LastMessage'));
                    para.appendChild(t);
                    document.getElementById("username").appendChild(para);

                }
            }
        });

        //     if (message = "")
        //     {
        //         alert("Пустое сообщение")
        //     }

        //     //Вывод сообщений 





        //     else{
        //     //distinc по юзеру.
        //     chat.set("Text",messa);
        //     chat.set("Sender", currentUser.get("username"));
        //     chat.set("Adresse", adress)
        //     chat.set("Chat", currentUser.get("username") + " + " + adress)
        //     chat.save(null,{
        //         success: function(chat){
        //             var query = new Parse.Query(Chat);
        //             query.containedIn("Chat",[currentUser.get("username") + " + " + adress, adress + " + " + currentUser.get("username")]);
        //             query.find({
        //                 success: function (usersPosts) {
        //                     for (var i = 0; i < usersPosts.length; i++) {
        //                         var object = usersPosts[i];

        //                         var para = document.createElement("P");
        //                         var t = document.createTextNode(object.get("Sender") + ' - ' + object.get('Text'));
        //                         para.appendChild(t);
        //                         document.getElementById("username").appendChild(para);

        //                     }
        //                 }
        //             })
        //         },
        //         error: function(user, error) {
        //             console.log("fk");
        //         }
        //     })

        // }    
        //console.log(Parse.User.current().get("username"))
        //user = Parse.User.current();

        document.getElementById("username").innerText = Parse.User.current().get("username")
        //alert(user);
    });
