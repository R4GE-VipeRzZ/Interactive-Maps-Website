<?php

	$myfile = fopen("score/bestTime.txt", "w") or die("Unable to open file!");
	$txt = $_POST['time'];
	fwrite($myfile, $txt);
	fclose($myfile);
?>