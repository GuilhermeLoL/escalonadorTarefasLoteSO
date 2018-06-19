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
      this.media = Math.round(total / this.tarefas.length)
    },
    fifo: function (reorder) {
      let total = 0
      let tempo = 0
      if (reorder) {
        this.tarefas.sort((a, b) => { return a.id - b.id })
      }
      this.tarefas.forEach(e => {
        tempo += e.tempo
        e.resultado = tempo
        total += tempo
      })
      this.atualizarTempoTotal(total)
    },
    menorPrimeiro: function () {
      this.tarefas.sort((a, b) => { return a.tempo - b.tempo })
      this.fifo(false)
    },
    maiorPrioridade: function () {
      this.tarefas.sort((a, b) => { return b.prioridade - a.prioridade })
      this.fifo(false)
    }
  }
})
