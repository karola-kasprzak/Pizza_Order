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

    function validateConsent() {
        const consentCheckbox = $("#consent");
        if (!consentCheckbox.is(":checked")) {
            $('label[for="consent"]').after(
                '<p class="text-danger small">Zgoda jest wymagana</p>'
            );
        }
    }

    function validateTextInput() {
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
    }

    function validatePizzaSelect() {
        const pizzaSelectValue = $("#pizza :selected").val();
        if (pizzaSelectValue === "0") {
            $("#pizza")
                .after('<p class="text-danger small">Wybierz rodzaj pizzy</p>')
                .attr("class", "form-control border-danger");
        }
    }

    //price display on pizza select
    $("#pizza").on("change", function () {
        $("#price").text(priceList[$("#pizza :selected").val()]);
    });

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

        // console.log(orderArr);
        // checking for empty strings and if consent checkbox is checked --- and creating order object if none found
        const foundEmpty = orderArr.findIndex((item) => item === "");
        const consentGiven = $("#consent").is(":checked");

        if (foundEmpty > -1 || !consentGiven) {
            return console.log("such error");
        } else {
            const order = new Order(orderArr);

            return console.log(order);
        }
    }

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

    function displayConfirm() {}

    const submitOrder = function () {
        $("#myModal").modal();
        //remove previous validation indication
        $(".text-danger").remove();
        $(".border-danger").attr("class", "form-control");

        //validation functions
        validateTextInput();
        validatePizzaSelect();
        validateConsent();

        //create JSON
        createOrder();
    };

    $("#submit").on("click", submitOrder);
});
