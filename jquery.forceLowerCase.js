/*
* jQuery forceLowerCase plugin
* Force lower case text on inputs and textareas
*
* Homepage: http://github.com/episko/jquery-forceLowerCase/
*
* Copyright (c) 2011 Axel Vergult
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/

(function($) {

  $.fn.forceLowerCase = function(){

    var container = this;

    function forceLowerCase() {
      container.val(container.val().toLowerCase());
    }

    container.on('keyup', function(e){ if (e.keyCode >= 65 && e.keyCode <= 90) forceLowerCase(); })
             .on('paste', function(e){ setTimeout(function(){ forceLowerCase(); }, 10); });

  };

})(jQuery);
