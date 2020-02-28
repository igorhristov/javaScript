# Statements and declarations

JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, but a group of keywords.

## Statements and declarations by category

=======================================================================
### Control flow
#### Block
    A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.
#### break
    Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
#### continue
    Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
#### Empty
    An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
#### if...else
    Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
#### switch
    Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
#### throw
    Throws a user-defined exception.
#### try...catch
    Marks a block of statements to try, and specifies a response, should an exception be thrown.

=======================================================================
### Declarations
#### var
    Declares a variable, optionally initializing it to a value.
#### let
    Declares a block scope local variable, optionally initializing it to a value.
#### const
    Declares a read-only named constant.

=======================================================================
### Functions and classes
#### function
    Declares a function with the specified parameters.
#### function*
    Generator Functions enable writing iterators more easily.
#### [async function](link)
    Declares an async function with the specified parameters.
#### return
    Specifies the value to be returned by a function.
#### class
    Declares a class.

=======================================================================
### Iterations
#### do...while
    Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
#### for
    Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
#### for...in
    Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
#### for...of
    Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
#### for await...of
    Iterates over async iterable objects, array-like objects, iterators and generators, invoking a custom iteration hook with statements to be executed for the value of each distinct property.
#### while
    Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

=======================================================================
### Others
#### debugger
    Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
#### export
    Used to export functions to make them available for imports in external modules, and other scripts.
#### import
    Used to import functions exported from an external module, another script.
#### import.meta
    An object exposing context-specific metadata to a JavaScript module.
#### label
    Provides a statement with an identifier that you can refer to using a break or continue statement.

