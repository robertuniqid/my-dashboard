<?php

require_once('Links.php');
require_once('Dashboard.php');

echo json_encode(array('dashboard_elements' =>  Model_Helper_Dashboard::getDashboard()));