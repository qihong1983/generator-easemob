define("pages/demo/test",["jquery/jquery/2.1.0/jquery","./say-hello"],function(a){var b=a("jquery/jquery/2.1.0/jquery"),c=a("./say-hello");b("#say").click(function(a){a.preventDefault(),c()})}),define("pages/demo/say-hello",["jquery/jquery/2.1.0/jquery"],function(a,b,c){var d=a("jquery/jquery/2.1.0/jquery");c.exports=function(){d("<p>hi</p>").appendTo("#console")}});