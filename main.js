$(function () {
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

    const submitOrder = function () {
        //remove previous validation indication
        $(".text-danger").remove();
        $(".border-danger").attr("class", "form-control");

        //validation functions
        validateTextInput();
        // validatePizzaSelect();
        validateConsent();
    };

    $("#submit").on("click", submitOrder);
});
