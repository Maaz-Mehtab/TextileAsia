<?php


$conn = mysqli_connect("localhost","maaz_TextileAsia","asdf@2000","maaz_TextileAsiaApp");

//local host mein host ayega..isey filhal localhost rhene dena,
//2nd parameter mein database ka user ata... isey root likha abi filhaal
// 3rd mein database ka password ata.... isey khali chorna filhal
//4th tmhre db ka naam hai....

if (!$conn) {
    echo("Connection failed: " . mysqli_connect_error());
}
else {
 //echo("result :");
}

// yeh if is for checking connection for db.....

?>