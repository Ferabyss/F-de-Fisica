---
title: Cuerpo Rígido
layout: default
parent: Mecánica Clásica
---
# Cuerpo rígido

## Teoría

## Ejercicio 1

Una esfera de radio R y masa M descansa sobre el borde de una esquina.Al comenzar a rodar el rozamiento entre la esquina y la esfera es suficiente para evitar el desplazamiento. Determine el ángulo $$\alpha$$ y la velocidad angular cuando la esfera abandona el borde.

Expresando newton en coordenadas polares. Para la componente radial se tiene:

$$\tag{1}-mR\dot{\alpha}^2=N-mgcos\alpha$$ 

Mientras que para la componente angular:

$$\tag{2}mR\ddot{\alpha}=mgsin\alpha-F_r  ...(2)$$

Al aplicar una torca en el punto de rotación, es decir, la esquina:

$$|\tau|=Rmgsin\alpha=I\ddot{\alpha}$$ 

{: .nota-title }
> Ejes Paralelos:
>
>
Por ejes paralelos sabemos que $$I=I_{cm}+md^2$$ con d la distancia entre los dos ejes. 

Por lo que el momento de inercia de la superficie de la esfera está dada por:

$$I=\frac{2}{5}mR^2+mR^2=\frac{7}{5}mR^2$$

Sustituyendo I en la ec. de la torca:

$$\ddot{\alpha}=\frac{5}{7}\frac{gsin\alpha}{R}$$
