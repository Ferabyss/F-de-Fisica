---
title: Espacios de Hilbert
author: Ferabyss
chapter: 3
layout: default
parent: Programación Cuántica 101
---

## Espacios de Hilbert

Hasta ahora hemos mencionado que un **qubit** puede representarse mediante un vector. Sin embargo, aún no hemos respondido una pregunta fundamental:

> **¿En qué espacio "viven" esos vectores?**

La respuesta es el **espacio de Hilbert**, una de las estructuras matemáticas más importantes de la mecánica cuántica y, por extensión, de la computación cuántica.

En computación clásica, un bit únicamente puede adoptar dos estados bien definidos, \(0\) y \(1\). En cambio, un qubit puede encontrarse en una superposición de ambos estados, por lo que resulta necesario un marco matemático capaz de describir un número infinito de combinaciones posibles. Ese marco es precisamente un espacio de Hilbert.

---

### ¿Qué es un espacio de Hilbert?

De manera informal, un espacio de Hilbert puede entenderse como un **espacio vectorial dotado de un producto interno**, en el cual es posible medir longitudes, ángulos y distancias entre vectores. Además, este espacio posee la propiedad matemática de ser **completo**, lo que garantiza que cualquier sucesión convergente de vectores converge hacia otro vector perteneciente al mismo espacio.

En términos más formales:

> Un espacio de Hilbert es un espacio vectorial sobre los números complejos \(\mathbb{C}\), equipado con un producto interno y completo respecto de la norma inducida por dicho producto.

Aunque esta definición puede parecer abstracta, sus consecuencias físicas son profundas. Gracias a esta estructura es posible describir estados cuánticos, calcular probabilidades de medición y representar la evolución temporal de un sistema mediante operadores lineales.

---

### Intuición geométrica

Es útil comenzar recordando espacios vectoriales familiares.

La recta real puede representarse como

\[
\mathbb{R}.
\]

Un plano corresponde a

\[
\mathbb{R}^2,
\]

mientras que el espacio tridimensional cotidiano es

\[
\mathbb{R}^3.
\]

En estos espacios podemos sumar vectores, multiplicarlos por escalares y calcular distancias mediante el producto punto.

El espacio de Hilbert conserva estas mismas ideas, pero introduce dos diferencias fundamentales:

1. Los vectores poseen componentes **complejas**.
2. Su dimensión puede ser extremadamente grande, e incluso infinita.

---

### El espacio de un qubit

El sistema cuántico más sencillo es un único qubit.

Su espacio de estados está formado por todas las combinaciones lineales de dos vectores base,

\[
|0\rangle
=
\begin{pmatrix}
1\\
0
\end{pmatrix},
\qquad
|1\rangle
=
\begin{pmatrix}
0\\
1
\end{pmatrix}.
\]

Estos vectores constituyen una **base ortonormal** del espacio

\[
\mathcal{H}\cong\mathbb{C}^{2}.
\]

En consecuencia, cualquier estado de un qubit puede escribirse como

\[
|\psi\rangle
=
\alpha|0\rangle
+
\beta|1\rangle,
\]

donde

\[
\alpha,\beta\in\mathbb{C},
\]

y cumplen la condición de normalización

\[
|\alpha|^2+|\beta|^2=1.
\]

Los coeficientes complejos \(\alpha\) y \(\beta\) reciben el nombre de **amplitudes de probabilidad**.

---

### Dimensión del espacio de Hilbert

Una de las propiedades más sorprendentes de la computación cuántica es la rapidez con la que crece el espacio de estados.

Para un sistema formado por \(n\) qubits, la dimensión del espacio de Hilbert es

\[
2^n.
\]

Por ejemplo,

| Número de qubits | Dimensión del espacio |
|-----------------:|----------------------:|
| 1 | \(2\) |
| 2 | \(4\) |
| 3 | \(8\) |
| 5 | \(32\) |
| 10 | \(1024\) |
| 20 | \(1\,048\,576\) |
| 50 | \(1.13\times10^{15}\) |

Este crecimiento exponencial explica por qué simular sistemas cuánticos mediante computadoras clásicas resulta tan costoso.

> **Observación.** Una computadora cuántica con 50 qubits no "almacena" \(2^{50}\) números clásicos, pero su estado matemático pertenece a un espacio cuya dimensión es \(2^{50}\). Esta es una de las razones por las que la simulación clásica se vuelve rápidamente impracticable.

---

### Base computacional

En computación cuántica se trabaja habitualmente con la denominada **base computacional**, formada por los estados

\[
|0\rangle,
\qquad
|1\rangle.
\]

Para dos qubits, la base se obtiene mediante el producto tensorial,

\[
|00\rangle,
\quad
|01\rangle,
\quad
|10\rangle,
\quad
|11\rangle.
\]

De forma general, un sistema de \(n\) qubits posee \(2^n\) vectores base.

Estos estados desempeñan un papel análogo al de los bits clásicos, ya que constituyen los posibles resultados de una medición en la base computacional.

---

### Espacio de Hilbert y computación cuántica

Prácticamente toda la computación cuántica puede interpretarse como transformaciones dentro de un espacio de Hilbert.

En este contexto,

- un **estado cuántico** corresponde a un vector;
- una **compuerta cuántica** corresponde a un operador unitario;
- una **medición** proyecta el estado sobre una de las bases posibles;
- la evolución temporal del sistema está descrita por transformaciones lineales.

Este lenguaje matemático unifica la física cuántica y la teoría de la información cuántica.

---

> **Nota histórica**
>
> El concepto de espacio de Hilbert fue desarrollado por el matemático alemán **David Hilbert** a comienzos del siglo XX. Años más tarde, John von Neumann demostró que esta estructura constituía el marco matemático natural para formular la mecánica cuántica, convirtiéndose desde entonces en el lenguaje estándar de la teoría cuántica moderna.
