new Vue({
  el: '#app',
  data: {
    tempoTotal: 0,
    media: 0,
    tarefas: [
      {id: 1, nome: 'A', tempo: 10, prioridade: 4, resultado: 0},
      {id: 2, nome: 'B', tempo: 5, prioridade: 5, resultado: 0},
      {id: 3, nome: 'C', tempo: 2, prioridade: 2, resultado: 0}
    ]
  },
  methods: {
    atualizarTempoTotal: function (total) {
      this.tempoTotal = total
      this.media = total / this.tarefas.length
      this.media = this.media.toFixed(2)
    },
    reiniciarLista: function () {
      this.tarefas.sort((a, b) => { return a.id - b.id })
      this.tarefas.forEach(e => e.resultado = 0)
    },
    fifo: function (reorder) {
      if (reorder) this.reiniciarLista()
      let total = 0
      let tempo = 0
      this.tarefas.forEach(e => {
        tempo += e.tempo
        e.resultado = tempo
        total += tempo
      })
      this.atualizarTempoTotal(total)
    },
    menorPrimeiro: function () {
      this.reiniciarLista()
      this.tarefas.sort((a, b) => { return a.tempo - b.tempo })
      this.fifo(false)
    },
    maiorPrioridade: function () {
      this.reiniciarLista()
      this.tarefas.sort((a, b) => { return b.prioridade - a.prioridade })
      this.fifo(false)
    },
    circular: function () {
      this.reiniciarLista()
      let filaExecucao = this.tarefas
      filaExecucao.forEach(e => e.delete = false)
      let tq = 0
      let tempoTotal = 0
      while (true) {
        if (filaExecucao.length === 0) break
        filaExecucao.forEach(e =>{
          tq++
          e.resultado++
          if (e.tempo === e.resultado) {
            this.tarefas[e.id - 1].resultado = tq
            e.delete = true
          }
        })
        filaExecucao = filaExecucao.filter(e => {return !e.delete})
      }
      this.tarefas.forEach(e => tempoTotal += e.resultado)
      this.atualizarTempoTotal(tempoTotal)
    },
    rodarTodos: function () {
      this.fifo(true)
      console.log(`${this.tempoTotal} - ${this.media}`)
      this.menorPrimeiro()
      console.log(`${this.tempoTotal} - ${this.media}`)
      this.maiorPrioridade()
      console.log(`${this.tempoTotal} - ${this.media}`)
      this.circular()
      console.log(`${this.tempoTotal} - ${this.media}`)
    }
  }
})
