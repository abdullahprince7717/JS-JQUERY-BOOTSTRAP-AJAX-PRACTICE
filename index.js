// console.log("Starting");

// function handleAddNewTodo() {
//   console.log("Handling Add New Todo Button");
// }

// function doBindings() {
//   console.log("Bindings");
//   var btn = document.getElementById("btnAdd");
//   btn.onclick = handleAddNewTodo;
// }
// window.onload = doBindings;
// console.log("Finished");
// // doBindings();
// // will not do bindings as the document is yet not loaded

// $(function () {
//   $("#load").click(function () {
//     $.ajax({
//       url: "https://jsonplaceholder.typicode.com/posts/1",
//       success: function (response) {

//         $("#result").empty();
//         $("#result").append(response);

//       }
//     });
//   });
// });

// function userid_validation(uid,mx,my)
//   {
//   var uid_len = uid.value.length;
//   if (uid_len == 0 || uid_len >= my || uid_len < mx)
//   {
//   alert("User Id should not be empty / length be between "+mx+" to "+my);
//   uid.focus();
//   return false;
//   }
//   return true;
// }

// $(function () {

//   $(".btn").click(function () {

//     $.get("https://jsonplaceholder.typicode.com/posts/1", function (data) {

//       console.log(data);
//       console.log("id : " + data.id + " /n................title: " + data.title + "............ body : " + data.body + " .........userId:" + data.userId);
//       $(".ptag").append(data);

//     });

//   })
// });

$(function () {

  $(".add-btn").click(function () {

    $.ajax({
      type: "GET",
      url: "https://usman-recipes.herokuapp.com/api/products",
      data: "data",
      dataType: "text",
      success: function (data) {

        var responseData = data;
        for (var i = 0; i < 3; i++)

          $(".main-div").append("<div class= response >" +  + "<button class= delete > DELETE </button></div>");
      }

    });

  });


})