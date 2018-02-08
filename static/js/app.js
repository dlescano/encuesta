


var chat = new Vue({
	el: "#chat",
	data: {

		Preguntas: [
			{
				pregunta : "color del auto?",
				opciones : ["1) Rojo ", "2) Azul", "3) Gris"],
				estado : true,
				contestada: true,
				respuesta : ""
			},

			{
				pregunta: "tiene abolladuras?",
				estado : false,
				contestada: false,
				respuesta : ""
			},

			{
				pregunta: "que sucursal le queda mas cerca?",
				opciones : ["1) Nazaret 381 (Cordoba)", "2) San Martin 2001 (Cordoba)", "3) Las Palmas 121 (San Francisco)"],
				estado : false,
				contestada: false,
				respuesta : ""
			},

			{
				pregunta: "cuantas cuotas PAGO en su ultimo Auto?",
				estado : false,
				contestada: false,
				respuesta : ""
			}
		],
		Respuestas:[]

	},


	methods: {

		RespondePregunta: function (e) {
			this.scrollToEnd();
			e.preventDefault();
			if (this.Respuestas.respuesta) {
				for (var i = 0; i <= this.Preguntas.length - 1; i++) {
					if (this.Preguntas[i].contestada) {
						break;
					}
				}
				this.Preguntas[i].respuesta = this.Respuestas.respuesta;
				var x = i + 1;
				if (x > this.Preguntas.length - 1) {
					this.Respuestas.respuesta = '';
				} else {
					this.Preguntas[i].contestada = false
					this.Preguntas[x].estado = true;
					this.Preguntas[x].contestada = true
					this.Respuestas.respuesta = '';
				}
			}
		},

		scrollToEnd() {
			var container = document.querySelector("#screen");
			var scrollHeight = container.scrollHeight;
			container.scrollTop = scrollHeight;
		},

		agregarTarea: function (e) {
			e.preventDefault();
			if (this.tareas.titulo) {
				this.tareas.push({
					titulo: this.tareas.titulo,
					estado: false
				});
				this.tareas.titulo = '';
			}
		},
	},



	mounted() {
		this.scrollToEnd();
	},
	updated() {
		this.scrollToEnd();
	}

});

