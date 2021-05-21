$(function () {

  var deleteBtn = $("#delete-btn");
  deleteBtn.click(function () {

    $(this).closest("h3").remove();

  });


  APIGetCall();
  // handleDelete();

});

function APIGetCall() {

  $.ajax({

    url: "https://jsonplaceholder.typicode.com/posts/",
    method: "GET",
    success: function (response) {

      var htmlElement = $("#main").html();

      console.log(response);
      console.log(htmlElement);
      console.log("sdfsfbsjf")
      console.log(typeof (response));

      var objToString = JSON.stringify(response);
      console.log(typeof (objToString));
      console.log(response.title)

      var content = $("#main");
      content.empty();
      content.append("<div><h3>Title</h3></div>");



      for (var index = 0; index < response.length; index++) {
        var rec = response[index];
        content.append(`<div><h3>Title of Content : ${rec.title} </h3><button id = delete-btn type="button" class="btn btn-primary"> Delete </button></div>`)

      }


    }



  });


}

// function handleDelete() {

//   deleteBtn.click(function () {

//     $(this).closest("h3").remove();

//   });

// }