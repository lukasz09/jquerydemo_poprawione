$('document').ready(function() {
	
	$('#nazwa').inputFocus('require',"name_error_require"); 
	$('#nazwa').inputFocus('maxLength', 50, "name_error_length");
	$('#nazwa').inputFocus('show', {'text': 'Podaj nazwę filmu - max 50 znaków'}).css({'background-color' : 'lightblue'});
	$('#gatunek').inputFocus('show', {'text': 'Podaj gatunek - max 10 znaków '}).css({'background-color' : 'lightblue'});
	$('#gatunek').inputFocus('maxLength', 10, "genre_error_length");
	$('#gatunek').inputFocus('require', "genre_error_require");
	$('#data').inputFocus('show', {'text': 'Podaj rok produkcji - w formie 12.12.1221'}).css({'background-color' : 'lightblue'});
    $('#data').inputFocus('checkDate');
	$('#data').inputFocus('require', "date_error_require"); 

    
});

//Funkcja sprawdzająca czy pola są wypełnione i blokuje wysylanie do serwera jeżeli tak nie jest (zwraca false)
//jezeli funkcja wylapie, ze jakies pole jest puste, to sprawdza dodatkowo czy pozostale tez są puste
function validate(){
		var nazwa = $("#nazwa").val();
		var gatunek = $("#gatunek").val();
		var data = $("#data").val();
        if(gatunek == "" || gatunek == null){
            $('#genre_error_require').css('display','inline');
            $('#genre_error_require').css('color','red');
            $('#genre_error_require').css('margin-left','30px');

            if(nazwa == "" || nazwa == null){
	        	$('#name_error_require').css('display','inline');
	            $('#name_error_require').css('color','red');
	            $('#name_error_require').css('margin-left','30px');
        	}

        	if(data == "" || data == null){
	        	$('#date_error_require').css('display','inline');
	            $('#date_error_require').css('color','red');
	            $('#date_error_require').css('margin-left','30px');
        	}
            return false;
        }
        else if(nazwa == "" || nazwa == null){
            $('#nazwa_error_require').css('display','inline');
            $('#nazwa_error_require').css('color','red');
            $('#nazwa_error_require').css('margin-left','30px');

            if(gatunek == "" || gatunek == null){
	        	$('#genre_error_require').css('display','inline');
	            $('#genre_error_require').css('color','red');
	            $('#genre_error_require').css('margin-left','30px');
        	}

        	if(data == "" || data == null){
	        	$('#date_error_require').css('display','inline');
	            $('#date_error_require').css('color','red');
	            $('#date_error_require').css('margin-left','30px');
        	}
            return false;
        }
        else if(data == "" || data == null){
            $('#date_error_require').css('display','inline');
            $('#date_error_require').css('color','red');
            $('#date_error_require').css('margin-left','30px');

            if(nazwa == "" || nazwa == null){
	        	$('#name_error_require').css('display','inline');
	            $('#name_error_require').css('color','red');
	            $('#name_error_require').css('margin-left','30px');
        	}

        	if(gatunek == "" || gatunek == null){
	        	$('#genre_error_require').css('display','inline');
	            $('#genre_error_require').css('color','red');
	            $('#genre_error_require').css('margin-left','30px');
        	}
            return false;
        }
        else{
        	return true;
        }
}


// || (nazwa == "" || nazwa == null) || (data == "" || data == null)