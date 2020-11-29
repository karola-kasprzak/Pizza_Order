$(function () {
    function validateInput() {
        console.log("hej");
        let inputArr = [];

        function checkInput() {
            if (!$(this).val()) {
                alert("wypelnij wszystkie pola");
                return;
            }
            return inputArr.push($(this).val());
        }

        $("input[type='text']").each(checkInput);

        console.log(inputArr);
    }

    $("#submit").click(validateInput);
});
