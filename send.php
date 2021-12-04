<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма
/* $title = "Новое обращение Best Tour Plan"; */
// $body = "
// <h2>Новое обращение</h2>
// <b>Имя:</b> $name<br>
// <b>Почта:</b> $phone<br><br>
// <b>Сообщение:</b><br>$message<br>
// <b>Адрес электронной почты для подключения рассылки:</b><br>$email<br>
// ";

if(isset($_POST['email'])){
    $title = "Новое обращение для рассылки Best Tour Plan";
    // если есть что-то в $_POST['email']
    $body = "<b>Адрес электронной почты для подключения рассылки:</b> $email<br>";
} else {
    $title = "Новое обращение Best Tour Plan";
    // если нет, то отправляем все остальное
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Почта:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message<br>
    ";
}
echo $body;
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'bestourplan@gmail.com'; // Логин на почте
    $mail->Password   = 'bestourplaN2021'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('bestourplan@gmail.com', 'Анастасия Гордеева'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('patronum97@gmail.com');  
     // Ещё один, если нужен

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body; 


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
/* echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]); */
header('Location: thankyou.html');