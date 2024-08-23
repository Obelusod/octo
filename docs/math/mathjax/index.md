---
layout: page
title: MathJax
parent: Math
has_children: true
nav_order: 3
math: mathjax
hide_title: true
has_toc: true
has_right_toc: true
released: true
---
# MathJax v3

You can customise Just the Docs sites to support [MathJax],
as explained in the [configuration suggestions]. 
Pages then render $$\mathrm{\LaTeX}$$ code in [kramdown math blocks] using MathJax.

For example:

$$
\begin{aligned}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{aligned}
$$

To see the $$\mathrm{\LaTeX}$$ source of the formula, right-click anywhere on it.

Some [further tests] illustrate the use of math in Markdown.

[MathJax]: https://mathjax.org
[configuration suggestions]: ../config
[kramdown math blocks]: https://kramdown.gettalong.org/syntax.html#math-blocks
[further tests]: ../tests
