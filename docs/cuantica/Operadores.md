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


La expresión para el **valor esperado** o promedio de un observable _A_ es:
                                            
$$ <A>_{\psi_n} := (\psi_n, \hat{A} \psi_n)=\int_{-\infty}^{\infty}\psi_n^*(x)\hat{A} \psi_n (x)dx $$

La **raíz de la desviación cuadrática media** caracteriza la dispersión de la medición en torno al valor promedio $$<A>$$, mientras más alta sea, indica que los valores están dispersos en un rango más amplio. Para un estimador insesgado, la RDCM es la desviación estándar. 

$$\sigma [A]:=\sqrt{<A^2>-<A>^2} $$

La **incertidumbre** $$\sigma^2 [A]$$ de un observable A se mide con una *varianza*, y es el cuadrado de la desviación estándar:

  $$\sigma^2 [A]:=Var[A]$$
  
Es decir:
  
  $$\sigma^2 [A]:= <A^2>_{\psi_n} - <A>_{\psi_n}^2$$

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
- $$(c\^{A})\psi : \equiv c(\^{A}\psi)$$

Los operadores lineales no son siempre acotados, i.e. hay veces en las que se pueden salir del espacio, sin embargo, nos limitaremos a trabajar con aquellos que si están acotados.
  
Para cualquier operador se cumple que:  
  
$$<A>_\psi = (\psi, \hat{A} \psi) = \hat{A} \psi$$
  
Los operadores básicos en mecánica cuántica son:
  
1. **Operador posición:** $$  \hat{X} \psi = x \psi$$
2. **Operador momento:** $$ \hat{P} \psi = -i\hbar \frac{\partial \psi}{\partial x}$$
3. **Operador energía cinética:** $$ \hat{K}\psi = \frac{1}{2m} \hat{P}^2\psi$$
4. **Operador energía potencial:** $$\hat{V} = \sum_{n=0}^{\infty} \frac{\hat{x}^n}{n!} $$
  
Por la ecuación de schrodinger: 
  
   $$ \hat{H} \psi = E \psi$$

De donde:  
  
  $$E =(\psi, \hat{H}\psi)$$
  
{: .nota-title }
> Operador energía:
>
>
Podemos definir al **operador Hamiltoniano** como el operador asociado a la energía $$\hat{H}:= \hat{K} + \hat{V}$$ tal que:

  $$\hat{H}=i\hbar \frac{\partial \psi}{\partial t} (r,t)$$

  

