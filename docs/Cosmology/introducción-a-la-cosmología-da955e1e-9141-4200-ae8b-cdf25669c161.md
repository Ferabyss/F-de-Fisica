---
title: Introducción
layout: default
margin: auto
parent: Cosmologia
---

# Introducción a la Cosmología

## 1. Introducción

### 1.1. Principio Copérnicano o Principio Cosmológico

Friedmann propuso que el universo es homogeneo e isotrópico.
Homogeneo: Que tiene la misma forma en todos lados.
Isotrópico: Queno importa en què direcciòn se observe, el universo luce igual.

El CMB tiene ciertas fluctuaciones del orden de $10^{-5}$, sin embargo dichas perturbaciones son tan pequeñas que a grandes escalas $(\approx 300MPc)$ son despreciables.

## 2. La métrica de Robertson-Walker

La esfera es un elemento 2-dimensional inmersa en $\mathbb R^3$. En cosmología usamos la métrica de Robertson-Walker.

Que en coordenadas cartesianas está dada por:

$$
d \vec{l}^2=d x_1^2+d x_2^2+\frac{\left(x_1 d x_1+x_2 d x_2\right)^2}{R^2-x_1^2-x_2^2}
$$

Mientras que en coordenadas polares para una 2-esfera:

$$
\begin{aligned}
& x_1=r^{\prime} \cos \theta \quad x_2=r^{\prime} \operatorname{sen} \theta \\
& d \vec{l}^2=\frac{R^2 d r^{\prime 2}}{R^2-r^{\prime 2}}+r^{\prime 2} d \theta^2
\end{aligned}
$$

Haciendo un cambio de variable, siendo: $r = r’/R$ entonces la métrica para una 2-esfera es:

$$
\overrightarrow{d l}^2=R^2\left\{\frac{d r^2}{1-r^2}+r^2 d \theta^2\right\}
$$

Sin embargo, para cosmologìa ocupamos más coordenadas, en concreto necesitamos agregar el tiempo y el ángulo $\phi$.

$$
\begin{aligned}
& d s^2=d t^2-R^2(t)\left\{\frac{d r^2}{1-k r^2}+r^2 d \theta ^2+ r^2 \operatorname{sen}^2 \theta d^2 \phi\right\}
\end{aligned}
$$

Debemos tomar la métrica de Robertson-Walker y las ecuaciones de Einstein y encontrar las ecuaciones de campo.

## 3. Ecuación de la geodésica

## 4. Corrimiento al rojo

En una geometría simple donde el universo es estàtico y se encuentra en expansión acelerada es fácil e intuitivo medir distancias. Sin embargo, estamos en un universo en expansión, la longitud de onda se va haciendo más grande debido a la expansión de universo, por lo que si me mandan una onda azul la voy a recibir en rojo. Definimos al Corrimiento al rojo como:

$$
z=\frac{\lambda_0-\lambda_1}{\lambda_0}=1-\frac{\lambda_1}{\lambda_0}=1-\frac{R(t_1)}{R(t_0)}
$$

Tal que, tenemos que el factor de escala está dado por:

$$
a=\frac{1}{1+z}
$$
Cuando $z$ igual a 1 el universo tenía la mitad de su tamaño, cuando $z=2$ el universo tenía un tercio de su tamaño.

El tiempo t es un parámetro de evolución.

$L$ es la energía que emite un cuerpo celeste, que se distribuye uniformemente en todas direcciones, sin embargo, nosotros sólo podemos observar una pequeña porción, es por ello que definimos a $L$ en tèrminos de la energía luminosa querecibimos mediante la porción de energía que recibimos $F$ multiplicada por el área:

$$
L= 4\pi d_L^2 \times F
$$

Sin embargo, esto solo funciona para distancias cortas donde la expanción del universo puede despreciarse, sin embargo, para distancias grandes se ve modificada por la expansión del universo. Definimos a $d_L$ la distancia luminosa como:

$$
d_L =Rr_0 (1+z)
$$

Si expandemos $R(t)$, el radio de expansión del universo, en una serie de Taylor para $H_0(t-t_0)$ obtenemos que el parámetro de Hublle está dado por:

$$
H_0= \frac{\dot R(t_0)}{R(t_0)}=\frac{\dot a(t_0)}{a(t_0)}
$$
Con $\dot R(t_0)$ la velocidad de expansión del universo, y $\ddot{R}(t_0)$ la aceleración de la expansión del universo.

$$
q=-\frac{\ddot{R}(t_0)}{\dot R^2(t)}R(t)
$$
Con $q(t)$ la “desaceleración del universo”.

La ley de Hubble solo se cumple para distancias lumniosas pequeñas.

$$
z=H_0d_L
$$

Para medir distancias siempre se debe recurrir al modelo.

Modelo fiducial: Lambda Cold Dark Matter, se ocupa para comparar con nuevos modelos.


Lunes 4 de Noviembre

#Aproximación de LowRow

La siguiente aproximación solo es válida cuando épsilon y phi son demasiado pequeñas.


 $$\begin{align} {\color{FFFFFF}H^{2}=\frac{\pi_{r}}{3 m_{l}^{2}} v} \end{align}$$  


$$\begin{align} {\color{FFFFFF}3 H \dot{\varphi}=-V_{\varphi \varphi}} \end{align}$$

 $$\begin{align} {\color{FFFFFF}\eta=\frac{V_{r p q}}{3 H^{2}}} \end{align}$$  

Derivando la Ec. 2

 $$\begin{align} {\color{FFFFFF}3 \dot{H} \dot{\varphi}+3 H \dot{\varphi}=-V_{1 \varphi \varphi} \dot{\varphi}} \end{align}$$ 

 $$\begin{align}\dot{\phi}=-\frac{H}{H} \dot{\varphi}+\frac{V, \varphi \varphi}{3 H} \dot{\phi} \end{align}$$

  $$\begin{align} {\color{FFFFFF}\Rightarrow V_{\phi \varphi}=-\frac{3 H \dot{\phi}}{\phi}-\frac{3 H}{H} \dot{H}} \end{align}$$

Luego sea $$ d_{1V} = -Hdt$$

$$  $$

Recordando la ecuación de Friedman:
...


