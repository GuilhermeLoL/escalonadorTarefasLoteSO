# Trabalho de Sistemas Operacionais
Implementar um simulador de escalonador de tarefa em lotes


OBJETIVO


Implementar um programa que simule o escalonamento das tarefas em lotes que chegam em um computador.


DESCRIÇÃO


O trabalho consiste em realizar uma simulação do funcionamento simplificado de escalonador de tarefa em lotes.

O programa deverá apresentar ao usuário um menu com as seguintes opções:


1.	Adicionar tarefas

2.	Rodar tarefas com algoritmo FIFO

3.	Rodar tarefas com algoritmo + CURTO PRIMEIRO

4.	Rodar tarefas com algoritmo PRIORIDADES

5.	Rodar tarefas com algoritmo CIRCULAR

6.	Rodar tarefas com todos os algoritmos

7.	Sair


Para o item 1 do menu, deverá ser inserida informações referentes à uma tarefa em lotes, como por exemplo o identificador da tarefa, nome da tarefa, tempo de duração, a prioridade da tarefa, dentre outros campos que representem as informações de controle do escalonador de tarefas.

Para os itens de 2 a 5 deverão ser implementadas o funcionamento de cada algoritmo.

Para o algoritmo de chaveamento deve-se considerar que a tarefa a executar irá usar uma fração justa da CPU.

Para os demais algoritmos, deve-se considerar que as tarefas serão executadas uma por vez, até o seu término.

Para o algoritmo de prioridades, se existir tarefas com prioridades iguais, deve-se utilizar como segundo critério a tarefa com o menor tempo, e persistindo o empate, executar a tarefa que chegou primeiro.

Para o algoritmo de mais curto primeiro, se existir tarefas com tempos iguais, deve-se utilizar como segundo critério a prioridade, e persistindo o empate, executar a tarefa que chegou primeiro.

A simulação deve, de acordo com o algoritmo de escalonamento escolhido, delimitar o tempo necessário para cada uma das tarefas inseridas serem finalizadas, e para todas as tarefas deve-se calcular a média de tempo necessário para o término das tarefas. Ao final da simulação deve-se mostrar os resultados obtidos com o algoritmo escolhido.

No item 6 do menu, deve-se rodar as tarefas inseridas com todos os algoritmos de escalonamento implementados mostrando-se a comparação dos resultados obtidos em forma de dados, tabelas, gráficos, etc.



OBSERVAÇÕES


Serão aceitos trabalhos nas seguintes linguagens de programação: C, C++, C#, Pascal, Delphi, Java e JavaScript, linguagens de programação esotéricas, e outras linguagens sob consulta com o professor.
