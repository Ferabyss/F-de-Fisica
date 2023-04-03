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

La **varianza** es el cuadrado de $$\sigma[A]$$ es decir:
  
   $$Var[A]:= <A^2>_{\psi_n} - <A>_{\psi_n}^2$$
  
Finalmente, la **incertidumbre** $$\Delta A$$ de un observable A es la raiz cuadrada de la *varianza*:

  $$\Delta A = \sqrt{<A^2>-<A>^2}$$
  

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
  
$$<A>_\psi = (\psi, \hat{A}\psi) = \hat{A}\psi$$
  
El cual es el valor esperado del operador $$\hat{A}$$ en el estado $$\psi$$.
  
El operador adjunto está definido como:
  
   $$(\psi, \hat{A}^\dag \phi)=( \hat{A}^\dag \psi,\phi)$$
  
El operador $$\hat{A}$$ se le dice **Hermitiano** cuando: 
  
  $$(\psi, \hat{A}\psi)=( \hat{A}\psi,\psi)$$
 
Los operadores asociados a variables dinámicas deben ser hermitianos. Tanto la suma de operadores hermitianos $$\hat{A}+\hat{B}$$ como la enésima potencia de un operador hermitiano $$\hat{A}^n$$, son hermitianos.
  
  
{: .nota-title }
> Teorema 1:
>
>
Los eigenvalores de cualquier operador hermitiano son reales. En otras palabras: Sea $$\hat{A}$$ hermitiano se tiene que $$\hat{A}\phi=a\phi \implies a=a*$$
  
 {: .nota-title }
> Teorema 2:
>
>
Los eigenvectores $$\psi,\phi$$ correspondientes a eigenvalores distintos de un operador hermitiano son ortogonales. Es decir, $$\psi \perp \phi$$
  
- **Operador posición:**           

  $$  \hat{X} \psi = x \psi$$
  
- **Operador momento:**            
  
  $$ \hat{P} \psi = -i\hbar \frac{\partial \psi}{\partial x}$$
  
- **Operador energía cinética:**   
  
  $$ \hat{K}\psi = \frac{1}{2m} \hat{P}^2\psi$$
  
- **Operador energía potencial:**  
  
  $$\hat{V} = \sum_{n=0}^{\infty} \frac{\hat{x}^n}{n!} $$
  
  
{: .nota-title }
> Operador energía:
>
>
Podemos definir al **operador Hamiltoniano** como el operador asociado a la energía $$\hat{H}:= \hat{K} + \hat{V}$$ tal que:
  $$\hat{H}=i\hbar \frac{\partial \psi}{\partial t} (r,t)$$

Cada operador cuántico tiene cierta incertidumbre que varía de manera distinta. A continuación se muestran las incertidumbres de la posición y del momento, calculados a partir de la definición de varianza.
  
 $$\Delta X_{\psi_n}= L \sqrt{\frac{1}{12}-\frac{1}{2n^2\pi^2}}$$
 
 $$\Delta P_{\psi_n} = \frac{\pi\hbar}{L}n}$$
  
  Por lo que, al multiplicar ambos tenemos que:
  
   $$\Delta X_{\psi_n}\Delta P_{\psi_n}= \frac{\hbar}{2}\sqrt{\frac{n^2\pi^2}{3}-2}>\frac{\hbar}{2}$$


