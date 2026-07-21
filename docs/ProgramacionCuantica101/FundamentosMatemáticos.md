---
title: "Capítulo 2 - Fundamentos Matemáticos de la Computación Cuántica"
author: "Quantum Programming Notes"
chapter: 2
tags:
- Quantum Computing
- Linear Algebra
- Dirac Notation
- Bloch Sphere
- Quantum States
- IBM Quantum
---

# Capítulo 2
# Fundamentos Matemáticos de la Computación Cuántica

> *"La matemática no es un lenguaje auxiliar de la computación cuántica; es el lenguaje mismo en el que ésta está escrita."*

---

# Objetivos

Al finalizar este capítulo el lector será capaz de

- Comprender por qué la computación cuántica requiere un formalismo matemático diferente al de la computación clásica.
- Interpretar la notación de Dirac.
- Representar estados cuánticos mediante vectores.
- Entender la interpretación probabilística de una medición.
- Visualizar estados de un qubit mediante la esfera de Bloch.
- Comprender el papel de los operadores unitarios.
- Conocer las primeras compuertas cuánticas.

---

# Introducción

En el capítulo anterior presentamos la idea general de la computación cuántica y las diferencias entre una computadora clásica y una computadora cuántica.

Sin embargo, para poder diseñar algoritmos cuánticos es necesario introducir el lenguaje matemático utilizado por la Mecánica Cuántica.

Mientras que la computación clásica trabaja principalmente con lógica booleana y circuitos digitales, la computación cuántica se fundamenta en el álgebra lineal sobre espacios vectoriales complejos.

Los estados de un sistema cuántico ya no son simples valores binarios, sino vectores pertenecientes a un espacio de Hilbert, sobre los cuales actúan operadores lineales unitarios.

En este capítulo desarrollaremos las herramientas matemáticas necesarias para comprender el funcionamiento interno de los qubits.

---

# 2.1 ¿Por qué necesitamos otra matemática?

Supongamos un bit clásico.

Puede representarse mediante

$$
0
$$

o

$$
1
$$

Nada más.

En cambio, un qubit puede encontrarse en un estado

$$
|\psi\rangle
=
\alpha|0\rangle+\beta|1\rangle
$$

donde

$$
\alpha,\beta\in\mathbb C.
$$

Ahora ya no basta con la lógica binaria.

Necesitamos

- vectores
- matrices
- números complejos
- espacios vectoriales
- operadores lineales
- productos internos

Es decir,

**Álgebra Lineal.**

---

# 2.2 Complejidad Computacional

Antes de estudiar la mecánica cuántica conviene responder una pregunta importante.

> ¿Por qué construir computadoras cuánticas?

La respuesta está relacionada con la complejidad computacional.

La complejidad mide cómo crecen los recursos necesarios para resolver un problema conforme aumenta el tamaño de la entrada.

Los recursos más comunes son

- tiempo
- memoria

Por ejemplo,

ordenar una lista de un millón de elementos requiere mucho más trabajo que ordenar una lista de diez elementos.

La teoría de la complejidad busca cuantificar ese crecimiento.

---

## Crecimiento temporal

Algunos órdenes de crecimiento importantes son

| Complejidad | Ejemplo |
|-------------|----------|
| \(O(1)\) | acceso a memoria |
| \(O(\log n)\) | búsqueda binaria |
| \(O(n)\) | recorrer un arreglo |
| \(O(n\log n)\) | MergeSort |
| \(O(n^2)\) | Bubble Sort |
| \(O(2^n)\) | muchos problemas NP |

Una computadora cuántica no hace mágicamente que todos estos problemas sean rápidos.

Solo ciertos algoritmos presentan ventajas significativas.

---

# 2.3 Ventaja Cuántica

Con frecuencia aparecen dos términos distintos.

## Ventaja cuántica

Se dice que existe ventaja cuántica cuando una computadora cuántica supera a la mejor computadora clásica conocida para una tarea específica.

No implica necesariamente que el problema sea útil.

---

## Supremacía cuántica

La supremacía cuántica es un caso particular donde una computadora cuántica realiza un cálculo prácticamente imposible para cualquier supercomputadora clásica.

El ejemplo más conocido fue el experimento de Google con el procesador **Sycamore** en 2019.

Actualmente suele preferirse el término **Quantum Advantage**, ya que refleja mejor el objetivo práctico: resolver problemas relevantes más eficientemente.

---

# 2.4 La Notación de Dirac

Una de las herramientas más importantes de la Mecánica Cuántica es la notación introducida por Paul Dirac.

En esta notación los estados cuánticos se representan mediante vectores llamados **kets**.

Un estado cualquiera se escribe como

$$
|\psi\rangle
$$

El símbolo

\[
|\;\rangle
\]

se denomina **ket**.

El vector dual correspondiente se llama **bra**

$$
\langle\psi|
$$

El producto entre ambos produce un escalar

$$
\langle\psi|\psi\rangle.
$$

Cuando el estado está normalizado,

$$
\langle\psi|\psi\rangle=1.
$$

La notación de Dirac simplifica enormemente la escritura de ecuaciones cuánticas y será utilizada en todos los capítulos posteriores.

> **Nota histórica.** Paul Adrien Maurice Dirac introdujo esta notación en la década de 1930 como parte del desarrollo formal de la mecánica cuántica. Hoy es el estándar universal en física cuántica.
