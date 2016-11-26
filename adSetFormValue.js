   //$(document).ready(function(){
    // (function () {
      var $form = $('body').find('input')
      var counter = initCounter();

      // TODO セレクタを指定すればその中のフォームのみを対象にする
      function adSetFormValue(){
        $form.each(function(i) {
          var thisType = getThisType($(this));
          setFormValue($(this));
        });
      }

      function setFormValue(thisObj){
        var thisType = getThisType(thisObj);
        if('text' == thisType){
           setTextFormValue(thisObj);
        }
        if('checkbox' == thisType){
          setCheckBoxFormValue(thisObj);
        }
        if('radio' == thisType){
          setRadioFormValue(thisObj);
        }
      }

      function getThisType(thisObj){
          return thisObj.attr('type');
      }


      function setTextFormValue(thisObj){
        var num = getPaddingNum();
        thisObj.val(num);
      }


      // 現状グループ内にある最後のラジオボタンがチェックされる
      function setRadioFormValue(thisObj){
        thisObj.prop('checked', true);
      }


      function setCheckBoxFormValue(thisObj){
        thisObj.prop("checked",true);
      }


      function getPaddingNum(){
        var num =counter.get();
        return("000"+num).slice(-3);
      }


      function initCounter(){
        return  (function() {
          var count = 0;
          return {
            get: function() {
               count++;
               if(count == 1000){
                 count = 0;
               }
              return count;
            }
          };
        })();
      }

    // }());

