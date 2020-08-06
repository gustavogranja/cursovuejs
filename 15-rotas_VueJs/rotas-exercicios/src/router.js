import Vue from 'vue'
import Router from 'vue-router'
import Inicio from "./components/Inicio";

// import Usuario from "./components/usuario/Usuario";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
// import UsuarioLista from "./components/usuario/UsuarioLista";
import {from} from "bootstrap-vue/es/utils/array";

Vue.use(Router)

const Usuario = () => import('./components/usuario/Usuario')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioLista = () => import('./components/usuario/UsuarioLista')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
    scrollBehavior(to) {
      if (to.hash) {
          return {selector: to.hash}
      }
    },
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                console.log('antes da rota -> usuário detalhe')
                    next()
                }},
            {path: ':id/editar', component: UsuarioEditar, props: true}
        ]
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()
})

export default router