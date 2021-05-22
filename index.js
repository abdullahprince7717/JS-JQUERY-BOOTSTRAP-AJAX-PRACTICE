$(function () {

  APIGetCall();


  $("#main").on("click", "#delete-btn", handleDelete);



});

function APIGetCall() {

  $.ajax({

    url: "https://usman-recipes.herokuapp.com/api/recipes/",
    method: "GET",
    success: function (response) {

      // var htmlElement = $("#main").html();

      // console.log(response);
      // console.log(htmlElement);
      // console.log("sdfsfbsjf")
      // console.log(typeof (response));

      // var objToString = JSON.stringify(response);
      // console.log(typeof (objToString));
      // console.log(response.title)

      var content = $("#main");
      content.empty();
      content.append("<div><h3>Title</h3></div>");



      for (var index = 0; index < response.length; index++) {
        var rec = response[index];
        content.append(`<div class = "abc" data-id = ${rec._id} ><h3>Title of Content : ${rec._title} </h3><button id = delete-btn   type="button" class="btn btn-primary"> Delete </button></div>`)

      }


    }



  });


}

function handleDelete() {

  console.log("handling delete function");

  var parent = $(this).closest(".abc");
  let id = parent.attr("data-id")
  console.log(id);
  $.ajax({
    type: "DELETE",
    url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
    success: function () {
      APIGetCall();

    }
  });

}