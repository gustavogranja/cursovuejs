<template>
	<div id="app" class="container-fluid">
<!--		<h1>Animações</h1>-->
<!--		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">-->
<!--			Mostrar Mensagem-->
<!--		</b-button>-->

<!--         &lt;!&ndash;	pode usar o type="" caso o animation ou transition tenha tempos diferentes, assim-->
<!--         	determinando quem tem preferência &ndash;&gt;-->
<!--		<transition name="fade" appear>-->
<!--		<b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>-->
<!--		</transition>-->


<!--		<transition name="slide" appear>-->
<!--			<b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>-->
<!--		</transition>-->
<!--		&lt;!&ndash; pode fazer a troca do v-if para o v-show, o efeito continuara o mesmo &ndash;&gt;-->

<!--		<transition-->
<!--			enter-active-class="animated bounce"-->
<!--			leave-active-class="animated shake">-->
<!--			<b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>-->
<!--		</transition>-->

<!--		<hr>-->
<!--		<b-select v-model="tipoAnimacao" class="mb-4">-->
<!--			<option value="fade">Fade</option>-->
<!--			<option value="slide">Slide</option>-->
<!--		</b-select>-->
<!--		<transition :name="tipoAnimacao" mode="out-in">-->
<!--			<b-alert variant="info" v-if="exibir" key="info" show>{{ msg }}</b-alert>-->
<!--			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>-->
<!--		</transition>-->

<!--		<hr>-->
<!--		<button @click="exibir2 = !exibir2">Mostrar</button>-->
<!--		<transition-->
<!--			@before-enter="beforeEnter"-->
<!--			@enter="enter"-->
<!--			@after-enter="afterEnter"-->
<!--			@enter-cancelled="enterCancelled"-->

<!--			@before-leave="beforeLeave"-->
<!--			@leave="leave"-->
<!--			@after-leave="afterLeave"-->
<!--			@leave-cancelled="leaveCancelled">-->
<!--			<div v-if="exibir2" class="caixa"></div>-->
<!--		</transition>-->

<!--		<hr>-->
<!--		<div class="mb-4">-->
<!--			<b-button variant="primary"-->
<!--					  class="mr-2"-->
<!--					  @click="componenteSelecionado = 'AlertaInfo'">Info-->
<!--			</b-button>-->
<!--			<b-button variant="secondary"-->
<!--					  @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência-->
<!--			</b-button>-->
<!--		</div>-->
<!--		<transition name="fade" mode="out-in">-->
<!--			<component :is="componenteSelecionado"></component>-->
<!--		</transition>-->
		<button @click="adicionarAluno" class="mb-4">Adiciornar Aluno</button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>

	</div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
	components: { AlertaAdvertencia, AlertaInfo },
	data() {
		return{
			alunos: ['Gustavo', 'Guilherme', 'Geovana', 'Nara'],
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			// quando trocar o FALSE para TRUE, em exibir, não esquecer de colocar o "appear", com a mensage
			// irá aparecer logo que a pagina iniciar
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase +
						(negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if (rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		afterEnter(el) {
			console.log('afterEnter')
		},
		enterCancelled(el) {
			console.log('enterCancelled')
		},
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)

		},
		afterLeave(el) {
			console.log('afterLeave')
		},
		leaveCancelled(el) {
			console.log('leaveCancelled')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: #0d47a1;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from {transform: translateY(0); }
	to {transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}


</style>
