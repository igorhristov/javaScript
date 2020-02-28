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
#### for
#### for...in
#### for...of
#### for await...of
#### while

=======================================================================
### Others
#### debugger
#### export
#### import
#### import.meta
#### label

