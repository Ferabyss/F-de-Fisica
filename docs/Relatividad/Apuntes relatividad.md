---
title: Capitulo 3 Analisis Tensorial
layout: default
parent: Relatividad General
---

# Un curso de RELATIVIDAD GENERAL
## 7mo semestre de Licenciatura

### Por: María Fernanda Martínez Vázquez

Basado en la clase de R.G. Impartida por: Dr. Alfredo Lopez Ortega.

$$
\begin{gathered}
\mathrm{Si} \ V^{\alpha}=\left(V^{0}, V^{1}, V^{2}, V^{3}\right) \\
V_{\alpha}=\left(V_{0}, V_{1}, V_{2}, V_{3}\right)=\left(-V^{0}, V^{1}, V^{2}, V^{3}\right)
\end{gathered}
$$

En Minkowski en coordenadas cartesianas sólo se debe cambiar el signo de la componente temporal.

Recordando que en Minkowski en coordenadas cartesianas:

$$\eta_{\alpha \beta}=\hat{e}_{\alpha} \cdot \hat{e}_{\beta}$$

Análogamente para \(\mathbb{R}^{3}\):

$$
\begin{gathered}
\hat{e}_{i} \cdot \hat{e}_{j}=\left\{\begin{array}{c}
\hat{e}_{x} \cdot \hat{e}_{x}=\hat{e}_{y} \cdot \hat{e}_{y}=\hat{e}_{z} \cdot \hat{e}_{z}=1 \\
0, \text{ en cualquier otro caso}
\end{array}\right. \\
\hat{e}_{i} \cdot \hat{e}_{j}=\delta_{i j} \\
\delta^{i j} \delta_{i k}=\delta_{k}^{i} \\
\delta_{i j}=\operatorname{diag}(1,1,1)=\delta^{i j}
\end{gathered}
$$

Esto implica que las coordenadas entre los colectores y los vectores correspondientes no cambian, por eso el gradiente se ve como un vector en \(\mathbb{R}^{3}\) y coordenadas cartesianas, sin embargo, estrictamente es un covector.

En \(\mathbb{R}^{2}\) en Coordenadas Cartesianas:

$$
\begin{gathered}
\tilde{d} \phi=\left(\partial_{x} \phi, \partial_{y} \phi\right) \\
(\tilde{d} \phi)_{i} \delta^{i j}=(\tilde{d} \phi)^{j} \quad (\tilde{d} \phi)^{i}=(\tilde{d} \phi)_{k} \delta^{k i}
\end{gathered}
$$

Para \(\mathbb{R}^{2}\) en Coordenadas Polares:

$$\tilde{p} \cdot \tilde{q}=\frac{1}{2}\left((\tilde{p}+\tilde{q})^{2}-(\tilde{p})^{2}-(\tilde{q})^{2}\right)$$

Toman un covector y producen un número.
\(\vec{V}(\tilde{P})\) sea un número.

DEF: \(\vec{V}(\tilde{P})=\tilde{P}(\vec{V})=P_{\alpha} V^{\alpha}\)

Componentes: El vector actuando sobre los vectores base del EVD \(\left\{\vec{\omega}^{\alpha}\right\}\)

Tensores \(\binom{3}{0}\) forman un espacio vectorial con dimensión 64.

$$\vec{V}\left(\vec{\omega}^{\alpha}\right)=V^{\alpha}$$

Sean V, W vectores y su producto tensorial:

$$\text{Base} \left\{\hat{e}_{\alpha} \otimes \hat{e}_{\beta}\right\}$$

Martes 15 de Octubre de 2024

## Tensores tipo \(\binom{M}{N}\)

- Son objetos con \((M+N)\) argumentos.
- Lineal en cada argumento.

$$
\begin{aligned}
M &\rightarrow \text{covectores} \\
N &\rightarrow \text{vectores}
\end{aligned}
$$

- Evaluando en M covectores, N vectores produce un número.
- Los tensores son las funciones escalares.
- Sus componentes tienen M superíndices y N subíndices.

Tensor \(\binom{3}{2}\). Podemos expresar a un tensor tres-dos como sigue:

$$\overleftrightarrow{T}\left(\tilde{\omega}^{\alpha}, \tilde{\omega}^{\beta}, \tilde{\omega}^{\gamma}, \hat{e}_{\mu}, \hat{e}_{\nu}\right)=T_{\mu \nu}^{\alpha \beta \gamma}$$

Los tensores tienen una ley de transformación bien definida. Caso de un tensor \(\binom{1}{1}\):

$$
\begin{gathered}
R_{\bar{\beta}}^{\bar{\alpha}}=\Lambda_{\lambda}^{\bar{\alpha}} \Lambda_{\bar{\beta}}^{\sigma} R_{\sigma}^{\lambda} \\
\Lambda \rightarrow \frac{\partial x}{\partial x} \quad \text{Transformación Lineal} \\
\frac{\partial \psi(x,y)}{\partial x}=0
\end{gathered}
$$

Hay cantidades físicas cuya ley de transformación no nos permite decir que son invariantes aunque no sean vectores, es decir, hay cantidades que no son ni escalares ni vectores y se transforman como tensores. Ejemplo de ello es el tensor de energía.

## Tensor de Energía Momento

Es un tensor dos-cero tal que sus componentes son:

$$T^{\alpha \beta}=\overleftrightarrow{T}\left(\tilde{d} x^{\alpha}, \tilde{d} x^{\beta}\right)$$

es el flujo de la componente \(p^{\alpha}\) a través de \(x^{\beta}=\text{cte}\).

\(T^{0i}\) es el flujo de energía a través de \(x^{i}=\text{cte}\).

\(T^{x0}\): Tensor Energía momento para polvo.

En el Sistema de Referencia Comóvil:

$$\nabla^{2} \phi=4 \pi G \rho_{m}$$

donde \(\rho\) es la densidad de energía.

En RG no sólo la densidad de masa produce campo gravitacional sino también los flujos, la densidad de energía y la densidad de momento. En RG el tensor de energía momento es la fuente del campo gravitacional.

---

Martes 29 de Octubre del 2024

## El polvo y un fluido perfecto

Para un fluido perfecto, el tensor de energía momento es:

$$T_{fp}^{\alpha\beta} = (\rho+P)U^{\alpha} U^{\beta} + P\eta^{\alpha \beta}$$

$$T_{polvo}^{\alpha \beta}=\rho U^{\alpha}U^{\beta}$$

$$T_{vacio}^{\alpha\beta}=0$$

---

Jueves 31 de Octubre del 2024

Los astrónomos habían llegado a la conclusión de que todas las estrellas eran estables independientemente de su masa. Sin embargo, sir Arthur Eddington y un estudiante se preguntaron qué consecuencias tiene la teoría de RG sobre la evolución estelar.

$$(\rho + P)a_i + \partial_i P=0 \quad \text{(Ec. de Euler)}$$

$$\rho \vec{a} = -\nabla P$$

Esta última no funciona para explicar la verdadera evolución estelar; la anterior y más general sí.

Debe llegar un momento en el que la presión ya no es suficiente, por lo que hay un límite a la masa de una estrella, conocido como el **límite de Chandrasekhar**.

- 1er parcial: 12 de Noviembre (caps. 1, 2 y 3)
- 2do parcial: 19 de Diciembre (caps. 4, 5 y 6)
- 3er parcial: 14 de Enero (caps. 7 y 8)

No se ve el 4.8: Ley de Gauss.

---

## Capítulo 5: Prefacio a Curvatura

Hasta ahora solo hemos visto relatividad especial. En la RE las fuerzas juegan un papel secundario, y jamás hemos introducido a la gravedad como una fuerza interactuante.

En el capítulo 5 veremos la geometría diferencial desde el punto de vista más simple y útil para RG, y justificaremos por qué la gravedad es la manifestación de la curvatura del espacio-tiempo.
