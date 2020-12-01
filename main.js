$(function () {
    const priceList = {
        margherita: 30,
        capriciosa: 32,
        prosciutto: 35,
        salami: 33,
        fruttiDiMare: 39,
    };

    function getAllTextInputIDs() {
        var idArr = [];
        $("input[type='text']").each(function () {
            idArr.push($(this).attr("id"));
        });
        return idArr;
    }

    function displayPrompt() {
        //remove previous validation indication
        (function clearValidation() {
            $(".text-danger").remove();
            $(".border-danger").attr("class", "form-control");
        })();
        //prompt checking consent checkbox
        (function checkConsent() {
            const consentCheckbox = $("#consent");
            if (!consentCheckbox.is(":checked")) {
                $('label[for="consent"]').after(
                    '<p class="text-danger small">Zgoda jest wymagana</p>'
                );
            }
        })();
        //prompt fill all input fields
        (function checkTextInput() {
            const textInputIDs = getAllTextInputIDs();
            textInputIDs.forEach((item) => {
                if ($(`#${item}`).val() === "") {
                    $(`#${item}`)
                        .after(
                            '<p class="text-danger small">To pole jest wymagane</p>'
                        )
                        .attr("class", "form-control border-danger");
                }
            });
        })();
        //prompt pizza selection
        (function checkPizzaSelect() {
            const pizzaSelectValue = $("#pizza :selected").val();
            if (pizzaSelectValue === "0") {
                $("#pizza")
                    .after(
                        '<p class="text-danger small">Wybierz rodzaj pizzy</p>'
                    )
                    .attr("class", "form-control border-danger");
            }
        })();
    }

    //price display on pizza select
    $("#pizza").on("change", function () {
        $("#price").text(priceList[$("#pizza :selected").val()]);
    });

    //validate if all fields are filled and logs JSON if they are
    function createOrder() {
        let orderArr = [];
        //adding values from text input fields
        let idArr = getAllTextInputIDs();
        idArr.forEach((item) => {
            orderArr.push($(`#${item}`).val());
        });
        //adding pizza value
        const pizza = $("#pizza :selected").val();
        if (pizza === "0") {
            orderArr.push("");
        } else {
            orderArr.push(pizza);
        }
        //adding toppings selection bools
        orderArr.push($("#top-tomato").is(":checked"));
        orderArr.push($("#top-garlic").is(":checked"));

        // checking for empty strings and if consent checkbox is checked --- and creating order object if none found
        const foundEmpty = orderArr.findIndex((item) => item === "");
        const consentGiven = $("#consent").is(":checked");

        if (foundEmpty > -1 || !consentGiven) {
            return false;
        } else {
            const order = new Order(orderArr);
            console.log(order);
            return true;
        }
    }

    //constructor function for order JSON
    function Order(arr) {
        this.name = arr[0];
        this.phone = arr[1];
        this.addres_street = arr[2];
        this.addres_house = arr[3];
        this.addres_code = arr[4];
        this.addres_city = arr[5];
        this.pizza = arr[6];
        this.tomato_sauce = arr[7];
        this.garlic_sauce = arr[8];
    }

    //display a modal on submit success
    function displayConfirm() {
        $("#myModal").modal();
    }

    //clear form on submit success
    function clearForm() {
        $("input").each(function () {
            $(this).val("");
        });
        $("select").val("0");
        $("input:checkbox").each(function () {
            $(this).prop("checked", false);
        });
        $("#price").text("0");
    }

    const submitOrder = function () {
        //visual cues for user to fill all required fields
        displayPrompt();

        //verify order and display success
        if (createOrder()) {
            displayConfirm();
            clearForm();
        }
    };

    $("#submit").on("click", submitOrder);
});
