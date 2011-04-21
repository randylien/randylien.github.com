<?php

	if(isset($_GET["user_timeline"])) {
		if(isset($_GET["count"])) {
			echo file_get_contents("http://twitter.com/statuses/user_timeline/{$_GET["user_timeline"]}.json?count={$_GET["count"]}");
		}
		else {
			echo file_get_contents("http://twitter.com/statuses/user_timeline/{$_GET["user_timeline"]}.json");
		}
	}

?>