<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>

    <meta charset="utf-8" />
    <title>jQuery Portofolio</title>
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/ViewScript.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.12.1.custom/jquery-ui.js"></script>
    <script type="text/javascript" src="js/filter.js"></script>
    <link rel="stylesheet" type="text/css" href="css/ViewStyle.css">

</head>


<body>
    <div id="header">
        <div id="manu">
            <h2>jQuery Portfolio</h2>
			<input id="search" style="float:right" type="text" placeholder="search..."/>
        </div>
    </div>
    <div id="overlay"></div>
    <div id="frame">
        <table id="frame-table">
            <tr>
                <td id="left">
                    <img id="imgleft" src="images/left.png" alt="left">
                </td>
                <td id="right">
                    <img id="imgright" src="images/right.png" alt="right">
                </td>
            </tr>
        </table>
        <img id="main" src="" alt=""/>
        <div id="discription">
            <p></p>
        </div>
    </div>
    <div id="wrapper">
        <ul id="filter">
            <li class="active">all</li>
            <li>ground</li>
            <li>water</li>
            <li>peaple</li>
        </ul>
        <ul id="portfolio">
			<?php include_once("list.html") ?>
        </ul>
    </div>


</body>
</html>