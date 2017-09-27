<!doctype html>
<html lang="{{ config('app.locale') }}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial- scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
  </head>
  <body>
    <div id="app">
        <router-view></router-view>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>