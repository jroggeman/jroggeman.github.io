---
layout: post
title: A Compiler for Education
---
Last spring, I took an introductory course on compiler design.  The course (and, for that matter, compilers in general) involved the application of many different branches of computer science, and culminated in the creation of a toy compiler for a subset of Java called _MiniJava_.  Though I thoroughly enjoyed the class, the project felt really rushed, so my final project felt a bit sloppy and buggy.

It left me feeling unsatisfied, and I've wanted to get more involved with compilers since then.  So, now that the semester is over and I have a bit more free time, I've started a new compiler project: [Bessemer](http://github.com/jroggeman/bessemer), the educational compiler.

## What is Bessemer?

Bessemer is a simple compiler that's meant to be used as a learning resource.  I've always enjoyed teaching people about the cooler parts of computer science, but never had many teaching opportunities outside of occasional tutoring.  My goal with Bessemer is to provide a learning resource for anyone who wants to learn more about compilers, or programming language implementations in general (while learning more about compilers myself in the process).

The project will have a few major focuses:

 - **Software quality** : Since it's meant to be a learning resource, I'm hoping to keep the code as clean, readable, and straightforward as possible.
 - **Thorough Test Suite** : Automated tests are amazing and everyone should have them.  Here, not only do they make refactoring easier, but they also provide another source of documentation for the compiler's expected behavior.
 - **Modularity** : Keeping the various parts of the compiler separate and isolated from each other will make it easier to test and modify.  It also makes it easy to toggle language features, optimizations, output format, etc.
 - **_Useful_ comments** : Ideally, well-written code will document itself.  Naturally, compilers are full of complicated algorithms that make self-documentation all but impossible.  Where the code fails, I'll try to include comments explaining the algorithms being used.
 - **Thorough documentation** : Comments are great at the granularity of a single file, but fall short when it comes to the higher-level abstractions of what's going on.  I plan to use the wiki to go in a bit more depth on the relevant topics where code comments don't seem appropriate.

Basically, I'd like to provide enough information through the code, comments, tests, and docs that it'll answer any relevant questions about compilers.  I'll also document the process through these blog posts along the way.
 
## Implementation Details
A few technical details about Bessemer:

- The project will be written in Java.  While not necessarily my favorite language, it's the object oriented language I'm most comfortable in, and it's widely known.  Its verbosity is also a plus in this case, as we want the code to be as explicit as possible for the sake of learning.
- The input will initially be a subset of C.  While I had considered doing Java, I didn't want to deal with automatic memory management or creating a runtime/JVM.  Once the C compiler works to a degree, I'll look into modifying the language a bit, such as adding classes or garbage collection.
- The compiler's output language will tentatively be MIPS.  While this limits what it'll run on, it's the assembly language I'm most familiar with, and is a very simple RISC architecture.  Once the full compiler pipeline is working, I'll look into other dialects like ARM.

Now that I'm finally out of school, I hope to devote a fair amount of time to working on it over the summer.  We'll see how it goes!
