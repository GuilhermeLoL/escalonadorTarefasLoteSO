new Vue({
  el: '#app',
  data: {
    nome: '',
    prioridade: 1,
    tempo: 1,
    tarefas: [],
    resultados: []
  },
  methods: {
    add: function () {
      let id = this.tarefas.length + 1
      let prioridade = Number(this.prioridade)
      let tempo = Number(this.tempo)
      this.tarefas.push({ id: id, nome: this.nome, tempo: tempo, prioridade: prioridade, resultado: 0 })
      this.nome = ''
      this.prioridade = this.tempo = 1
    },
    atualizarTempoTotal: function (metodo, total) {
      let media = total / this.tarefas.length
      media = media.toFixed(2)
      this.resultados.push({ metodo: metodo, tempoTotal: total, media: media })
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
      if (reorder) this.atualizarTempoTotal('FIFO', total)
      else return total
    },
    menorPrimeiro: function () {
      this.reiniciarLista()
      this.tarefas.sort((a, b) => { return a.tempo - b.tempo })
      let total = this.fifo(false)
      this.atualizarTempoTotal('MENOR', total)
    },
    maiorPrioridade: function () {
      this.reiniciarLista()
      this.tarefas.sort((a, b) => { return b.prioridade - a.prioridade })
      let total = this.fifo(false)
      this.atualizarTempoTotal('PRIORIDADE', total)
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
      this.atualizarTempoTotal('CIRCULAR', tempoTotal)
    },
    rodarTodos: function () {
      this.resultados = []
      this.fifo(true)
      this.menorPrimeiro()
      this.maiorPrioridade()
      this.circular()
      this.resultados.sort((a, b) => { return a.media - b.media })
    }
  }
})
