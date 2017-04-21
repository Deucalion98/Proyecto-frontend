//Codigo encapsualdo en funcion
;(function() {
	//Variable principal
	let sticky = false
	let currentPosition = 0

	const contadorimg = $("[data-name='contadorimg']").attr("content")

	console.log(contadorimg)

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	//Creacion intervalo de galeria
	setInterval(()=>{
		if (currentPosition < contadorimg) {
			currentPosition++
		}
		else{
			currentPosition = 0
		}


		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		})
	}, 4000)

	//Declaracion JQuery = $
	 $(window).scroll(()=>{
		const inBottom = isInBottom()

		if (inBottom && !sticky) {
			//mostrar navegacion
			sticky = true
			stickNavigation()
		}
		if (!inBottom && sticky) {
			//ocultar la navegacion
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation() {
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation() {
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}
	//
	function isInBottom() {
		const $description = $("#description")
		//Devulve la altura del elemento
		const descriptionHeight = $description.height()
		//Paradevolver verdadero o falso en referencia al scroll
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

})()