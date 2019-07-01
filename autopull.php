<?php
$output = shell_exec("cd /home/www/staraise; git pull 2<&1");
echo "<pre>$output</pre>";