    (function() {
      var stats = {
        engine: 0,
        crew: 0,
        ship: 0
      }
      var cc = function(a) {
        console.log(a)
      };
      var $ = function(selector, el) {
        if (!el)
          el = document;
        return el.querySelector(selector);
      };
      //MDN
      var $$ = function (selector, el) {
        if (!el) {
          el = document;
        }
        return el.querySelectorAll(selector);
      }

      function clickFunction() {
        var icon = this.children[0]
        icon.classList.toggle('rotate90');
        //icon.classList.toggle('rotate90minus');
        //cc(this.parentNode.children[0])
        if (this.parentNode.children[1].classList.contains('menu-list')) {
          this.parentNode.children[1].classList.toggle('hide')
          this.parentNode.children[1].classList.toggle('show')
        }
        this.classList.toggle('off');
        this.classList.toggle('on');
        if ( this.getAttribute('data-name') in stats )
          stats[this.getAttribute('data-name')] = this.classList.contains('on')
        cc(stats)
      }

      var links = $('#links').getElementsByClassName("icon");
      for (var i = 0; i < links.length; i++)
        links[i].parentNode.onclick = clickFunction;

    })();
