<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="{{URL::asset('js/jquery-3.2.1.js')}}"></script>
        <script type="text/javascript" src="{{URL::asset('js/vk.js')}}"></script>

        <title>Vk album</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{URL::asset('css/main.css')}}">
        <script src="https://use.fontawesome.com/0be01c127d.js"></script>
        <!-- Styles -->
    </head>
    <body>
        <div class="main">
          <div class ="menu">
            <nav>
              <ul>
              <li><a href="https://oauth.vk.com/authorize?client_id=6110778&display=page&redirect_uri=http://imgur-test.dev/&scope=photos&response_type=token&v=5.52"  class="login"> Login </a></li>
              <li><a href="#"> Logout </a></li>
              <!--<li><input id="searchbar" type="search" name="search" value="search"></li> -->
              </ul>
            </nav>
          </div>
          <div class="content">
            <i class="fa fa-picture-o fa-2x" style="color:#0080ff" aria-hidden="true" id="albumbtn">Albums</i>
            <div class="albums">
              <ul id="albums">

              </ul>
            </div>
            <div class="photos">
              <ul id="photos">

              </ul>
            </div>
          </div>
        </div>
    </body>
</html>
