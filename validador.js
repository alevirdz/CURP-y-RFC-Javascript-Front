console.log("listo")
$.validator.setDefaults({
    submitHandler: function() {
        alert("OK");
    }
});
$(document).ready(function () {
    document.getElementById("form").reset();
    $('#recaptcha').click(function() {
        $('#enviar').prop('disabled', false);
        $(this).prop('disabled', true);
    });
    $('#enviar').click(function() {
        $('.is-invalid').removeClass('is-invalid');
        $('.invalid-feedback').remove();
        $("#form").validate();
    });
    $("#form").validate({
        rules: {
            letters: {
                required: true,
                letters: true
            },
            digits: {
                required: true,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            url: {
                required: true,
                url: true
            },
            date: {
                required: true,
                date: true
            },
            password: {
                required: true,
                rangelength: [6, 14]
            },
            confirm_password: {
                required: true,
                rangelength: [6, 14],
                equalTo: "#password"
            },
            file: {
                required: true,
                extension: "jpg|png"
            },
            curp: {
                required: true,
                curp: true
            },
            rfc: {
                required: true,
                rfc: true
            },
            curprfc: {
                required: true,
                curprfc: true
            },
            agree: "required"
        },
        messages: {
            letters: {
                required: "Este campo es requerido",
                letters: "Solo se aceptan letras"
            },
            digits: {
                required: "Este campo es requerido",
                digits: "Solo se aceptan dígitos"
            },
            email: {
                required: "Este campo es requerido",
                email: "El formato no es válido"
            },
            url: {
                required: "Este campo es requerido",
                url: "El formato no es válido"
            },
            date: {
                required: "Este campo es requerido",
                date: "El formato no es válido"
            },
            password: {
                required: "Este campo es requerido",
                rangelength: "El password debe tener de 6 a 14 caracteres"
            },
            confirm_password: {
                required: "Este campo es requerido",
                rangelength: "El password debe tener de 6 a 14 caracteres",
                equalTo: "El password no coincide"
            },
            file: {
                required: "Este campo es requerido",
                extension: "El formato no es válido"
            },
            curp: {
                required: "Este campo es requerido",
                curp: "El CURP ingresado no es válido"
            },
            rfc: {
                required: "Este campo es requerido",
                curp: "El RFC ingresado no es válido"
            },
            curprfc: {
                required: "Este campo es requerido",
                curprfc: "El CURP o RFC ingresado no es válido"
            },
            agree: "Por favor, lee la documentación"
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next( "label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });
});








