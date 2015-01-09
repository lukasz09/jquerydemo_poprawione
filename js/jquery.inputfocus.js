(function($) {

	var methods = {
		show : function(options) {
			var inputText = options.text;
			$(this).val(inputText); // funkcja odpowiadająca za umieszczenie tekstu np. "podaj nazwe filmu" przekazanego jako argument,w polu tekstowym do którego sie funkcja odnosi

			$(this).focus(function() { // funkcja odpowiadająca za wymazanie tekstu przekazanego jako argument, gdy klikniemy na pole tekstowe 
				if ($(this).val() === inputText) {
					$(this).val('');
				}
			});

			$(this).blur(function() { // wpisane tekstu przekazanego jako argument gdy odklikniemy puste pole tekstowe
				if ($(this).val() === '') {
					$(this).val(inputText);
				}
			});
		},

		
		require : function(id) {
		    $(this).on('input', function() {
                var input=$(this);
                var is_name=input.val();
                if(is_name == "" || is_name == null) {
                    input.removeClass("valid").addClass("invalid");
                    $('#' + id).css('display','inline');
                    $('#' + id).css('color','red');
                    $('#' + id).css('margin-left','30px');
                }
                else {
                    input.removeClass("invalid").addClass("valid");
                    $('#' +id).css('display','none');
                    $('#' + id).css('margin-left','30px');
                }
            });
		},
		
		maxLength : function(length, id) {
			$(this).attr('maxLength', length); // nadaje atrybut "maxLength",czyli maksymalna dlugosc tekst
			$(this).on('input', function() {
                var input=$(this); // pobiera nasz obiekt na ktory dziala funkcja, w tym przypadku jest to input, czyli pole tekstowe
                var len=input.val().length; // pobiera ilosc znakow wpisanego tekstu
                if(len==length) { // jezeli dlugosc tekstu wpisanego w pole tekstowe jest rowna liczbe wpisanej jako argument do funkcji(argument "length"),to wywal error
                    $('#' + id).css('display','inline');
                    $('#' + id).css('color','red');
                    $('#' + id).css('margin-left','30px');
                }
                else {
                    $('#' + id).css('display','none');
                    $('#' + id).css('margin-left','30px');
                }
            });
		},
		
		checkDate : function() {
		    $(this).on('input', function() {
                var input=$(this);
                var wart=input.val();
                var len=input.val().length;
                if(len == 10){
	                if(wart[0]>=0 && wart[0]<=9 &&
	                    wart[1]>=0 && wart[1]<=9 &&
	                    wart[2] == "." &&
	                    wart[3]>=0 && wart[3]<=9 &&
			    wart[4]>=0 && wart[4]<=9 &&
			    wart[5] == "." && 
	                    wart[6]>=0 && wart[6]<=9 &&
			    wart[7]>=0 && wart[7]<=9 &&
	                    wart[8]>=0 && wart[8]<=9 &&
			    wart[9]>=0 && wart[9]<=9) {
	                    $('#date_error').css('display','none');
	                    $('#date_error').css('margin-left','10px');
	                }
	                else { // jezeli którykolwiek znak nie zgadza się z naszym wzorcem wposanym powyżej, wywal error (np. 3 znak to nie kropka tylko liczba)
	                    $('#date_error').css('display','inline'); 
	                    $('#date_error').css('color','red');
	                    $('#date_error').css('margin-left','10px');
	                }
            	}
            	else if(len > 10){ // jezeli tekst dluzszy niz 10 znakow, to wywal error
            			$('#date_error').css('display','inline');
	                    $('#date_error').css('color','red');
	                    $('#date_error').css('margin-left','10px');
            	}
            	else{ // jezeli tekst krotszy niz 10 znakow, nie wywalaj errora, bo to znaczy ze piszesz
            			$('#date_error').css('display','none');
	                    $('#date_error').css('margin-left','10px');

            	}
            });
		}
	};

	$.fn.inputFocus = function(method) {
		var args = arguments;
		return this.each(function(){
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(
						args, 1));
			} else if (typeof method === 'object' || !method) {
				console.log("Init!");
				return methods.init.apply(this, args);
			} else {
				$.error(" Method " + method
						+ ' does not exists on jQuery.inputFocus');
			}
		});
	};
})(jQuery);
