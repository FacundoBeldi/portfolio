<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        $to = "facu.beldi@hotmail.com";
        $subject = "Nuevo mensaje de contacto";
        $headers = "From: $email";

        $body = "Nombre: $name\n";
        $body .= "Email: $email\n";
        $body .= "Mensaje: $message\n";

        // Envía el correo
        if (mail($to, $subject, $body, $headers)) {
            echo "El mensaje ha sido enviado!";
        } else {
            echo "Error al enviar el mensaje.";
        }
    }
