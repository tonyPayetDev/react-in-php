<?php

// Pour inclure facilement nos classes et dépendances
require 'vendor/autoload.php';

// Equivalent de la récupération d'un article en base de données
$article = App\Generator::getArticle();

// echo "<pre>";
// var_dump($article);
// echo "</pre>";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon site en PHP etc etc.</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'/>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
</head>
<body>
    <div class="container">
        <div id="root" >   
            <div data-article='<?= json_encode($article,true);?>' >   
            </div>
        </div>


    </div>

    <script src="./my-app/dist/app.bundle.js"></script>

</body>
</html>
