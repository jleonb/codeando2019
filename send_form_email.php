<?php

// $email;$comment;$captcha;
// if(isset($_POST['nombre'])){
//   $nombre=$_POST['nombre'];
// }if(isset($_POST['empresa'])){
//   $empresa=$_POST['empresa'];
// }if(isset($_POST['telefono'])){
//   $telefono=$_POST['telefono'];
// }if(isset($_POST['comments'])){
//   $comments=$_POST['comments'];
// }if(isset($_POST['g-recaptcha-response'])){
//   $captcha=$_POST['g-recaptcha-response'];
// }
// if(!$captcha){
//   echo 'Errores en el formulario, por favor vuelva e intentelo denuevo.';
//   exit;
// }
// $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcRfhIUAAAAANpi8OEDv0gD6BPzjT-JD91UOU8C&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);



if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "cursos@codeando.cl";
    // $email_to = "jaime.leon.betancourt@gmail.com";
    $email_subject = "CODEANDO";

    function died($error) {
        // your error code can go here
        echo "Lo sentimos, hemos encontrado un error. ";
        echo $error."<br /><br />";
        die();
    }



    $nombre = $_POST['nombre']; // required
    $email = $_POST['email']; //x required
    $telefono = $_POST['telefono']; // required    
    $asunto = $_POST['course']; // required
    $comments = $_POST['comm']; // required


    $email_message = "Los datos del interesado son:\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Nombre: ".clean_string($nombre)."\n";
	$email_message .= "Teléfono: ".clean_string($telefono)."\n";
    $email_message .= "Correo: ".clean_string($email)."\n";
    $email_message .= "Curso: ".clean_string($asunto)."\n\n";
    $email_message .= "Comentario: ".clean_string($comments)."\n";

// create email headers
$headers = 'From: '.$email_to."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
sleep(2);
echo "<meta http-equiv='refresh' content=\"0; url=./gracias.html\">";
?>

<?php
}
?>