new Vue({
  el: '#app',
  data: {
    tempoTotal: 0,
    media: 0,
    tarefas: [
      {id: 1, nome: 'A', tempo: 10, prioridade: 1, resultado: 0},
      {id: 2, nome: 'B', tempo: 5, prioridade: 1, resultado: 0},
      {id: 3, nome: 'C', tempo: 2, prioridade: 1, resultado: 0}
    ]
  },
  methods: {
    atualizarTempoTotal: function (total) {
      this.tempoTotal = total
      this.media = total / this.tarefas.length
    },
    fifo: function () {
      let total = 0
      let tempo = 0
      this.tarefas.forEach(e => {
        tempo += e.tempo
        e.resultado = tempo
        total += tempo
      })
      this.atualizarTempoTotal(total)
    }
  }
})
