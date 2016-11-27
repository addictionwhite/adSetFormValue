(function( $ ){
  $.fn.adSetFormValue = function() {
    if(! this.length){
      alert('指定されたjQueryオブジェクトは存在しません。');
      return false;
    }

    var counter = initCounter();
    var thisObj = this;

    // プラグインメソッド実行
    doAdSetFormValue(this);


    // メインメソッド 
    function doAdSetFormValue(thisObj){
        doSetFomrValue('input',setInputValue);
    }


    function doSetFomrValue(selector,call){
        var $form = thisObj.find(selector)
        $form.each(function(i) {
          var thisType = getThisType($(this));
          call($(this));
        });
    }


    function setInputValue(thisObj){
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

    function setSelectFormValue(thisObj){
        console.log(thisObj);
    }


    function setCheckBoxFormValue(thisObj){
      thisObj.prop("checked",true);
    }


      var oputionLength =  thisObj.children().length;
      var randamNum = getRandomNum(oputionLength);
      thisObj.find('option').eq(randamNum).prop('selected',true);
    }


    function getPaddingNum(){
      var num =counter.get();
      return("000"+num).slice(-3);
    }

    function getRandomNum(maxNum){
        return rand = Math.floor( Math.random() * maxNum ) ;
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

  };
})( jQuery );

