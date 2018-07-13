---
title: Markdown
date: 2018-07-09
categories: ["tech"]
tags: ["markdown"]
---

Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. As the initial description of Markdown contained ambiguities and unanswered questions, many implementations and extensions of Markdown appeared over the years to answer these issues.

### 1. Text using Markdown syntax

```
Heading
=======

## Sub-heading
 
Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_,
**bold**, `monospace`.

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. wash
  2. rinse
  3. repeat

A [link](//example.com).

![Image](/content/images/Image_icon.png)

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.
```

### 2. Corresponding HTML produced by a Markdown processor

```
<h1>Heading</h1>

<h2>Sub-heading</h2>

<p>Paragraphs are separated
by a blank line.</p>

<p>Two spaces at the end of a line<br />
produces a line break.</p>

<p>Text attributes <em>italic</em>,
<strong>bold</strong>, <code>monospace</code>.</p>

<p>Horizontal rule:</p>

<hr />

<p>Bullet list:</p>

<ul>
<li>apples</li>
<li>oranges</li>
<li>pears</li>
</ul>

<p>Numbered list:</p>

<ol>
<li>wash</li>
<li>rinse</li>
<li>repeat</li>
</ol>

<p>A <a href="//example.com">link</a>.</p>

<p><img alt="Image" src="/content/images/Image_icon.png" /></p>

<blockquote>
<p>Markdown uses email-style &gt; characters for blockquoting.</p>
</blockquote>

<p>Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.</p>
```

### 3. Text viewed in a browser

Heading
=======

## Sub-heading
 
Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_,
**bold**, `monospace`.

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. wash
  2. rinse
  3. repeat

A [link](//example.com).

![Image](/content/images/Image_icon.png)

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.

### References

  * [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
  * [Official website](https://daringfireball.net/projects/markdown/)