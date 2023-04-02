---
title: Operadores Hermitianos
layout: default
parent: Mecánica Cuántica
---
# Operadores Hermitianos

## Preliminares

Para poder asignar una interpretación probabilística a la mecánica cuántica se opera siempre con **funciones cuadrado integrables**.

De modo que para toda $$\psi (r,t)$$ se cumpla que:

$$\int_{\mathbb {R} ^{3}}~|\psi |^{2}dV < \infty$$

Es decir, funciones tal que la integral exista.

### Conceptos importantes de probabilidad


La expresión para el **valor promedio** de un observable _A_ es:

$$ <A> = \frac{<\psi|A|\psi>}{<\psi|\psi>} $$
                  
O bien:
                                            
$$ <A>_{\psi_n} = (\psi_n, \hat{A} \psi_n)=\int_{-\infty}^{\infty}\psi_n^*(x)\hat{A} \psi_n (x)dx $$

La **raíz de la desviación cuadrática media** caracteriza la dispersión de la medición en torno al valor promedio $$<A>$$, mientras más alta sea, indica que los valores están dispersos en un rango más amplio. Para un estimador insesgado, la RDCM es la desviación estándar. 

$$\sigma [A]=\sqrt{<A^2>-<A>^2} $$

La **incertidumbre** de un observable A se mide con una *varianza*, la cual es el cuadrado del valor presentado justo arriba:

  $$\sigma^2 [A] = Var[A]$$
  
Es decir:
  
  $$Var[A]_{\psi_n}:= <A^2>_{\psi_n} - <A>_{\psi_n}^2$$

## Operadores lineales

Las variales dinámicas(psición, momento, etc.) tienen un operador asociado que opera en el espacio de Hilbert.

{: .nota-title }
> Espacio de Hilbert:
>
>
Espacio vectorial toplógico donde todas las sucesiones de Cauchy son convergentes.

Sea $$U$$ el conjunto de operadores lineales que van del espacio de Hilbert al espacio de Hilbert. Y dados dos operadores $$\hat{A}, \hat{B} \in U$$
Se tiene que:

- $$(\^{A} + \^{B})\psi : \equiv \^{A} \psi + \^{B} \psi $$
- $$c(\^{A})\psi : \equiv c(\^{A}\psi$$

Los operadores lineales no son siempre acotados, i.e. hay veces en las que se pueden salir del espacio, sin embargo, nos limitaremos a trabajar con aquellos que si están acotados.


