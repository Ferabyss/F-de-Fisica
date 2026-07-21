---
title: Programación Cuántica 101
layout: default
nav_order: 4
has_children: true
---



title: "01 - Introducción a la Computación Cuántica"
author: "Fernanda Martinez"

# Introducción a la Computación Cuántica

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/wM9obb_gB44"
    title="YouTube video"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>




Quantum Programming Notes
=========================

Prefacio

Capítulo 1. Introducción a la Computación Cuántica
Capítulo 2. Fundamentos Matemáticos
Capítulo 3. Qubits
Capítulo 4. La Esfera de Bloch
Capítulo 5. Álgebra Lineal para Computación Cuántica
Capítulo 6. Compuertas Cuánticas
Capítulo 7. Sistemas de múltiples qubits
Capítulo 8. Entrelazamiento
Capítulo 9. Medición
Capítulo 10. Circuitos Cuánticos
Capítulo 11. Algoritmos Cuánticos
Capítulo 12. Qiskit
Capítulo 13. Hardware IBM Quantum
Capítulo 14. Mitigación de errores
Capítulo 15. Quantum Machine Learning

Apéndices

# Objetivos

Al finalizar esta clase deberías ser capaz de:

- Comprender qué es la computación cuántica.
- Diferenciar un bit de un qubit.
- Entender por qué las computadoras cuánticas representan un paradigma distinto al de la computación clásica.
- Conocer las aplicaciones actuales de la computación cuántica.
- Comprender las limitaciones actuales del hardware cuántico.

---

# Temario del curso

Durante el curso se abordarán los siguientes temas:

1. Introducción a la computación cuántica.
2. Hardware cuántico.
3. Qubits.
4. Esfera de Bloch.
5. Notación de Dirac.
6. Estados cuánticos.
7. Medición cuántica.
8. Sistemas de múltiples qubits.
9. Entrelazamiento.
10. Puertas cuánticas.
11. Operadores de rotación.
12. Algoritmos cuánticos:
   - Deutsch-Jozsa
   - Grover
   - Teletransportación Cuántica
   - Shor
14. Qiskit.
15. Mitigación de errores.
16. Quantum Volume.
17. Simulación Cuántica.
18. Quantum Machine Learning.

---

# ¿Qué es un bit?

La unidad mínima de información en una computadora clásica es el **bit**.

Puede tomar únicamente dos valores

$$
0
$$

o

$$
1
$$

Generalmente se representa mediante un interruptor:

```
OFF → 0

ON  → 1
```

Los procesadores clásicos manipulan millones de estos bits mediante transistores y compuertas lógicas.

---

# ¿Qué es un qubit?

Un **qubit** (Quantum Bit) es la unidad básica de información de una computadora cuántica.

A diferencia del bit clásico, un qubit puede encontrarse en una **superposición** de estados.

Matemáticamente:

$$
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle
$$

donde

$$
|\alpha|^2+|\beta|^2=1
$$

Los coeficientes representan probabilidades de medir cada estado.

---

## Analogía

Una analogía útil es comparar

**Bit**

```
Interruptor

OFF
ON
```

con

**Qubit**

```
Perilla de intensidad

0 ─────────────── 1

↑
Puede tomar infinitos estados intermedios.
```

Esta analogía ayuda a visualizar la superposición, aunque no describe completamente el fenómeno físico.

---

# Espacio de estados

Con bits:

| Bits | Estados |
|------|----------|
|1|2|
|2|4|
|3|8|
|n|2ⁿ|

Los qubits trabajan en un espacio vectorial cuya dimensión también crece como

$$
2^n
$$

permitiendo representar estados cuánticos complejos y aprovechar fenómenos como la interferencia y el entrelazamiento.

---

# Relación con la Mecánica Cuántica

Los qubits pueden implementarse físicamente mediante sistemas cuánticos como:

- electrones
- fotones
- iones atrapados
- átomos neutros
- circuitos superconductores

Su comportamiento está gobernado por la Mecánica Cuántica.

Al igual que un electrón en un átomo, un qubit posee una función de onda que describe probabilidades de medición.

---

# ¿Qué es una computadora cuántica?

Una computadora cuántica es un dispositivo que utiliza qubits en lugar de bits para realizar ciertos cálculos.

No pretende reemplazar completamente a la computadora clásica.

Cada una posee ventajas diferentes.

Computadora clásica

- Navegación web
- Videojuegos
- Office
- Sistemas operativos
- Bases de datos

Computadora cuántica

- Optimización
- Simulación molecular
- Criptografía
- Machine Learning Cuántico
- Simulación de materiales

---

# El desafío del hardware

Actualmente las computadoras cuánticas presentan varias dificultades:

## Ruido

Los qubits son extremadamente sensibles al entorno.

Factores externos producen errores durante la computación.

---

## Temperatura

Muchas arquitecturas (como IBM Quantum) funcionan cerca del cero absoluto

$$
T\approx15\text{ mK}
$$

utilizando enormes refrigeradores de dilución.

---

## Decoherencia

Los estados cuánticos se destruyen rápidamente si interactúan con el ambiente.

Por ello es necesario aislar cuidadosamente el sistema.

---

# ¿Por qué nos interesa la Computación Cuántica?

Existen problemas que una computadora clásica tarda demasiado tiempo en resolver.

Entre ellos:

- factorización de números enormes
- simulación molecular
- química cuántica
- optimización
- búsqueda

---

# El algoritmo de Shor

Uno de los algoritmos más famosos.

Permite factorizar enteros en tiempo mucho menor que los mejores algoritmos clásicos conocidos.

Su importancia radica en que compromete sistemas criptográficos como RSA.

---

# Simulación Cuántica

Richard Feynman propuso que

> La naturaleza es cuántica.

Por ello resulta natural utilizar computadoras cuánticas para simular sistemas cuánticos.

Ejemplos:

- moléculas
- proteínas
- materiales
- superconductores

Una computadora clásica encuentra enormes dificultades para simular estos sistemas debido al crecimiento exponencial del espacio de Hilbert.

---

# Estado actual

Actualmente el hardware aún es limitado.

Los principales retos son

- aumentar el número de qubits
- reducir errores
- mejorar fidelidades
- desarrollar mejores algoritmos
- crear métodos de mitigación de errores

---

# Mitigación de errores

Cada compuerta cuántica introduce ruido.

Cada qubit añade nuevas fuentes de error.

Por ello existen técnicas como:

- repetición de mediciones
- calibración
- modelos de ruido
- corrección y mitigación de errores

Este es uno de los campos de investigación más activos.

---

# Software

Durante el curso se utilizarán principalmente

- Python
- Jupyter Notebook
- Qiskit

---

# Bibliografía recomendada

## Introductorios

- Michael Nielsen & Isaac Chuang
  *Quantum Computation and Quantum Information.*

- Jack Hidary
  *Quantum Computing: An Applied Approach.*

- Chris Bernhardt
  *Quantum Computing for Everyone.*

## Programación

- Qiskit Documentation

- IBM Quantum Learning

---

# Conceptos clave

- Bit
- Qubit
- Superposición
- Estado cuántico
- Esfera de Bloch
- Computadora cuántica
- Decoherencia
- Simulación cuántica
- Algoritmo de Shor
- Qiskit

---

# Resumen

En esta primera sesión se presentó una panorámica general del curso y de la computación cuántica.

Los puntos centrales fueron:

- La diferencia entre bits y qubits.
- La superposición como propiedad fundamental.
- El crecimiento exponencial del espacio de estados.
- Las limitaciones actuales del hardware.
- Las aplicaciones más prometedoras de la computación cuántica.
- La importancia de Qiskit como herramienta de programación.

---

# Ejercicios

1. Explica con tus propias palabras la diferencia entre un bit y un qubit.

2. ¿Por qué una computadora cuántica necesita temperaturas cercanas al cero absoluto?

3. ¿Qué es la superposición?

4. ¿Cuál fue la principal motivación de Richard Feynman para proponer la computación cuántica?

5. Investiga qué problema resuelve el algoritmo de Shor.

---

# Próxima clase

- Esfera de Bloch
- Notación de Dirac
- Estados cuánticos
- Medición
