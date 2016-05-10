---
layout: post
title: Bessemer Series&#58; Compiler Pipeline
tags: [programming, compilers]
date: 2015-05-10 00:00:00
summary: A brief overview of the compiler pipeline.
---
Before I start flooding the internet with a bunch of drivel about compilers, it would probably make sense to write a high-level overview about what compilers do and the general process by which they do it.

## What Is A Compiler?
> A compiler is a computer program that transforms source code written in a programming language (the source language) into another computer language (the target language)

That's it!  The simplest and most formal definition says that a compiler is just an automated translator.  It takes as input the text files making up your program(s), and outputs code in a different language.

Now, most of the time, we're compiling a higher-level langauge like Java or C++ into some form of machine code like x86 or ARM; this is the more common definition of a compiler (probably the one you're familiar with), and is the one that I'll be using in these posts.

## What Are the Intermediate Steps of Compilation?
Compiling generally consists of the following steps, in order:

1. **Lexing** - Processing the text of the source file, converting it into a set of _tokens_, or a single data structure representing each individual unit of meaning.  More on this later.
2. **Parsing** - Making sure the stream of tokens from the previous step matches the grammar of the programming language, and then generating a tree of data structures that represents that program.
3. **Semantic Analysis** - The previous two steps do a bit of error checking, looking for invalid characters or constructs that aren't part of the grammar.  This is the final level of error checking; all remaining rules of the language are encoded and checked here.
4. **Intermediate Code Generation** - The tree that was generated earlier is converted to another intermediate form for use in the next step.  There are a few common intermediate forms here that I'll discuss in a later post.
5. **Optimization** - Improving the intermediate form in some **without altering the program's behavior**.  This frequently means improving runtime or reducing memory usage, but there are a few other factors we may optimize for that I'll write about later.
6. **Code Generation** - Takes whatever intermediate representation we have left and converts it into the final language.

These are admittedly pretty vague descriptions, so let's break out the analogies.

### Yay, analogies!

**Lexing**, also known as scanning, is what your brain does to words automatically while you read a book.  When you're reading, you don't see the letters "c", "a", and "t"; you see the whole word "cat".  Your brain does a form of tokenization for you, parsing the stream of letters on the page to individual tokens, or words.  Within a compiler, the lexer performs a similar function, taking the string `int cats = 23` and converting it into a series of four tokens: the type (`int`), the identifier (`cats`), the equals sign (`=`), and the integer literal (`23`).

**Parsing** is similar to one of the more arduous assignments from middle and high school: analyzing the structure of sentences.  At the highest level, each word in the sentence gets a part of speech; these are grouped into various types of phrases, which compose independent parts of a sentence (like subject or direct object), which further compose multiple clauses in a sentence.  The parsing step does this exact analysis, just on the programming language rather than English.  It builds up a data structure called the _abstract syntax tree_, which I'll get into later, along with more on language theories in general.

**Semantic Analysis** is just looking to see if the syntax tree, or more generally, the program itself, makes sense.  In English, the sentence "The color five tastes bitter" is grammatically correct, but makes no sense.  Similarly, in programming, the statement `int cats = "dogs"` is grammatically correct, but you clearly can't assign a string to an integer, so it doesn't make sense semantically.  This step is designed to catch all errors like this.  As a caveat, we effectively guarantee after this step that there are no errors in the program.

**Intermediate Code Generation** takes the previously generated abstract syntax tree and generates a more generic representation of it that's easier for our program to work with.  This may happen multiple times during the compilation process, because certain data formats might be better for certain optimizations than other formats.  I can't really think of a great analogy at the moment so yinz will have to live without one.

**Optimization** tries to improve your code in some way without changing its behavior.  For example, if somewhere in your code, you have `if(false){...}` containing an enormous code block, that entire set of code will just be removed, since it can never actually run.  

**Code Generation** is the final step of converting an intermediate representation into the final assembly code.  By this point, our code is likely in an intermediate representation that closely resembles actual assembly, so the conversion would be like writing actual assembly from an assembly-based pseudocode.

## Now What?
Hopefully this post gives a decent overview of the general workflow of a compiler, as well as introducing some of the basic terms that I'll use.  It's definitely not meant to be thorough or exhaustive; that'll come with the future posts.  Feel free to [reach out to me on Twitter](https://twitter.com/joelroggeman) if you have any questions.  Next time: designing and coding an abstract syntax tree!
