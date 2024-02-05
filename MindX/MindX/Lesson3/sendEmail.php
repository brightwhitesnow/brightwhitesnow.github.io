<?php 
if(isset($_POST['name'])){
        $name = $_POST['name'];
        $message = $_POST['message'];
        $message = $_POST['phone'];
        $message = $_POST['email'];



        include('./phpmailer/class.smtp.php');
        include "./phpmailer/class.phpmailer.php"; 
        


        $nFrom = "Banana";    
        $mFrom = 'nguyenvancuong215@gmail.com'; 
        $mPass = 'Menu00d1';       
        $nTo = 'Nguyen Cuong'; 
        $mTo = 'bennguyen0808@gmail.com';   
        $mail             = new PHPMailer();
        $body             = '<strong>Họ và tên:  </strong>'.$name.'<br>'.'<strong>Message:  </strong>'.$message.'<br>'.'<strong>Phone Number:   </strong>'. $phone.'<br>'.'<strong>Email:   </strong>'.$email.;   // Noi dung email
        $title = 'Banana ';  
        $mail->IsSMTP();             
        $mail->CharSet  = "utf-8";
        $mail->SMTPDebug  = 0;  
        $mail->SMTPAuth   = true; 
        $mail->SMTPSecure = "ssl"; 
        $mail->Host       = "smtp.gmail.com";
        $mail->Port       = 465; 

        $mail->Username   = $mFrom;  
        $mail->Password   = $mPass;    
        $mail->SetFrom($mFrom, $nFrom);
        $mail->AddReplyTo($message, $name); 
        $mail->Subject    = $title;
        $mail->MsgHTML($body);
        $mail->AddAddress($mTo, $nTo);

if ($mail->send()) {
    $status = "success";
    $response = "Đã gửi email";
} else {
    $status = "error";
    $response = "Có lỗi: <br><br>" . $mail->ErrorInfo;
}

exit(json_encode(array("status" => $status, "response" => $response)));

}
?>
                           