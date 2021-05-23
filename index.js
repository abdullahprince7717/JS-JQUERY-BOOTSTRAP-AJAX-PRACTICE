$(function () {

  APIGetCall();


  $("#main").on("click", "#delete-btn", handleDelete);
  $("#add-recipe-btn").click(addRecipe);
  $("#main").on("click", "#edit-btn", edit);

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
      // content.append("<div><h3>Title</h3></div>");


      for (var index = 0; index < response.length; index++) {
        var rec = response[index];
        content.append(`<div class = "abc" data-id = ${rec._id} ><h3>Title of Content : ${rec.title} </h3> <button id = edit-btn   type="button" class="btn btn-success pr-2" data-toggle="modal" data-target="#modelId" > Edit </button> <button id = delete-btn   type="button" class="btn btn-primary"> Delete </button></div>`)

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

function addRecipe() {

  console.log("add button clicked!!!");

  var title = $("#recipe-title").val();
  var details = $("#recipe-details").val();

  if ((title || details) == "") {

    alertOnNull();
    console.log("Write again!!")

  } else {

    console.log("recipe title : " + title);
    console.log("recipe details : " + details);

    $.ajax({
      type: "POST",
      url: "https://usman-recipes.herokuapp.com/api/recipes/",
      data: {
        title: title,
        body: details
      },
      dataType: "JSON",
      success: function (response) {
        APIGetCall();

      }
    });

    console.log("Recipe added successfully");

  }


}

function alertOnNull() {

  $("#alert").append(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>"Title and details cannot be empty"</strong> 
</div>`);



}

function edit() {

  console.log("handling Edit function");

  var title = $("#edit-title").val();
  var details = $("#edit-details").val();

  var parent = $(this).closest(".abc");
  let id = parent.attr("data-id")
  console.log(id);

  $.ajax({
    type: "PUT",
    url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
    data: {
      title: title,
      body: details
    },
    dataType: "JSON",
    success: function (response) {
      APIGetCall();

    }
  });

  console.log("Done Editing");

}