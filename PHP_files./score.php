<?php

	$myfile = fopen("score/highScore.txt", "w") or die("Unable to open file!");
	$txt = $_POST['score'];
	fwrite($myfile, $txt);
	fclose($myfile);
?>