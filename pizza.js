function validatePizzaSelect() {
    const pizzaSelectValue = $("#pizza :selected").val();
    console.log(
        "🚀 ~ file: main.js ~ line 12 ~ validatePizzaSelect ~ pizzaSelectValue",
        pizzaSelectValue
    );

    if (pizzaSelectValue === "0") {
        $("#pizza")
            .after('<p class="text-danger small">Wybierz rodzaj pizzy</p>')
            .attr("class", "form-control border-danger");
    } else {
        console.log(pizzaSelectValue);
    }
}
// $("#pizza").on("change", validatePizzaSelect());

// $("#pizza").on("change", function () {
//     let var1 = $("#pizza :selected").text(); // The text content of the selected option

//     let var2 = $("#pizza :selected").val();

//     if (var2 === "0") {
//         $("#pizza")
//             .after('<p class="text-danger small">Wybierz rodzaj pizzy</p>')
//             .attr("class", "form-control border-danger");
//     } else {
//         console.log(var2);
//     }
// });
