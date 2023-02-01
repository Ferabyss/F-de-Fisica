---
title: Cuerpo Rígido
layout: default
parent: Mecánica Clásica
---
# Cuerpo rígido

## Teoría

## Ejercicio 1

{: .flex-justify-around}
Una esfera de radio R y masa M descansa sobre el borde de una esquina. Al comenzar a rodar el rozamiento entre la esquina y la esfera es suficiente para evitar el desplazamiento. Determine el ángulo $$\alpha$$ y la velocidad angular cuando la esfera abandona el borde.

Expresando newton en coordenadas polares. Para la componente radial se tiene:

$$\tag{1}-mR\dot{\alpha}^2=N-mgcos\alpha$$ 

Mientras que para la componente angular:

$$\tag{2}mR\ddot{\alpha}=mgsin\alpha-F_r$$

Al aplicar una torca en el punto de rotación, es decir, la esquina:

$$|\tau|=Rmgsin\alpha=I\ddot{\alpha}$$ 

{: .nota-title }
> Ejes Paralelos:
>
>
Por ejes paralelos sabemos que $$I=I_{cm}+md^2$$ con d la distancia entre los dos ejes. 

Por lo que el momento de inercia de la superficie de la esfera está dada por:

$$I=\frac{2}{5}mR^2+mR^2=\frac{7}{5}mR^2$$

Sustituyendo en la ecuación de la torca y despejando:

$$\ddot{\alpha}=\frac{5}{7}\frac{gsin\alpha}{R}$$

Por regla de la cadena:

$$\dot{\alpha}\frac{d\dot{\alpha}}{d\alpha}=\frac{5}{7}\frac{gsin\alpha}{R}d\alpha$$

Integrando:

$$\int_0^{\dot{\alpha}}\dot{\alpha}d\dot{\alpha}=\int_0^{\alpha}\frac{5}{7}\frac{gsin\alpha}{R}d\alpha$$

$$\frac{\dot{\alpha}^2}{2}=\frac{5}{7}\frac{g}{R}(1-cos\alpha)$$

Despejando:

$$\tag{3}\dot{\alpha}^2=\frac{10g}{7R}(1-cos\alpha)$$

Sustituyendo en la ec. 1 cuando $$N=0$$, es decir cuando, la esfera abandona el borde, tenemos que:

$$\frac{10\cancel{-mgR}}{7\cancel{R}}(1-cos\alpha)=\cancel{-mg}cos\alpha$$ 

$$\frac{10}{7}(1-cos\alpha)=cos\alpha$$

$$1=\frac{17}{10}cos\alpha\implies cos\alpha=\frac{10}{17}$$

$$\therefore \alpha=cos^{-1} (\frac{10}{17}) \approx53.968$$

Finalmente, sustituyendo en la ec. 3 y despejando $$\dot{\alpha}$$:

$$\dot{\alpha}=\sqrt{\frac{10g}{7R}(1-\frac{10}{17})}$$

$$\therefore \dot{\alpha}=\sqrt{\frac{10g}{17R}}$$
